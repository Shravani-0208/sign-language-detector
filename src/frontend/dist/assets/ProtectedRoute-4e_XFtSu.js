import { ae as useInternetIdentity, j as jsxRuntimeExports, H as Hand, S as Skeleton, aq as Navigate } from "./index-CR4OlANc.js";
function ProtectedRoute({ children }) {
  const { isAuthenticated, isInitializing } = useInternetIdentity();
  if (isInitializing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[60vh] gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-2xl bg-primary/10 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-10 h-10 text-primary" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4 mx-auto" })
      ] })
    ] });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/signin" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
export {
  ProtectedRoute as P
};
