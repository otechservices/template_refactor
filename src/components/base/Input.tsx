
import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: string;
}

export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon 
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className={`${icon} text-gray-400 text-sm`}></i>
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${icon ? 'pl-10' : ''} ${className}`}
      />
    </div>
  );
}
