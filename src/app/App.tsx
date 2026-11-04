import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  useEffect(() => {
    const img = new Image();
    img.src = `https://imagine.sebastian-popescu.com/pixel?t=${Date.now()}`;
  }, []);

  return <RouterProvider router={router} />;
}
