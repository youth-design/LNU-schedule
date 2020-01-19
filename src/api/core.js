import store from "../state/store";
import {
  hideRequestError,
  showRequestError
} from "../state/requestError/actions";
// const statusNotifications = {
//   401: "Пожалуйста, войдите в систему",
//   403: "Недостаточно прав",
//   404: "Не найдено",
//   502: "Проблемы с сервером, свяжитесь с администратором",
//   503: "Проблемы с сервером, свяжитесь с администратором",
//   500: "Проблемы с сервером, свяжитесь с администратором"
// };

// function getStatusMessage(statusCode) {
//   if (statusCode in statusNotifications) {
//     return statusNotifications[statusCode];
//   }
//   return "Похоже, проблемы с интернетом. Проверьте соединение";
// }

function handleErrors(response) {
  if (!response.ok) {
    store.dispatch(showRequestError());
    setTimeout(() => {
      store.dispatch(hideRequestError());
    }, 3000);
    return {
      error: true
    };
  }
  return response.json();
}

function request(url, { headers = {}, main }) {
  return fetch(url, {
    // headers: {
    //   "Content-Type": "application/json",
    //   ...headers
    // },
    ...main
  })
    .then(handleErrors)
    .then(data => data)
    .catch(() => {
      return { error: true };
    });
}

export default request;
