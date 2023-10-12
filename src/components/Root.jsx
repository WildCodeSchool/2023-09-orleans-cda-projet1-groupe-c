import { Outlet } from 'react-router';
import NavBar from './NavBar';

export default function Root() {
  return (
    <>
      <div className="h-screen bg-[url('/background.png')] bg-cover bg-center pt-20">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
