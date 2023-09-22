const tableData = [
  {
    name: "Event 1",
    location: "Event 1 Location",
    date: "01 January 2019",
    participants: 52,
    isBanned: true,
  },
  {
    name: "Event 2",
    location: "Event 2 Location",
    date: "02 January 2019",
    participants: 10,
    isBanned: false,
  },
];

export const DashboardTableEventRow = () => {
  return (
    <>
      {tableData.map((item, index) =>
        item.isBanned ? (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="font-semibold text-slate-600 px-4 py-2">
              {item.name}
            </td>
            <td className="px-4 py-2">{item.location}</td>
            <td className="px-4 py-2">{item.date}</td>
            <td className="px-4 py-2">{item.participants}</td>
            <td className="px-4 py-2 font-bold">Banned</td>
            <td className="px-4 py-2">
              <div className="px-4 py-2  max-w-fit rounded-full text-slate-300 font-semibold">
                Edit
              </div>
            </td>
          </tr>
        ) : (
          <tr
            key={index}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="font-semibold text-slate-600 px-4 py-2">
              {item.name}
            </td>
            <td className="px-4 py-2">{item.location}</td>
            <td className="px-4 py-2">{item.date}</td>
            <td className="px-4 py-2">{item.participants}</td>
            <td className="px-4 py-2 font-bold">Active</td>
            <td className="px-4 py-2">
              <div className="px-4 py-2  max-w-fit rounded-full text-blue-600 font-semibold">
                Edit
              </div>
            </td>
          </tr>
        )
      )}
    </>
  );
};
