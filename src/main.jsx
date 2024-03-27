import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import PagesToRead from './components/PagesToRead/PagesToRead';
import Author from './components/Author/Author';
import Publisher from './components/Publisher/Publisher';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
    path: "/",
    element: <Home></Home>,
    },
{
path: '/book/:id',
element: <BookDetails></BookDetails>,
loader: () => fetch('/books.json'),
},

    {
    path: "/listed",
    element: <ListedBooks></ListedBooks>,
    loader: () => fetch('/books.json'),

    },
    {
    path: "/pages",
    element: <PagesToRead></PagesToRead>,
    
    },
{
path: "/authors",
element: <Author></Author>

},
{
path: "/publisher",
element: <Publisher></Publisher>

},

    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
