const request = <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> => {
  return new Promise((resolve, reject) => {
    fetch(input, init).then(async (response) => {
      if (response.status === 200) {
        const responseJson = await response.json();
        resolve(responseJson);
      }
    }).catch((error) => {
      reject(error);
    });
  });
};

export const queryHitokoto = <T>(url: string): Promise<T> => {
  return request<T>(url);
};

export const queryAlgolia = <T>(data: { query: string; }): Promise<T> => {
  return request<T>('https://v1.hitokoto.cn');
};
