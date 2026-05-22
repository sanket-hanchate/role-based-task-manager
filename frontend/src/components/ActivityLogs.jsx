function ActivityLogs({ logs }) {

  return (

    <div className="bg-white p-6 rounded-lg shadow mt-10">

      <h2 className="text-2xl font-bold mb-6">
        Activity Logs
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-200">

              <th className="p-3 text-left">
                User
              </th>

              <th className="p-3 text-left">
                Action
              </th>

              <th className="p-3 text-left">
                Details
              </th>

              <th className="p-3 text-left">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {logs.map((log) => (

              <tr
                key={log._id}
                className="border-b"
              >

                <td className="p-3">
                  {log.userId?.name}
                </td>

                <td className="p-3 font-semibold">
                  {log.action}
                </td>

                <td className="p-3">
                  {log.details}
                </td>

                <td className="p-3">
                  {
                    new Date(
                      log.createdAt
                    ).toLocaleString()
                  }
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default ActivityLogs