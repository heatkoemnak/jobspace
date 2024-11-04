import React from 'react';
import Services from './Services';

const Banner = () => {
  return (
    <>
      <div className="animated-gradient bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 dark:from-gray-500 dark:via-gray-600 dark:to-gray-500 py-8 md:py-16">
        <div className="flex flex-col gap-3">
          <img
            src="https://tailwindflex.com/public/images/profile/1.png"
            className="object-cover w-14 h-14 rounded-full m-auto"
            alt="User image"
            id="user_image"
          />

          <p className="text-3xl font-bold text-center text-white">
            Ready for Your Dream Job?
          </p>

          <p className="text-center text-gray-200">
            Discover job opportunities tailored for you!
          </p>

          <p className="text-center text-gray-200">
            Explore career paths, connect with industry leaders, and start your
            journey.
          </p>

          <div className="flex justify-center max-w-sm gap-2 mx-auto">
            <a href="#" title="Follow for code projects">
              <img
                src="https://tailwindflex.com/public/images/icons/github.svg"
                className="object-cover w-6 h-6 m-auto"
                title="GitHub"
              />
            </a>

            <a href="#" title="Connect for career insights">
              <img
                src="https://tailwindflex.com/public/images/icons/linkedin.png"
                className="object-cover w-6 h-6 m-auto"
                title="LinkedIn"
              />
            </a>

            <a href="#" title="Visit our homepage">
              <img
                src="https://tailwindflex.com/public/images/icons/website.svg"
                className="object-cover w-6 h-6 m-auto"
                title="Website"
              />
            </a>

            <a href="#" title="See our latest updates">
              <img
                src="https://tailwindflex.com/public/images/icons/instagram.svg"
                className="object-cover w-6 h-6 m-auto"
                title="Instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Banner;
