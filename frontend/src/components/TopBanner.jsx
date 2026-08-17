import React, { useState, useEffect } from 'react';

function TopBanner({ count, loading, error }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading && !error && count !== null) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [count, loading, error]);

  if (loading || error || count === null) {
    return null;
  }

  return (
    <div className={`top-banner ${visible ? '' : 'hidden'}`}>
      Your visitor number is #{count}
    </div>
  );
}

export default TopBanner;
