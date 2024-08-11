import Login from './screens/Login';
import Layout from './components/Layout';
import Home from './screens/Home';
import Emergency from './screens/Emergency';
import LearnProtect from './screens/LearnProtect';
import Community from './screens/Community';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Emergency",
        element: <Emergency />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/LearnProtect",
        element: <LearnProtect />,
      },
      {
        path: "/Community",
        element: <Community />,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;