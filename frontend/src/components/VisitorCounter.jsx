import React from 'react';

function VisitorCounter({ count, loading, error }) {
  return (
    <div className="visitor-counter">
      {loading && <span>Visitors: ...</span>}
      {error && <span>Visitors unavailable</span>}
      {!loading && !error && count !== null && <span>Visitors: {count}</span>}
    </div>
  );
}

export default VisitorCounter;
