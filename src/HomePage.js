import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen font-sans pt-20 px-6">
        <section className="flex flex-col items-center justify-center text-center py-24">
          <h1 className="text-5xl font-bold text-yellow-500 mb-6">Welcome to SA Rubber Tracks</h1>
          <p className="text-gray-300 text-xl max-w-3xl mb-8">
            Durable. Reliable. Built for South African terrain. We supply top-grade rubber tracks and bolt-on pads for excavators, bulldozers, and other heavy-duty machinery.
          </p>
          <Link to="/products" className="bg-yellow-500 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-600 transition">
            Explore Products
          </Link>
        </section>

        <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose SA Rubber Tracks?</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Guaranteed 2,000 hours or 2 years warranty</li>
              <li>Optional bolt-on pads for steel grousers</li>
              <li>Custom sizes available for all machinery</li>
              <li>Nationwide delivery and support</li>
            </ul>
          </div>
          <img src="/hero/excavator-bg.jpg" alt="Excavator with rubber tracks" className="rounded-2xl shadow-lg" />
        </section>

        <section className="bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-10">What Our Customers Say</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-gray-300 italic">"Reliable service and top-quality tracks. We’ve had zero downtime since switching to SA Rubber Tracks."</p>
                <p className="text-yellow-400 mt-4 font-semibold">– Johan M., Construction Manager</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-gray-300 italic">"The bolt-on pads are perfect for our roadwork projects. Fast delivery and great support."</p>
                <p className="text-yellow-400 mt-4 font-semibold">– Lerato K., Site Supervisor</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-gray-300 italic">"Good pricing and excellent durability. The warranty gives us peace of mind on long jobs."</p>
                <p className="text-yellow-400 mt-4 font-semibold">– Sipho N., Farm Equipment Operator</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}