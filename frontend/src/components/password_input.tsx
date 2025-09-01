import { useState } from "react";
import {TextInput } from "flowbite-react";

interface PasswordInputProps {
  id: string;
  placeholder?: string;
}

function PasswordInput({ id, placeholder = "Enter password" }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <TextInput
        id={id}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        required
        className="pr-10"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-2 flex items-center"
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          // Eye open SVG
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ) : (
          // Eye closed SVG
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.182-3.62m2.54-2.54A9.97 9.97 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.969 9.969 0 01-4.683 5.68M15 12a3 3 0 00-3-3m0 0a3 3 0 00-3 3m6 0a3 3 0 01-3 3m-6-9l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default PasswordInput;