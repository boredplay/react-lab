import { boundRequestSuccess } from '../actions';

class Request {
  constructor(store) {
    this.store = store;
  }

  get(path) {
    return fetch(path).then(response => {
      return response.json();
    }).then((json) => {
      console.log('Request: get: fecth 2: json >> ', json);
      boundRequestSuccess(json.todos);
    });
  }

  put(path, data = {}) {
    return fetch(path, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(' API put called', response);
      return response;
      // boundRequestSuccess(response);
    }).then(json => boundRequestSuccess(json));
  }

  patch(path, data = {}) {
    return fetch(path, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

}

export default Request;
