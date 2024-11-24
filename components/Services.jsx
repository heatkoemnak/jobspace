import React from 'react';
import {
  FiCreditCard,
  FiPenTool,
  FiMail,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import {
  HiBriefcase,
  HiMiniAdjustmentsHorizontal,
  HiBuildingOffice2,
  HiMiniLink 
} from 'react-icons/hi2';
import QuickLinks from './QuickLinks';
const Services = () => {
  return (
    <div className="p-1">
      {/* <p className="text-center text-xl font-semibold mb-2">Our Services</p> */}
      <div className="grid gap-1 grid-cols-2 lg:grid-cols-4">
        <Card title="Job Lists" href="#" Icon={HiBriefcase} />
        <Card
          title="Job Category"
          href="#"
          Icon={HiMiniAdjustmentsHorizontal}
        />
        <Card title="Employer Lists" href="#" Icon={HiBuildingOffice2} />
        {/* <Card title="Quick links" href="#" Icon={FiCreditCard} /> */}
        <QuickLinks Icon={HiMiniLink} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className=" py-1 flex items-center justify-center rounded-full border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      {/* <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" /> */}
      <Icon className=" text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <span className="ml-1 font-light text-base text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </span>
    </a>
  );
};

export default Services;
