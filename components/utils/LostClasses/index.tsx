import React from 'react';

const LostClasses: React.FC = () => (
  <>
    {false && (
      <span
        className={`
          yellow-main
          orange-low
          blue-low
        `}
      />
    )}
  </>
);

export default LostClasses;