import { c as createLucideIcon, u as useAuth, j as jsxRuntimeExports, H as Hand, B as Button, L as Link, a as BookOpen } from "./index-CR4OlANc.js";
import { B as Badge } from "./badge-YYtlc1Bn.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-BTRa081w.js";
import { S as Sparkles } from "./sparkles-CN5kz6AC.js";
import { C as ChevronRight } from "./chevron-right-B1jkRc3z.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
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
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
];
const Video = createLucideIcon("video", __iconNode);
const FEATURES = [
  {
    icon: Video,
    title: "Real-time Detection",
    description: "Webcam-powered gesture recognition using AI hand-tracking. See your signs translated to text instantly.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: BookOpen,
    title: "Learn Signs",
    description: "Step-by-step guides for alphabets A–Z, numbers 0–9, and essential phrases like Hello, Thank You, and more.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: CircleCheck,
    title: "Practice Mode",
    description: "Interactive sessions where the system validates your gestures and scores your accuracy in real time.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: ChartColumn,
    title: "Track Progress",
    description: "Detailed progress tracking across all learning modules. Celebrate milestones and keep improving.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  }
];
const STATS = [
  { value: "26", label: "Alphabet Signs" },
  { value: "10", label: "Number Signs" },
  { value: "20+", label: "Common Phrases" },
  { value: "94%", label: "Avg. Accuracy" }
];
function WelcomePage() {
  const { isAuthenticated, signIn, isInitializing, isLoggingIn } = useAuth();
  const handleGetStarted = () => {
    if (!isAuthenticated) {
      signIn();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", "data-ocid": "welcome.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden min-h-[92vh] flex items-center justify-center bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none",
          style: {
            background: "radial-gradient(circle, oklch(var(--primary) / 0.12) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none",
          style: {
            background: "radial-gradient(circle, oklch(var(--primary) / 0.07) 0%, transparent 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto px-4 sm:px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "mb-6",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "secondary",
                className: "gap-1.5 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
                  "AI-Powered Sign Language Detection"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.1 },
            className: "mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl glow-primary opacity-60" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-flex p-5 rounded-2xl bg-primary/10 border border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-16 h-16 text-primary" }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.1]", children: [
                "Sign Language",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Detector" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed", children: "Bridge the gap between sign language and the world — detect, learn, and practice ASL in real time using your webcam." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.3 },
            className: "flex flex-col sm:flex-row gap-4 justify-center mb-16",
            children: isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  size: "lg",
                  className: "gap-2 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth",
                  "data-ocid": "welcome.dashboard_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
                    "Go to Dashboard ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  className: "gap-2 px-8 text-base",
                  "data-ocid": "welcome.detect_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/detect", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4" }),
                    " Try Detection"
                  ] })
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  size: "lg",
                  className: "gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth",
                  onClick: handleGetStarted,
                  disabled: isInitializing || isLoggingIn,
                  "data-ocid": "welcome.get_started_button",
                  children: [
                    isLoggingIn ? "Signing In…" : "Get Started",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  asChild: true,
                  variant: "outline",
                  size: "lg",
                  className: "gap-2 px-8 text-base border-border/60 hover:border-primary/50 transition-smooth",
                  "data-ocid": "welcome.learn_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/learn", children: "Explore Learning" })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.5 },
            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto",
            children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center p-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-primary", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
                ]
              },
              stat.label
            ))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 bg-muted/30",
        "data-ocid": "welcome.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-4", children: "Everything You Need to Master Sign Language" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A complete platform that combines AI-powered detection with structured learning and real-time feedback." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: FEATURES.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Card,
                {
                  className: `card-hover h-full border ${feature.border} bg-card`,
                  "data-ocid": `welcome.feature_card.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `inline-flex self-start p-3 rounded-xl ${feature.bg} mb-5`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: `w-6 h-6 ${feature.color}` })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg mb-2", children: feature.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: feature.description })
                  ] })
                }
              )
            },
            feature.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-background", "data-ocid": "welcome.how_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "mb-14",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-4", children: "How It Works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Three simple steps to start communicating with sign language." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8", children: [
        {
          step: "01",
          title: "Sign In",
          desc: "Create your account to unlock all learning modules and track your personal progress."
        },
        {
          step: "02",
          title: "Learn & Practice",
          desc: "Browse the sign library, study each gesture, then enter practice mode to test yourself."
        },
        {
          step: "03",
          title: "Detect Live",
          desc: "Open the detection page, allow webcam access, and sign — the AI translates in real time."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: i === 1 ? 0 : i === 0 ? -20 : 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.15 },
          className: "flex flex-col items-center text-center",
          "data-ocid": `welcome.step.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary text-lg", children: item.step }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.desc })
          ]
        },
        item.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 bg-muted/30", "data-ocid": "welcome.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl glow-primary opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-10 h-10 text-primary" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold mb-4", children: "Start Your Sign Language Journey Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 max-w-xl mx-auto", children: "Join learners worldwide mastering ASL with the power of real-time AI detection. No experience needed." }),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              size: "lg",
              className: "gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth",
              "data-ocid": "welcome.cta_dashboard_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", children: [
                "Open Dashboard ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
              ] })
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "lg",
              onClick: handleGetStarted,
              disabled: isInitializing || isLoggingIn,
              className: "gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth",
              "data-ocid": "welcome.cta_signup_button",
              children: [
                isLoggingIn ? "Signing In…" : "Get Started — It's Free",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
}
export {
  WelcomePage as default
};
