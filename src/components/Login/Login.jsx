import { Input } from "../shared-ui/Input";
import { Button } from "../shared-ui/Button";
import { FormTitle } from "../shared-ui/FormTitle";
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
];

export const Login = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <FormTitle label="  Sign in to your account" />
        <form className="space-y-4 md:space-y-6" action="#">
          {inputData.map((data) => {
            return <Input key={data.id} {...data} />;
          })}
          <Button label="Sign In" />
          <FormCTA
            label="Don’t have an account yet? "
            link="/register"
            cta="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};
