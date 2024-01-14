
import { JSX } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { RoutesPaths } from '@/constants';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path={RoutesPaths.INDEX}>
    <Route index element={<></>} />
    <Route path={RoutesPaths.POST} element={<></>} />

    <Route path={RoutesPaths.NOT_FOUND} element={<></>} />
  </Route>
))

const AppRouter = (): JSX.Element => {
  return (
    <RouterProvider router={routes} />
  );
};
export default AppRouter;
