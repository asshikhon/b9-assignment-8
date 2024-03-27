
const getStoredBook = (str) => {
const storeBook = localStorage.getItem(str);
if(storeBook){
return JSON.parse(storeBook);
}
return [];
}

const saveBook =(id, list, store)=>{

const storeReadBooks = getStoredBook(store);

const wishListBooks = getStoredBook(list);
const exists = storeReadBooks.find((bookId) => bookId === id);
const wishListExists = wishListBooks.find((bookId) => bookId === id);
if(!exists){
if(list === "read"){
storeReadBooks.push(id);
localStorage.setItem(list, JSON.stringify(storeReadBooks));
return "done";

}else{
if(!wishListExists){
wishListBooks.push(id);
localStorage.setItem(list, JSON.stringify(wishListBooks));
return "done";
}
return "fail";
}
}
else if(exists && wishListExists){
return "notDone";
}
}
export {saveBook, getStoredBook}