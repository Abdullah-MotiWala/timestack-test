import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">Profile Explorer</span> — All rights reserved.
      </p>
      <p className="mt-1">Developed by Abdullah Motiwala</p>
    </footer>
  );
};

export default Footer;
