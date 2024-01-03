import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AddToCart from './views/AddToCart/AddToCart';
import MyProduct from './views/MyProduct/MyProduct';



const router = createBrowserRouter ([
  {
    path : "/",
    element :<Home/>
  },
  {
    path : '/signup',
    element :<Signup/>
  },
  {
    path : '/login',
    element :<Login/>
  },
  {
    path : `/post/read/:id`,
    element :<AddToCart/>
<<<<<<< HEAD
=======
  },
  {
    path : `/myproduct`,
    element :<MyProduct/>
>>>>>>> 584405ec891779dda5c4a226bd384b33d3847ce7
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < RouterProvider router={router}/>
);


