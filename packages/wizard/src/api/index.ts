export const buildUrl = (path?: string) => `${process.env.REACT_APP_POLL_SERVICE_URL}/${path || ''}`