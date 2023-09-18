import React from "react";
import { Input } from "../shared-ui/Input";
import { Button } from "../shared-ui/Button";
import { FormTitle } from "../shared-ui/FormTitle";
import { RegisterCheckbox } from "./RegisterCheckbox";
import { FormCTA } from "../shared-ui/FormCTA";

const inputData = [
  {
    label: "Email",
    type: "Email",
    name: "Email",
    id: "Email",
    placeholder: "your@email.com",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    id: "password",
    placeholder: "••••••••",
  },
  {
    label: "Confirm Password",
    type: "confirm-password",
    name: "confirm-password",
    id: "confirm-password",
    placeholder: "••••••••",
  },
];

export const Register = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <FormTitle label="Create an account" />
        <form className="space-y-4 md:space-y-6" action="#">
          {inputData.map((data) => {
            return <Input key={data.id} {...data} />;
          })}
          <RegisterCheckbox />
          <Button label="Create an account" />
          <FormCTA
            label="Already have an account? "
            link="/login"
            cta="Login here"
          />
        </form>
      </div>
    </div>
  );
};
