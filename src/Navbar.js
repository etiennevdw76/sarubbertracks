import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 text-black p-4 fixed top-0 w-full flex justify-between items-center shadow-md z-50">
      <h1 className="text-xl font-bold">SA Rubber Tracks</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
      </div>
    </nav>
  );
}