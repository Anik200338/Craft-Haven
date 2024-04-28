import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from '../component/Login';
import Erropage from '../component/Erropage';
import Register from '../component/Register';
import AddCraft from '../component/AddCraft';
import AllArtcraft from '../component/AllArtcraft';
import Singlecraft from '../component/Singlecraft';
import PrivateRoute from '../component/PrivateRoute/PrivateRoute';
import Mycraft from '../component/Mycraft';
import Update from '../component/Update&delete/Update';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          // Fetch data from 'fakedata.json'
          const fakeDataResponse = await fetch(
            'http://localhost:5000/AddCraft'
          );
          const fakeData = await fakeDataResponse.json();

          const craftsResponse = await fetch('http://localhost:5000/AddCraft');
          const crafts = await craftsResponse.json();

          return { fakeData, crafts };
        },
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/craft/:id',
        element: <Singlecraft></Singlecraft>,
      },
      {
        path: '/Update/:id',
        element: <Update></Update>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/myArt',
        element: <Mycraft></Mycraft>,
      },
      {
        path: '/allCraft',
        element: <AllArtcraft></AllArtcraft>,
        loader: () => fetch('http://localhost:5000/AddCraft'),
      },
      {
        path: '/addCraft',
        element: <AddCraft></AddCraft>,
      },
    ],
  },
]);

export default router;
