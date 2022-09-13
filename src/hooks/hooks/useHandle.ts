import useStateEffect from './useStateEffect';

const useHandle = <T = any>(handle: () => Promise<T>, prevent = false) => {
  const [loading, setLoading] = useStateEffect(false);
  const [result, setResult] = useStateEffect<T>();
  const [error, setError] = useStateEffect<Error>();

  const promiseHandle = (): Promise<T> => {
    setLoading(true);
    if (prevent && loading) return Promise.resolve(false as unknown as T);
    return new Promise((resolve, reject) => {
      handle().then(async (res) => {
        setResult(res);
        resolve(res);
      }).catch((err) => {
        setError(err);
        reject(err);
      }).finally(() => {
        setLoading(false);
      });
    });
  }

  return {
    loading,
    result,
    error,
    handle: promiseHandle
  };
};

export default useHandle;
