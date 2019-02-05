import request from "./core.js";

const getMainSettings = (method, body) => ({
  method,
  body: body && JSON.stringify(body)
});

export async function apiGet(url, fallbackValue) {
  return request(url, { main: getMainSettings("GET") }, fallbackValue);
}

export async function apiPost(url, body, fallbackValue) {
  return request(
    url,
    {
      main: getMainSettings("POST", body)
    },
    fallbackValue
  );
}

export async function apiDelete(url, body, fallbackValue) {
  return request(
    url,
    {
      main: getMainSettings("DELETE", body)
    },
    fallbackValue
  );
}

export async function apiPut(url, body, fallbackValue) {
  return request(
    url,
    {
      main: getMainSettings("PUT", body)
    },
    fallbackValue
  );
}
