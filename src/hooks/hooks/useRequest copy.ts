import useStateEffect from './useStateEffect';

const useRequest = <T = any>(input: RequestInfo | URL, init?: RequestInit) => {
  const [loading, setLoading] = useStateEffect(false);

  const request = (): Promise<T> => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(input, init).then(async (response) => {
        if (response.status === 200) {
          const responseJson = await response.json();
          resolve(responseJson);
        }
      }).catch((error) => {
        reject(error);
      }).finally(() => {
        setLoading(false);
      });
    });
  }

  return {
    loading,
    request
  };
};

export default useRequest;
