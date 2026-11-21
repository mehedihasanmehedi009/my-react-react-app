  
import { Heder } from "../Heder/Heder";
import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";

export const Root = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      {/* Top: Header */}
      <Heder />

      {/* Middle: Dynamic Page Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* Bottom: Footer */}
      <Footer />
    </div>
  );
};