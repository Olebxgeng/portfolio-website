import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#61636e] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between items-center">
        <span><Link href={"/"} >
          <img className="w-[80px]" src="/images/Logo-white.png" alt="Olebogeng Logo" />
        </Link></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;