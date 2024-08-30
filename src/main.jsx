import { createRoot } from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';

import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/MyWork',
        element: <MyWork />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
