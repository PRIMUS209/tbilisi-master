import { useRoutes } from "react-router";
import * as p from "./path";
import MasterDmitriiPage from "pages/Master/Dmitrii";
import HomePage from "pages/Home";
import MastersPage from "pages/Master";

const Router = () => {
  return useRoutes([
    {
      path: p.PATH_HOME_PAGE,
      element: <HomePage />,
    },
    {
      path: p.PATH_MASTERS_DMITRII,
      element: <MasterDmitriiPage />,
    },
    {
      path: p.PATH_MASTERS,
      element: <MastersPage />,
    },
  ]);
};

export default Router;
