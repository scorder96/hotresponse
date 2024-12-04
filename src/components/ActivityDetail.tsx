interface Props {
  feedbacks: Array<string>;
  sentiments: Array<string>;
  tasks: Array<string>;
  topics: Array<string>;
  createdat: Array<string>;
}
var sentimentcolor: Array<string> = [];
var formattedtime: Array<string> = [];
var formatteddate: Array<string> = [];
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Aug",
  "Nov",
  "Dec",
];
function ActivityDetail({ feedbacks, sentiments, tasks, topics, createdat }: Props) {
  for (let i = 0; i < sentiments.length; i++) {
    if (sentiments[i] == "positive") {
      sentimentcolor[i] = "text-green-500";
    } else if (sentiments[i] == "negative") {
      sentimentcolor[i] = "text-red-500";
    } else {
      sentimentcolor[i] = "";
    }
    const temp = Date.parse(createdat[i]);
    const ttt = new Date(temp);
    formattedtime[i] = ttt.getHours() + ":" + ttt.getMinutes() + ":" + ttt.getSeconds();

    formatteddate[i] = ttt.getDate() + " " + months[ttt.getMonth()];
  }
  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Feedback
            </th>
            <th scope="col" className="px-6 py-3">
              Sentiment
            </th>
            <th scope="col" className="px-6 py-3">
              Task
            </th>
            <th scope="col" className="px-6 py-3">
              Topic
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length > 0 &&
            feedbacks.map((feedback, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {feedback}
                  </th>
                  <td className={"px-6 py-4 " + sentimentcolor[index]}>
                    {sentiments[index]}
                  </td>
                  <td className="px-6 py-4">{tasks[index]}</td>
                  <td className="px-6 py-4">{topics[index]}</td>
                  <td className="px-6 py-4">{formattedtime[index]}</td>
                  <td className="px-6 py-4">{formatteddate[index]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {feedbacks.length <= 0 && (
        <h2 className="flex justify-center mt-4">No feedbacks as of now</h2>
      )}
    </div>
  );
}
export default ActivityDetail;
