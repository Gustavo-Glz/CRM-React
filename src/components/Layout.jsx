import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
      </div>
        <main className="md:w-3/4 md:h-screen p-10 overflow-scroll">

        </main>
    </div>
  );
};

export default Layout;
