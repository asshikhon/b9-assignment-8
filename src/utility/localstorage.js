
import { toast } from 'react-toastify';
const getStoredBook = () => {
const storeBook = localStorage.getItem('storeBook');
if(storeBook){
    return JSON.parse(storeBook);
}
return [];

}


const saveBook = id => {
const storeBooks = getStoredBook();
const exists = storeBooks.find(bookId => bookId === id);
if(exists){
return toast.error('book already exists')

}
storeBooks.push(id);
localStorage.setItem('storeBook', JSON.stringify(storeBooks))
toast.success('successfully added book for read')
// if(!exists){
// storeBooks.push(id);
// localStorage.setItem('storeBook', JSON.stringify(storeBooks))
// }

}
export {saveBook, getStoredBook}