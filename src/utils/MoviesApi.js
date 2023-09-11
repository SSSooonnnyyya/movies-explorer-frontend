export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this.handleResponse)
    .then(response => {
      return response.map(movie => {
        return {
          ...movie,
          link: this._url + movie.image.url,
          name: movie.nameRU,
          isSaved: false,
        }
      })
    });
  }
}

export const moviesApi = new Api({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
