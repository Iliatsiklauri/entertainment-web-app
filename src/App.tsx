import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVshows from './pages/TVshows';
import Bookmarked from './pages/Bookmarked';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="TVshows" element={<TVshows />} />
        <Route path="Bookmarked" element={<Bookmarked />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
