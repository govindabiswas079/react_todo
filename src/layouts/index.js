import { lazy } from "react";
import { Loadable } from "../components/LazyRoutes/Loadable";


const Dashboard = Loadable(lazy(() => import('./Dashboard')));
const ManageEmployee = Loadable(lazy(() => import('./ManageEmployee')));

export {
    Dashboard,
    ManageEmployee,
}