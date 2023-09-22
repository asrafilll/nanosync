import { DashboardTableEventRow } from "./Event/Dashboard.Table.EventRow";
import { DashboardTableHeaderEvent } from "./Event/Dashboard.TableHeader.Event";

const tableTitle = [
  "Event Name",
  "Location",
  "Date",
  "Total Participants",
  "Status",
];

export const Dashboard = () => {
  return (
    <div className="py-4 px-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
        <DashboardTableHeaderEvent tableTitle={tableTitle} />
        <tbody>
          <DashboardTableEventRow />
        </tbody>
      </table>
    </div>
  );
};
