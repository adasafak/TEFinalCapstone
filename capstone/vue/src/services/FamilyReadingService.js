import axios from 'axios';

export default {

  addBook(book) {
    return axios.post('/book', book)
  }

}
