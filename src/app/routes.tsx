import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { FinAiProject } from "./components/FinAiProject";
import { SkyPathProject } from "./components/SkyPathProject";
import { ReviveProject } from "./components/ReviveProject";
import { VoiceLearnProject } from "./components/VoiceLearnProject";
import { FitTrackProject } from "./components/FitTrackProject";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/projects/finai",
        Component: FinAiProject,
      },
      {
        path: "/projects/skypath",
        Component: SkyPathProject,
      },
      {
        path: "/projects/revive",
        Component: ReviveProject,
      },
      {
        path: "/projects/voicelearn",
        Component: VoiceLearnProject,
      },
      {
        path: "/projects/fittrack",
        Component: FitTrackProject,
      },
    ],
  },
]);
