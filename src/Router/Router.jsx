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
import SingleSub from '../component/SingleSub';

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
          const AddSubcategory = await fetch(
            'http://localhost:5000/Subcategory'
          );
          const Subcategorys = await AddSubcategory.json();

          return { fakeData, crafts, Subcategorys };
        },
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/craft/:id',
        element: (
          <PrivateRoute>
            <Singlecraft></Singlecraft>
          </PrivateRoute>
        ),
      },
      {
        path: '/Update/:id',
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: '/Subcategory/:id',
        element: <SingleSub></SingleSub>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/myArt',
        element: (
          <PrivateRoute>
            <Mycraft></Mycraft>
          </PrivateRoute>
        ),
      },
      {
        path: '/allCraft',
        element: <AllArtcraft></AllArtcraft>,
        loader: () => fetch('http://localhost:5000/AddCraft'),
      },
      {
        path: '/addCraft',
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
