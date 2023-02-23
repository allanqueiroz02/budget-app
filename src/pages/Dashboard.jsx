import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      <h2>Dashboard - user: {userName}</h2>
    </div>
  );
};

export default Dashboard;
