import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore';
import Error from './components/Error';
import YTPlayer from './components/YTPlayer';
import Test from './components/Test';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '/example',
    element: <YTPlayer/>,
  },
  {
    path: '/test',
    element: <Test/>,
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
