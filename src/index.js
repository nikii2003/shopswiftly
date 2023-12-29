import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useParams } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'


const {id}=useParams
const router = createBrowserRouter ([
  {
    path : `/`,
    element :<Home/>
  },
  {
    path : '/signup',
    element :<Signup/>
  },
  {
    path : '/login',
    element :<Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < RouterProvider router={router}/>
);


