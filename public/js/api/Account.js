/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  static URL = 'http://localhost:8000/account' 
  /**
   * Получает информацию о счёте
   * */
  static get(){
    createRequest({
      url: this.URL + '/{id}',
      method: 'GET',
      responseType: 'json',
      data,
      callback
    });
  }

  static create(data, callback) {
    createRequest({
      url: this.URL + '/',
      method: 'PUT',
      responseType: 'json',
      data,
      callback
    });
  }

  static list(data, callback) {
    createRequest({
      url: this.URL, 
      method: 'GET',
      responseType: 'json',
      data: data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
  }

  static remove(data, callback ) {
    createRequest({
      url: this.URL + '/',
      method: 'DELETE',
      responseType: 'json',
      data: data,
      callback: (err, response) => {
        callback(err, response);
      }
    });
  }
}
