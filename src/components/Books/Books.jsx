import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mb-12 lg:mb-24">
      <div className="pb-6 lg:pb-10">
        <h2 className="text-[40px] text-[#131313] font-bold text-center">
          Books
        </h2>
      </div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{

books.map(book => <Book key={book.id} book={book}></Book>)

}

</div>


    </div>
  );
};

export default Books;
