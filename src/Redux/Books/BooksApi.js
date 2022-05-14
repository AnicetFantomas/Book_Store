import axios from 'axios';
import { addBook, fetchBookErr } from './Books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const myAppId = 'Ac0QwItnMiG6toY1pQX0';
const myBaseUrl = axios.create({ baseURL: `${url}/${myAppId}` });

export const getBookApi = () => (dispatch) => {
  myBaseUrl.get('/books').then((res) => {
    dispatch(addBook(res.data));
  }).catch(() => {
    dispatch(fetchBookErr());
  });
};

export const removeBookApi = (ID) => (dispatch) => {
  myBaseUrl.delete(`/books/${ID}`, { item_id: ID }).then(() => dispatch(getBookApi()))
    .catch(() => dispatch(fetchBookErr()));
};

export const createBookApi = (book) => (dispatch) => {
  axios({
    method: 'POST',
    url: `${url}/${myAppId}/books`,
    data: {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'abc',
    },
  }).catch(() => dispatch(fetchBookErr()));
  dispatch(getBookApi());
};
