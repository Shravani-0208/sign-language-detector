import { c as createLucideIcon, u as useAuth, b as useNavigate, r as reactExports, j as jsxRuntimeExports, H as Hand, B as Button, L as Link } from "./index-CR4OlANc.js";
import { m as motion, C as Card, b as CardHeader, a as CardContent } from "./proxy-BTRa081w.js";
import { F as Fingerprint } from "./fingerprint-B03HzcUT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const features = [
  { icon: "🤟", label: "Real-time gesture detection" },
  { icon: "📚", label: "A–Z alphabet learning library" },
  { icon: "🎯", label: "Interactive practice sessions" }
];
function SignInPage() {
  const { signIn, isInitializing, isLoggingIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex items-center justify-center min-h-screen px-4 bg-background bg-grid overflow-hidden",
      "data-ocid": "signin.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/8 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            className: "w-full max-w-md z-10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card/80 backdrop-blur-sm border-border/60 shadow-2xl shadow-background/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "text-center pb-2 pt-8 px-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "inline-flex justify-center mb-5",
                    initial: { scale: 0.8, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { delay: 0.15, duration: 0.4, ease: "backOut" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-primary/20 blur-lg" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative p-4 rounded-2xl bg-primary/10 border border-primary/30 glow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-9 h-9 text-primary" }) })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.25, duration: 0.4 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5 mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-foreground", children: "SIGN" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl text-primary", children: "LINK" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold text-foreground mt-3", children: "Sign In" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1.5", children: "Continue with Internet Identity to access your account" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-8 pb-8 pt-6 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "flex flex-wrap gap-2 justify-center",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.35, duration: 0.4 },
                    children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-muted/70 text-muted-foreground border border-border/50",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.icon }),
                          f.label
                        ]
                      },
                      f.label
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.45, duration: 0.4 },
                    className: "space-y-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          type: "button",
                          className: "w-full gap-2.5 h-12 text-base font-semibold font-display glow-primary transition-smooth",
                          size: "lg",
                          onClick: signIn,
                          disabled: isInitializing || isLoggingIn,
                          "data-ocid": "signin.submit_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "w-5 h-5" }),
                            isInitializing ? "Initializing..." : isLoggingIn ? "Opening Identity…" : "Sign In with Internet Identity"
                          ]
                        }
                      ),
                      (isInitializing || isLoggingIn) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
                          "data-ocid": "signin.loading_state",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
                            "Connecting to Internet Identity…"
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.55, duration: 0.4 },
                    className: "rounded-lg bg-muted/40 border border-border/40 p-3 flex gap-2.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Internet Identity provides secure, passwordless authentication. No passwords stored — ever." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.6, duration: 0.4 },
                    className: "text-center text-sm text-muted-foreground",
                    children: [
                      "Don't have an account?",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/signup",
                          className: "text-primary hover:text-primary/80 font-medium hover:underline transition-smooth",
                          "data-ocid": "signin.signup_link",
                          children: "Create one"
                        }
                      )
                    ]
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
}
export {
  SignInPage as default
};
