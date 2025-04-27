import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header />

      <main className="flex-1 px-4 py-8 sm:py-10 max-w-6xl mx-auto w-full">
        {children}
      </main>

      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
