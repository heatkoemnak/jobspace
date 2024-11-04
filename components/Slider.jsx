import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import Link from 'next/link';

export default function Slider() {
  useEffect(() => {
    const slider = new Glide('.glide-01', {
      type: 'slider',
      focusAt: 'center',
      perView: 2,
      autoplay: 3000,
      animationDuration: 500,
      gap: 15,
      breakpoints: {
        1024: { perView: 2 },
        768: { perView: 1 },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <span className="font-normal text-sm text-cyan-450 rounded-full px-2 py-1">
        ជ្រើសរើសកម្រិតការងាររបស់អ្នក
      </span>
      <div className="relative p-8 glide-01 rounded-lg ">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="flex flex-nowrap transition-transform duration-700 ease-in-out">
            <li className="mx-2 bg-gradient-to-r cursor-pointer from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
              <Link href="/internship" className="block text-center">
                ការងារជានិស្សិត
              </Link>
              <Link href="/internship" className="block text-center">
                Internship
              </Link>
            </li>
            <li className="p-6 rounded-lg mx-2 bg-gradient-to-r from-yellow-500 to-amber-500 p-6 shadow-lg text-white">
              <Link href="/junior" className="block text-center">
                កម្រិតជាន់ញឺយ័រ
              </Link>
              <Link href="/junior" className="block text-center">
                Junior
              </Link>
            </li>
            <li className="p-6 rounded-lg mx-2 shadow-md text-white bg-gradient-to-r from-purple-500 to-purple-700">
              <Link href="/medium" className="block text-center">
                កម្រិតមធ្យម
              </Link>
              <Link href="/medium" className="block text-center">
                Medium
              </Link>
            </li>
            <li className="p-6 rounded-lg mx-2 shadow-md text-white bg-gradient-to-r from-pink-500 to-pink-700">
              <Link href="/senior" className="block text-center">
                ជាន់សេនីយ័រ
              </Link>
              <Link href="/senior" className="block text-center">
                Senior
              </Link>
            </li>
            <li className="p-6 rounded-lg mx-2 shadow-md text-white bg-gradient-to-r from-yellow-500 to-yellow-700">
              <Link href="/manager" className="block text-center">
                អ្នកគ្រប់គ្រង
              </Link>
              <Link href="/manager" className="block text-center">
                Manager
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-between px-4 top-1/2 transform -translate-y-1/2"
          data-glide-el="controls"
        >
          <button
            className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 focus:outline-none transition duration-300 shadow-lg"
            data-glide-dir="<"
            aria-label="previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 focus:outline-none transition duration-300 shadow-lg"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
