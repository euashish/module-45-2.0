import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Support from "./components/Support/Support.jsx";
// import User from "./components/Users/Users.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Header from "./components/Header/Header.jsx";
import Post from "./components/Post/Post.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      }, 
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/support',
        element: <Support></Support>
      },
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        element: <PostDetails></PostDetails>
      }
      // {
      //   path: 'users',
      //   loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      //   element: <User></User>
      // }
    ]
  },
  {
    path: 'header',
    element: <Header></Header>

  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
