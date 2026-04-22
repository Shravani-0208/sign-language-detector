import { c as createLucideIcon, u as useAuth, b as useNavigate, r as reactExports, j as jsxRuntimeExports, H as Hand, a as BookOpen, B as Button, L as Link } from "./index-CR4OlANc.js";
import { m as motion, C as Card, b as CardHeader, a as CardContent } from "./proxy-BTRa081w.js";
import { Z as Zap } from "./zap-BMH9i3mJ.js";
import { F as Fingerprint } from "./fingerprint-B03HzcUT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const benefits = [
  {
    icon: Zap,
    title: "Real-time detection",
    desc: "Instant gesture recognition powered by MediaPipe"
  },
  {
    icon: BookOpen,
    title: "Full sign library",
    desc: "A–Z alphabets, numbers 0–9, and common phrases"
  },
  {
    icon: Target,
    title: "Practice & track",
    desc: "Interactive sessions with accuracy scores"
  }
];
function SignUpPage() {
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
      "data-ocid": "signup.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/6 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl font-semibold text-foreground mt-3", children: "Create Account" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1.5", children: "Join Sign Link and start learning sign language today" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-8 pb-8 pt-5 space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "space-y-2.5",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.35, duration: 0.4 },
                    children: benefits.map((benefit, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -12 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.4 + i * 0.08, duration: 0.35 },
                        className: "flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/40",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-md bg-primary/10 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(benefit.icon, { className: "w-3.5 h-3.5 text-primary" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground leading-none mb-0.5", children: benefit.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: benefit.desc })
                          ] })
                        ]
                      },
                      benefit.title
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.58, duration: 0.4 },
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
                          "data-ocid": "signup.submit_button",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "w-5 h-5" }),
                            isInitializing ? "Initializing..." : isLoggingIn ? "Opening Identity…" : "Create Account with Internet Identity"
                          ]
                        }
                      ),
                      (isInitializing || isLoggingIn) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
                          "data-ocid": "signup.loading_state",
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
                    transition: { delay: 0.65, duration: 0.4 },
                    className: "rounded-lg bg-muted/40 border border-border/40 p-3 flex gap-2.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Uses Internet Identity — a secure, decentralized login with no passwords, no email required." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.7, duration: 0.4 },
                    className: "text-center text-sm text-muted-foreground",
                    children: [
                      "Already have an account?",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/signin",
                          className: "text-primary hover:text-primary/80 font-medium hover:underline transition-smooth",
                          "data-ocid": "signup.signin_link",
                          children: "Sign In"
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
  SignUpPage as default
};
