export const DashboardTableHeaderEvent = ({ tableTitle }) => {
  return (
    <thead className="text-xs uppercase  text-gray-400">
      <tr>
        {tableTitle.map((item) => {
          return (
            <th scope="col" className="py-3 px-4">
              {item}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
