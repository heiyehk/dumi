import ErrorBoundary from '@/components/ErrorBoundary';
import React from 'react';

const DemoErrorBoundary = () => {
  return (
    <ErrorBoundary>
      {/* <div>{(() => { throw new Error })()}</div> */}
    </ErrorBoundary>
  );
};

export default DemoErrorBoundary;
