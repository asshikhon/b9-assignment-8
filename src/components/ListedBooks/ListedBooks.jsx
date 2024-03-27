import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/localstorage";
import ApplyRead from "../ApplyRead/ApplyRead";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const books = useLoaderData();
  const [appliedBooks, setAppliedBooks] = useState([]);
  const [appliedWishs, setAppliedWishs] = useState([]);

  useEffect(() => {
    const storeBookIds = getStoredBook("read");
    if (books.length > 0) {
      const booksApplied = [];
      for (const id of storeBookIds) {
        const book = books.find((book) => book.id === id);
        if (book) {
          booksApplied.push(book);
        }
      }
      setAppliedBooks(booksApplied);
    }
  }, [books]);

  useEffect(() => {
    const storeWishId = getStoredBook("wish");
    if (books.length > 0) {
      const wishApplied = [];
      for (const id of storeWishId) {
        const book = books.find((book) => book.id === id);
        if (book) {
          wishApplied.push(book);
        }
      }

      setAppliedWishs(wishApplied);
    }
  }, [books]);

  return (
    <div className=" font-work-sans">
      <div className="bg-[#1313130d] py-8 rounded-xl">
        <h2 className="text-[#131313] text-3xl font-bold text-center">Books</h2>
      </div>

      <div className="text-center">
        <details className="dropdown my-10 ">
          <summary className="m-1 btn text-lg font-semibold text-white bg-[#23BE0A] px-10">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className=" bg-[#1313130d] menu dropdown-content z-[10] rounded-box w-full">
            <li className="text-[#131313cc] font-semibold">
              <a>Rating</a>
            </li>
            <li className="text-[#131313cc] font-semibold">
              <a>Number of pages</a>
            </li>
            <li className="text-[#131313cc] font-semibold">
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab classID="text-lg text-[#131313cc]">Read Books</Tab>
          <Tab classID="text-lg text-[#131313cc]">Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {appliedBooks.map((book, idx) => (
            <ApplyRead key={idx} book={book}></ApplyRead>
          ))}
        </TabPanel>
        <TabPanel>
          {appliedWishs.map((book, idx) => (
            <WishlistBooks key={idx} book={book}></WishlistBooks>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
