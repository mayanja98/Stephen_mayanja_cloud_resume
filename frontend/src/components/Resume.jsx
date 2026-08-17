import React from 'react';
import ResumeHeader from './ResumeHeader';
import Experience from './Experience';
import Education from './Education';
import VisitorCounter from './VisitorCounter';

function Resume({ visitorCount, loading, error }) {
  return (
    <div className="resume-paper">
      <ResumeHeader />
      <Experience />
      <Education />
      <VisitorCounter count={visitorCount} loading={loading} error={error} />
    </div>
  );
}

export default Resume;
