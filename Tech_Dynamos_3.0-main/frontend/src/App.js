import Login from './screens/Login';
import Layout from './components/Layout';
import Home from './screens/Home';
import Emergency from './screens/Emergency';
import LearnProtect from './screens/LearnProtect';
import Community from './screens/Community';
import SignUp from './screens/SignUp.jsx'


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Alert from './components/Alert.jsx';

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
        path: "/signup",
        element: <SignUp/>,
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
      },
      {
        path: "/Alert",
        element: <Alert />,
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