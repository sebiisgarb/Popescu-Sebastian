import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { ReviveProject } from "./components/ReviveProject";
import { ConstructionProject } from "./components/ConstructionProject";
import { FitTrackProject } from "./components/FitTrackProject";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: Projects,
  },
  {
    path: "/projects/revive",
    Component: ReviveProject,
  },
  {
    path: "/projects/construction-app",
    Component: ConstructionProject,
  },
  {
    path: "/projects/fittrack",
    Component: FitTrackProject,
  },
]);