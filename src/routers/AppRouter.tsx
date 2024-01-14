import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesPaths } from '@/constants';
import RootPage from '@/pages/RootPage/RootPage';
import PostsPage from '@/pages/PostsPage/PostsPage';
import DetailsPage from '@/pages/DetailsPage/DetailsPage';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesPaths.INDEX}
         element={<RootPage/>}>
    <Route index
           element={<PostsPage/>}/>
    <Route path={RoutesPaths.POST}
           element={<DetailsPage />}/>

    <Route path={RoutesPaths.NOT_FOUND}
           element={<></>}/>
  </Route>
));

const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={routes}/>
  );
};
export default AppRouter;
