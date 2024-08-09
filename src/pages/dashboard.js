import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const VALID_ID = "amit";
const VALID_PASSWORD = "password123";

const Dashboard = () => {
  const [logs, setLogs] = useState([]);
  const [eventTypeCounts, setEventTypeCounts] = useState({});
  const [urlCounts, setUrlCounts] = useState({});
  const [elementCounts, setElementCounts] = useState({});
  const [weeklyData, setWeeklyData] = useState({});
  const [monthlyData, setMonthlyData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchLogs = async () => {
      try {
        const response = await fetch("/api/logs");
        const data = await response.json();
        setLogs(data);
        processLogs(data);
        aggregateByTime(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (userId === VALID_ID && userPassword === VALID_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid ID or password");
    }
  };

  const processLogs = (data) => {
    const eventTypeCounts = {};
    const urlCounts = {};
    const elementCounts = {};

    data.forEach((log) => {
      // Process event types
      if (log.eventType) {
        eventTypeCounts[log.eventType] =
          (eventTypeCounts[log.eventType] || 0) + 1;
      }

      // Process URLs
      if (log.data && log.data.url) {
        urlCounts[log.data.url] = (urlCounts[log.data.url] || 0) + 1;
      }

      // Process elements
      if (log.data && log.data.element) {
        elementCounts[log.data.element] =
          (elementCounts[log.data.element] || 0) + 1;
      }
    });

    setEventTypeCounts(eventTypeCounts);
    setUrlCounts(urlCounts);
    setElementCounts(elementCounts);
  };

  const aggregateByTime = (data) => {
    const weeklyData = {};
    const monthlyData = {};

    data.forEach((log) => {
      const date = new Date(log.timestamp);
      const week = getWeekOfYear(date);
      const month = date.toISOString().slice(0, 7); // YYYY-MM

      // Weekly aggregation
      const weekLabel = `Week ${week} (${date.getFullYear()})`;
      weeklyData[weekLabel] = (weeklyData[weekLabel] || 0) + 1;

      // Monthly aggregation
      const monthLabel = `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()}`;
      monthlyData[monthLabel] = (monthlyData[monthLabel] || 0) + 1;
    });

    setWeeklyData(weeklyData);
    setMonthlyData(monthlyData);
  };

  const getWeekOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - start) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
  };

  const createChartData = (data) => ({
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#F5A623",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#F5A623",
        ],
      },
    ],
  });

  const downloadCSV = () => {
    const headers = ["Event Type", "URL", "Element", "Text", "Timestamp"];
    const rows = logs.map((log) => [
      log.eventType || "",
      log.data?.url || "",
      log.data?.element || "",
      log.data?.text || "",
      new Date(log.timestamp).toLocaleString(),
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "logs_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this log entry?")) {
      setLogs((prevLogs) => prevLogs.filter((_, i) => i !== index));
      // Optionally, you might also want to handle deletion on the server side
    }
  };

  const renderChartForUrl = (url) => {
    const urlData = Object.entries(urlCounts).find(([key]) => key === url);
    const chartData = createChartData({ [url]: urlData ? urlData[1] : 0 });

    return (
      <div style={{ width: "150px", height: "150px" }}>
        <Doughnut data={chartData} />
      </div>
    );
  };

  // Sort logs by timestamp in descending order
  const sortedLogs = logs.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  // Pagination logic
  const indexOfLastLog = currentPage * rowsPerPage;
  const indexOfFirstLog = indexOfLastLog - rowsPerPage;
  const currentLogs = sortedLogs.slice(indexOfFirstLog, indexOfLastLog);

  const totalPages = Math.ceil(sortedLogs.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="login">
        <h2>Please Log In</h2>
        <input
          type="text"
          placeholder="ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <style jsx>{`
          .login {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          input {
            margin: 10px;
            padding: 10px;
            font-size: 16px;
            width: 200px;
          }
          button {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #005bb5;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Web Performance Analytics Dashboard</h1>
      <button onClick={downloadCSV} className="download-btn">
        Download CSV Report
      </button>
      <div className="charts">
        <div className="chart-container">
          <h2>Event Types</h2>
          <Doughnut data={createChartData(eventTypeCounts)} />
        </div>
        <div className="chart-container">
          <h2>URLs</h2>
          <Doughnut data={createChartData(urlCounts)} />
        </div>
        <div className="chart-container">
          <h2>Elements</h2>
          <Doughnut data={createChartData(elementCounts)} />
        </div>
      </div>
      <div className="charts">
        <div className="chart-container">
          <h2>Weekly Activity</h2>
          <Bar
            data={createChartData(weeklyData)}
            options={{
              scales: {
                x: {
                  title: { display: true, text: "Week" },
                  ticks: { autoSkip: false }, // Adjust as needed
                },
                y: { title: { display: true, text: "Count" } },
              },
            }}
          />
        </div>
        <div className="chart-container">
          <h2>Monthly Activity</h2>
          <Bar
            data={createChartData(monthlyData)}
            options={{
              scales: {
                x: {
                  title: { display: true, text: "Month" },
                  ticks: { autoSkip: false }, // Adjust as needed
                },
                y: { title: { display: true, text: "Count" } },
              },
            }}
          />
        </div>
      </div>
      <div className="url-charts">
        {Object.keys(urlCounts).map((url) => (
          <div key={url} className="url-chart">
            <h3>{url}</h3>
            {renderChartForUrl(url)}
          </div>
        ))}
      </div>

      <div className="log-table">
        <div className="headline-top">
          <p></p>
          <h2>Log Details</h2>
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Event Type</th>
                <th>URL</th>
                <th>Element</th>
                <th>Text</th>
                <th>Timestamp</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentLogs.length > 0 ? (
                currentLogs.map((log, index) => (
                  <tr key={index}>
                    <td>{log.eventType || "N/A"}</td>
                    <td>{log.data?.url || "N/A"}</td>
                    <td>{log.data?.element || "N/A"}</td>
                    <td>{log.data?.text || "N/A"}</td>
                    <td>{new Date(log.timestamp).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(index)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No logs available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .dashboard {
          text-align: center;
          margin: 20px;
        }

        .charts {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .chart-container {
          width: 30%;
          margin: 20px;
        }

        .log-table {
          margin: 20px 0;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        th {
          background-color: #f2f2f2;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        tr:hover {
          background-color: #f1f1f1;
        }

        .download-btn {
          margin: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .download-btn:hover {
          background-color: #005bb5;
        }

        .url-charts {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 100px;
          margin:100px;
        }

        .url-chart {
          margin-bottom: 20px;
        }

        .url-chart h3 {
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 200;
          text-align: start;
        }

        .delete-btn {
          padding: 5px 10px;
          font-size: 14px;
          background-color: #ff4d4d;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .delete-btn:hover {
          background-color: #e60000;
        }

        .pagination {
          margin: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pagination button {
          margin: 0 10px;
          padding: 3px 10px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .pagination button:disabled {
          background-color: #dcdcdc;
          cursor: not-allowed;
        }

        .pagination span {
          font-size: 16px;
        }
          .headline-top{
        display: flex;
    justify-content: space-between;
}
          }
      `}</style>
    </div>
  );
};

export default Dashboard;
