import { createRootRoute, createRoute } from "@tanstack/react-router";
import { lazy } from "react";
import Layout from "./components/Layout";

const WelcomePage = lazy(() => import("./pages/Welcome"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const DetectPage = lazy(() => import("./pages/Detect"));
const LearnPage = lazy(() => import("./pages/Learn"));
const PracticePage = lazy(() => import("./pages/Practice"));

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: WelcomePage,
});

const signInRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: SignInPage,
});

const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: SignUpPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});

const detectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/detect",
  component: DetectPage,
});

const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn",
  component: LearnPage,
});

const practiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/practice",
  component: PracticePage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  signInRoute,
  signUpRoute,
  dashboardRoute,
  detectRoute,
  learnRoute,
  practiceRoute,
]);
