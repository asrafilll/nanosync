import React from "react";

export const FormCTA = ({ label, cta, link }) => {
  return (
    <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
      {label}
      <a
        href={link}
        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        {cta}
      </a>
    </p>
  );
};
