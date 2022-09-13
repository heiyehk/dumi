import useStateEffect from './useStateEffect';

const useRequest = <T = any>(requestHandle: () => Promise<T>, prevent = false) => {
  const [loading, setLoading] = useStateEffect(false);
  const [response, setResponse] = useStateEffect<T>({} as T);
  const [error, setError] = useStateEffect<Error>();

  const request = (): Promise<T> => {
    setLoading(true);
    if (prevent && loading) return Promise.resolve(false as unknown as T);
    return new Promise((resolve, reject) => {
      requestHandle().then(async (res) => {
        setResponse(res);
        resolve(res);
      }).catch((err) => {
        setError(err);
        // reject(err);
      }).finally(() => {
        setLoading(false);
      });
    });
  }

  return {
    loading,
    response,
    error,
    request
  };
};

export default useRequest;
