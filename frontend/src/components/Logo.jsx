import React from 'react';

// Timber Dollars Logo - Lime green background with black border and bold text
const Logo = ({ size = 'md', className = '' }) => {
  // Size mappings for the logo
  const sizes = {
    sm: { width: 160, height: 60, fontSize: 10, padding: '6px 10px', border: 3 },
    md: { width: 240, height: 90, fontSize: 14, padding: '8px 14px', border: 4 },
    lg: { width: 320, height: 120, fontSize: 18, padding: '12px 18px', border: 5 },
    xl: { width: 400, height: 150, fontSize: 22, padding: '14px 22px', border: 6 },
  };

  const s = sizes[size] || sizes.md;

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        backgroundColor: '#C5F542',
        border: `${s.border}px solid #000000`,
        padding: s.padding,
        borderRadius: 4,
      }}
    >
      <div
        style={{
          fontFamily: '"Arial Black", "Helvetica Neue", sans-serif',
          fontWeight: 900,
          fontSize: s.fontSize,
          lineHeight: 1.2,
          color: '#000000',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
        }}
      >
        <div>THIS FAMILY</div>
        <div>SUPPORTED BY</div>
        <div>TIMBER DOLLARS</div>
      </div>
    </div>
  );
};

export default Logo;
