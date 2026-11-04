import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <>
      <img
        src="https://imagine.sebastian-popescu.com/pixel"
        alt=""
        aria-hidden="true"
        width={1}
        height={1}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />
      <RouterProvider router={router} />
    </>
  );
}
