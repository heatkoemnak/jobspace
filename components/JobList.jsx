import React from 'react';
import { IoApps } from 'react-icons/io5';
import { jobs } from '../data/index';
import DropDownMenu from './DropDownMenu';

import { CareerCategories, SalaryRange } from '../data/dropdownOption';

const Card = ({ job }) => {
  return (
    <div className="max-w-4xl px-10 border-2 m-2 py-6 bg-slate-50 rounded-md ">
      <img
        className="w-30 h-40 object-cover rounded-md sm:block"
        src={job.image}
        alt="job avatar"
      />
      <div className="flex justify-between items-center mt-4">
        <span className="font-light text-gray-600">{job.date}</span>
        <a
          className="px-2 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          {job.category}
        </a>
      </div>
      <div className="mt-1">
        <a
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href="#"
        >
          {job.title}
        </a>
        <p className="mt-1 text-gray-600">{job.description}</p>
        <h2 className="mt-2 text-lg font-semibold">Job Responsibilities:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
        <h2 className="mt-2 text-lg font-semibold">Job Requirements:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <h2 className="mt-2 text-lg font-semibold">How to Apply:</h2>
        <p className="text-gray-600">{job.applyInstructions}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <a className="text-blue-600 hover:underline" href="#">
          Read more
        </a>
        <div className="flex items-center">
          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-82 desc-82"
              >
                <title id="title-82">Icon title</title>
                <desc id="desc-82">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </span>
          </button>
          <img
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            src={job.authorImage}
            alt="author avatar"
          />
          <h1 className="text-gray-700 font-bold">{job.author}</h1>
        </div>
      </div>
    </div>
  );
};

const JobList = () => {
  return (
    <>
      <div className="flex justify-between mx-6 my-1">
        <h1 className="max-w-4xl flex items-center gap-2  font-semibold text-zinc-700">
          <IoApps />
          Jobs
        </h1>
        <div className="flex gap-1 items-center">
          <DropDownMenu
            name="Career Category"
            CareerCategories={CareerCategories}
          />
          <DropDownMenu name="Salary Rank" CareerCategories={SalaryRange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
        {jobs.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
