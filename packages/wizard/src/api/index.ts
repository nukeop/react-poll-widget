export type HttpMethod = 'POST' | 'PUT' | 'DELETE';

export const buildUrl = (path?: string) => `${process.env.REACT_APP_POLL_SERVICE_URL}/${path || ''}`

export const get = (url: string) => fetch(url);

export const requestWithBody = (method: HttpMethod) => (url: string, body?: any) => fetch(url, {
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

export const post = requestWithBody('POST');
export const put = requestWithBody('PUT');
export const getJson = async (response: Promise<Response>) => await (await response).json();
