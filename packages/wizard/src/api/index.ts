export const buildUrl = (path?: string) => `${process.env.REACT_APP_POLL_SERVICE_URL}/${path || ''}`

export const get = (url: string) => fetch(url);
export const post = (url: string, body?: any) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});
export const getJson = async (response: Promise<Response>) => await (await response).json();
