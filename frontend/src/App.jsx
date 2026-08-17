import React, { useState, useEffect } from 'react';
import Resume from './components/Resume';
import TopBanner from './components/TopBanner';

function App() {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || '/profile.jpg');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfilePic(base64String);
        localStorage.setItem('profilePic', base64String); // Save for persistence
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    let isMounted = true;
    
    const fetchVisitorCount = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        const response = await fetch(`${apiUrl}/api/visitors`);
        if (!response.ok) {
          throw new Error('Failed to fetch visitors');
        }
        const data = await response.json();
        
        if (isMounted) {
          setVisitorCount(data.count);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <>
      <TopBanner count={visitorCount} loading={loading} error={error} />
      
      <div className="header-controls">
        <button 
          className="create-resume-btn" 
          onClick={() => alert("Coming soon")}
        >
          Create Resume
        </button>
        <label style={{ cursor: 'pointer' }} title="Upload professional photo">
          <input 
            type="file" 
            accept="image/*" 
            style={{ display: 'none' }} 
            onChange={handleImageUpload} 
          />
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </label>
      </div>

      <Resume visitorCount={visitorCount} loading={loading} error={error} />
    </>
  );
}

export default App;
