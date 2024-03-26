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
if(!exists){
storeBooks.push(id);
localStorage.setItem('storeBook', JSON.stringify(storeBooks))
}

}
export {saveBook, getStoredBook}