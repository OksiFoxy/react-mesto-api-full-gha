function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const BASE_URL = 'https://api.oksifoxy.mesto.nomoredomains.work';

const signUp = (email, password) => {
  const requestUrl = BASE_URL + '/signup';
  return fetch(requestUrl, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => {
    return checkResponse(res);
  })
}

const signIn = (email, password) => {
  const requestUrl = BASE_URL + '/signin';
  return fetch(requestUrl, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  .then((res) => {
    return checkResponse(res);
  })
  .then((data) => {
    localStorage.setItem('token', data.token)
    return data;
  })

};

const checkToken = () => {
  const requestUrl = BASE_URL + '/users/me';
  return fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  }).then(res => checkResponse(res))
}

export { signUp, signIn, checkToken };
