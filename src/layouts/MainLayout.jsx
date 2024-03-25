import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav />
      </div>
      {/* <Home />
      <Blogs />
      <Bookmarks /> */}
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
