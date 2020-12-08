export const buildUrl = (path?: string) => `${process.env.REACT_APP_POLL_SERVICE_URL}/${path || ''}`
export const getJson = async (response: Promise<Response>) => await (await response).json();