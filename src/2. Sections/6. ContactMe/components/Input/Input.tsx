
import React, { HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        {...props}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
