/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
  
    let url = options.url;
    const method = options.method || 'GET';
    const data = options.data || {};
    const callback = options.callback;
    const responseType = options.responseType || 'json';
  
    let body = null;
  
    if (method === 'GET') {
        const params = new URLSearchParams(data).toString();
        if (params) {
          url += (url.includes('?') ? '&' : '?') + params;
        }
      } else {
        body = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          body.append(key, value);
        });
      }
    console.log(body);
    xhr.open(method, url);
    xhr.responseType = responseType;
    xhr.withCredentials = true;
  
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        callback(null, xhr.response);
      } else {
        callback(new Error(`Ошибка: ${xhr.status}`), null);
      }
    };
  
    xhr.onerror = () => {
      callback(new Error('Ошибка соединения'), null);
    };
  
    xhr.send(body);
  };
