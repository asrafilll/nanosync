import { Logo } from "../shared-ui/Logo";
import { NavItem } from "../shared-ui/NavItem";

export const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-10 bg-gray-900 py-4 px-8">
        <Logo />
        <nav className=" flex items-center gap-6">
          <NavItem link="#" title="Events" />
          <NavItem link="#" title="Users" />
        </nav>
      </div>
      <div>{children}</div>
    </div>
  );
};
