import React from 'react';

const Button = ({ theme, text }) => {
  return (
    <button
      className={`${
        theme === 'light'
          ? 'text-slate-600'
          : 'text-slate-900 bg-gradient-to-r from-teal-400 to-lime-500'
      }  border-blue-900 border-2 rounded-full py-1 px-2`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
