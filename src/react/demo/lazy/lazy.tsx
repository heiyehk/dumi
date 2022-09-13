import React, { lazy, Suspense } from 'react';
import Loading from './Loading';

const LazyComponent = lazy(() => import('./LazyComponent'));

const DemoLazy = () => {
  return (
    <div>
      lazy
      <Suspense fallback={<Loading />}>
        <LazyComponent wait={500} />
      </Suspense>
    </div>
  );
};

export default DemoLazy;
