import React from "react";

export const FormTitle = ({ label }) => {
  return (
    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {label}
    </h1>
  );
};
