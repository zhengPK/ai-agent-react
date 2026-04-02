import { createBrowserRouter, RouteObject, RouterProvider, Navigate } from 'react-router';
import { Alert } from 'antd';
import { DynamicPage } from '../components/DynamicPage';
import { LayoutPages } from './LayoutPages';
import { LayoutPrivate } from './LayoutPrivate';
import { LayoutPublic } from './LayoutPublic';
const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/pages/home" replace />,
  },
  {
    path: '/pages/:name/*',
    element: (
      <LayoutPages>
        <DynamicPage dirname="pages" />
      </LayoutPages>
    ),
  },
  {
    path: '/public/:name/*',
    element: (
      <LayoutPublic>
        <DynamicPage dirname="public" />
      </LayoutPublic>
    ),
  },
  {
    path: '/private/:name/*',
    element: (
      <LayoutPrivate>
        <DynamicPage dirname="private" />
      </LayoutPrivate>
    ),
  },
  {
    path: '/login',
    element: <Navigate to="/public/login-page" replace />,
  },
  {
    path: '*',
    element: (
      <div style={{ padding: '1em' }}>
        <Alert type="error" description="页面不存在"></Alert>
      </div>
    ),
  },
];

const publicPath = __webpack_public_path__;
console.log(publicPath);
export const router = createBrowserRouter(routes, {
  basename: publicPath.endsWith('/') ? publicPath.slice(0, -1) : publicPath,
});

export const IndexApp = <RouterProvider router={router} />;
