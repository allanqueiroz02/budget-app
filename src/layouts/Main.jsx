import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div>
      <h2>MAIN</h2>
      <Outlet />
      <h2>Main fake</h2>
    </div>
  );
};

export default Main;
