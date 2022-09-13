import useHandle from '../../hooks/useHandle';
import React from 'react';
import { queryAlgolia } from './api';


const DemoUseHandle = () => {
  const {
    loading: aLoading,
    handle: aHandle,
    result: aResult,
    error: aError,
  } = useHandle<boolean>(() => queryAlgolia({
    query: 'redux'
  }), true);

  const {
    loading: testLoading,
    handle: testHandle,
    error: testError,
  } = useHandle<boolean>(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('error test')
      }, 3000);
    })
  }, true);


  return (
    <div>
      <pre style={{ height: 100, overflowY: 'auto' }}>
        <code>{aLoading ? undefined : JSON.stringify(aResult, null, 2)}</code>
      </pre>
      <div>
        <button
          disabled={aLoading}
          onClick={aHandle}>
          {aLoading ? 'loading...' : 'send'}
        </button>
      </div>
      <div>testError: {testError ? JSON.stringify(testError) : ''}</div>
      <div>testLoading: {testLoading ? 'loading...' : 'ok'}</div>
      <div>
        <button
          disabled={testLoading}
          onClick={testHandle}>
          {testLoading ? 'loading...' : 'send'}
        </button>
      </div>
    </div>
  );
};

export default DemoUseHandle;
