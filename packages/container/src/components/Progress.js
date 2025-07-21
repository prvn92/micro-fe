import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Progress = () => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.7)',
      zIndex: 9999,
    }}
  >
    <CircularProgress size={80} thickness={5} />
  </div>
);

export default Progress;
