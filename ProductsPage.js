import React from "react";
import Navbar from "./Navbar";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-20 px-6">
        <section className="max-w-5xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-yellow-500 mb-8">Our Products</h1>
          <div className="space-y-12">
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">Rubber Tracks</h2>
              <p className="text-gray-300 mb-4">
                High-quality rubber tracks for excavators, bulldozers, and other construction equipment. Designed for durability, grip, and smooth performance.
              </p>
              <p className="text-yellow-300">Warranty: 2,000 hours or 2 years</p>
              <p className="text-yellow-300">Price: Upon request</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-2">Bolt-On Rubber Pads</h2>
              <p className="text-gray-300 mb-4">
                Attach these pads to your steel grousers for reduced surface damage and quieter operation. Ideal for urban construction and roadwork.
              </p>
              <p className="text-yellow-300">Warranty: 2,000 hours or 2 years</p>
              <p className="text-yellow-300">Price: Upon request</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}