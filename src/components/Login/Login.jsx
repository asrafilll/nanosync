import Link from "next/link";
import { Input } from "../shared-ui/Input";
import { Button } from "../shared-ui/Button";
export const Login = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <Input
            label="Email"
            type="Email"
            id="Email"
            placeholder="your@email.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="••••••••"
          />
          <Button label="Sign In" />
          <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
