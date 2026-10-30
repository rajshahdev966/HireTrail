import { createBrowserRouter, Link } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from "./features/auth/ui/layouts/AuthLayout";
import DashboardLayout from "./shared/ui/layouts/DashboardLayout";
import { CandidateLayout } from "./shared/ui/layouts/CandidateLayout";
import LoginForm from "./features/auth/ui/components/LoginForm";
import RegisterForm from "./features/auth/ui/components/RegisterForm";
import Overview from "./features/employer-overview/ui/pages/Overview";
import { Jobs } from "./features/employer-jobs/ui/pages/Jobs";
import { Applications } from "./features/employer-applications/ui/pages/Applications";
import { Pipeline } from "./features/employer-pipeline/ui/pages/Pipeline";
import { CandidateDetails } from "./features/employer-applications/ui/pages/CandidateDetails";
import { JobForm } from "./features/employer-jobs/ui/pages/JobForm";
import { AddCandidate } from "./features/employer-applications/ui/pages/AddCandidate";
import { Interviews } from "./features/employer-interviews/ui/pages/Interviews";
import { InterviewForm } from "./features/employer-interviews/ui/pages/InterviewForm";
import { Settings } from "./features/employer-settings/ui/pages/Settings";
import { Careers } from "./features/employer-jobs/ui/pages/Careers";
import { PublicJob } from "./features/employer-jobs/ui/pages/PublicJob";
import { Auth } from "./features/auth/ui/pages/Auth";
import { ForgotPassword } from "./features/auth/ui/pages/ForgotPassword";
import { CandidateLanding } from "./features/user-jobs/ui/pages/CandidateLanding";
import { ExploreJobs } from "./features/user-jobs/ui/pages/ExploreJobs";
import { CandidateJobDetails } from "./features/user-jobs/ui/pages/CandidateJobDetails";
import { ApplyForJob } from "./features/user-application-tracking/ui/pages/ApplyForJob";
import { ApplicationSuccess } from "./features/user-application-tracking/ui/pages/ApplicationSuccess";
import { TrackApplication } from "./features/user-application-tracking/ui/pages/TrackApplication";
import { CandidateProfile } from "./features/user-settings/ui/pages/CandidateProfile";

const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "jobs", element: <Jobs /> },
      { path: "jobs/new", element: <JobForm /> },
      { path: "jobs/:id", element: <JobForm /> },
      { path: "applications", element: <Applications /> },
      { path: "applications/new", element: <AddCandidate /> },
      { path: "pipeline", element: <Pipeline /> },
      { path: "candidates/:id", element: <CandidateDetails /> },
      { path: "interviews", element: <Interviews /> },
      { path: "interviews/new", element: <InterviewForm /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "careers",
    element: <CandidateLayout />,
    children: [
      { index: true, element: <CandidateLanding /> },
      { path: "jobs", element: <ExploreJobs /> },
      { path: "jobs/:id", element: <CandidateJobDetails /> },
      { path: "jobs/:id/apply", element: <ApplyForJob /> },
      { path: "application-success", element: <ApplicationSuccess /> },
      { path: "track", element: <TrackApplication /> },
      { path: "profile", element: <CandidateProfile /> },
    ],
  },
  { path: "company/careers", element: <Careers /> },
  { path: "company/careers/:id", element: <PublicJob /> },
  {
    element: <AuthLayout />,
    children: [
      { path: "auth", element: <RegisterForm /> },
      { path: "auth/login", element: <LoginForm /> },
      { path: "onboarding", element: <RegisterForm /> },
      { path: "onboarding/sign-in", element: <LoginForm /> },
    ],
  },
  { path: "login", element: <Auth /> },
  { path: "register", element: <Auth register /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  {
    path: "*",
    element: (
      <div className="not-found">
        <h1>A little off the trail.</h1>
        <p>This page doesn?t exist.</p>
        <Link className="btn primary" to="/">
          Back to your workspace
        </Link>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
