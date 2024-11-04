import React from 'react';
import { FiCreditCard,FiPenTool, FiMail, FiUser, FiUsers } from 'react-icons/fi';
const Services = () => {
  return (
    <div className="p-2">
      <p className="text-center text-xl font-semibold mb-2">Our Services</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Ai CV Editor" href="#" Icon={FiPenTool} />
        <Card title="Posting Jobs" href="#" Icon={FiMail} />
        <Card title="Find job" href="#" Icon={FiUsers} />
        <Card title="Membership" href="#" Icon={FiCreditCard} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-2 flex items-center rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className=" text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="ml-1 font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
    </a>
  );
};

export default Services;
