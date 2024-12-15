import { Outlet } from "react-router-dom";
import { Sidebar } from "../component/Sidebar";
const Body = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
