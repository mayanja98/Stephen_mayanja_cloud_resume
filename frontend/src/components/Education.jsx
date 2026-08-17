import React from 'react';

function Education() {
  return (
    <div>
      <div className="section-heading">EDUCATION</div>

      {/* MS */}
      <div className="education-item">
        <div className="education-header">
          <span className="education-school">University of St. Thomas</span>
          <span className="education-dates">August 2015– May 2018</span>
        </div>
        <div className="education-degree">
          <span>Master of Science - MS, Software Engineering</span>
          <span>Saint Paul, Minnesota</span>
        </div>
      </div>

      {/* BS */}
      <div className="education-item">
        <div className="education-header">
          <span className="education-school">University of Saint Thomas</span>
          <span className="education-dates">September 2010 – May 2014</span>
        </div>
        <div className="education-degree">
          <span>Bachelor of Science - BS, Statistics</span>
          <span>Saint Paul, Minnesota</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
