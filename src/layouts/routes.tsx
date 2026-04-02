import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router';
import DynamicPage from '../components/DynamicPage';
const routes: RouteObject[] = [
  {
    path: '/pages/:name/*',
    element: <DynamicPage dirname="pages" />,
  },
  {
    path: '/public/:name/*',
    element: <DynamicPage dirname="public" />,
  },
  {
    path: '/private/:name/*',
    element: <DynamicPage dirname="private" />,
  },
  {
    path: '*',
    element: <DynamicPage dirname="pages" />,
  },
];

const publicPath = __webpack_public_path__;
const router = createBrowserRouter(routes, {
  basename: publicPath.endsWith('/') ? publicPath.slice(0, -1) : publicPath,
});

export const IndexApp = <RouterProvider router={router} />;
