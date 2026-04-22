import { c as createLucideIcon, j as jsxRuntimeExports, S as Skeleton, H as Hand, C as Crosshair, a as BookOpen, D as Dumbbell, L as Link, B as Button } from "./index-CR4OlANc.js";
import { B as Badge } from "./badge-YYtlc1Bn.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-BTRa081w.js";
import { P as ProtectedRoute } from "./ProtectedRoute-4e_XFtSu.js";
import { u as useGetOrCreateProfile, a as useGetLeaderboard, b as useProgress, A as ALPHABETS, N as NUMBERS, C as COMMON_GESTURES } from "./gesture-data-DajKdfv9.js";
import { L as Lightbulb } from "./lightbulb-DXt2mAgz.js";
import { C as ChevronRight } from "./chevron-right-B1jkRc3z.js";
import { T as Trophy, S as Star } from "./trophy-B_kspJLZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
];
const Hash = createLucideIcon("hash", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
];
const Type = createLucideIcon("type", __iconNode);
const QUICK_ACTIONS = [
  {
    to: "/detect",
    label: "Start Detection",
    icon: Crosshair,
    colorClass: "text-primary",
    bgClass: "bg-primary/10 border-primary/20",
    description: "Open webcam and detect signs in real time",
    badge: "Live"
  },
  {
    to: "/learn",
    label: "Learn Signs",
    icon: BookOpen,
    colorClass: "text-accent",
    bgClass: "bg-accent/10 border-accent/20",
    description: "Browse alphabets, numbers and common phrases",
    badge: "44 signs"
  },
  {
    to: "/practice",
    label: "Practice Mode",
    icon: Dumbbell,
    colorClass: "text-primary",
    bgClass: "bg-primary/10 border-primary/20",
    description: "Test your signing with live feedback and scoring",
    badge: "Interactive"
  }
];
function ProgressBar({
  value,
  max,
  colorClass = "bg-primary"
}) {
  const pct = max > 0 ? Math.min(100, Math.round(value / max * 100)) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `h-full rounded-full ${colorClass}`,
      initial: { width: 0 },
      animate: { width: `${pct}%` },
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
    }
  ) });
}
function StatCard({
  icon: Icon,
  label,
  learned,
  total,
  colorClass,
  barColor,
  delay,
  ocid
}) {
  const pct = total > 0 ? Math.round(learned / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay },
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `p-2 rounded-lg ${colorClass.replace("text-", "bg-")}/10`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-4 h-4 ${colorClass}` })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs font-mono", children: [
            pct,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-1", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-3xl font-bold ${colorClass}`, children: learned }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-sm", children: [
            "/ ",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: learned, max: total, colorClass: barColor })
      ] }) })
    }
  );
}
function NextGestureCard({
  category,
  gesture,
  delay,
  ocid
}) {
  if (!gesture) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay },
        "data-ocid": ocid,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-accent/20 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-accent", children: "All learned!" })
          ] })
        ] }) })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, delay },
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-accent/20 bg-accent/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: gesture.emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-accent", children: gesture.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: gesture.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/learn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-accent flex-shrink-0" }) })
      ] }) })
    }
  );
}
function DashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, {}) });
}
function DashboardContent() {
  const { data: profile, isLoading } = useGetOrCreateProfile();
  const { data: leaderboard, isLoading: lbLoading } = useGetLeaderboard();
  const { learnedAlphabets, learnedNumbers, learnedCommonGestures } = useProgress();
  const totalLearned = Number((profile == null ? void 0 : profile.totalGesturesLearned) ?? 0);
  const TOTAL_ALL = ALPHABETS.length + NUMBERS.length + COMMON_GESTURES.length;
  const overallPct = TOTAL_ALL > 0 ? Math.round(totalLearned / TOTAL_ALL * 100) : 0;
  const nextAlphabet = ALPHABETS.find(
    (g) => !learnedAlphabets.includes(g.label)
  );
  const nextNumber = NUMBERS.find((g) => !learnedNumbers.includes(g.label));
  const nextGesture = COMMON_GESTURES.find(
    (g) => !learnedCommonGestures.includes(g.label)
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8",
      "data-ocid": "dashboard.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl font-bold leading-tight", children: [
                  "Welcome back",
                  (profile == null ? void 0 : profile.displayName) ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gradient-primary", children: [
                    ", ",
                    profile.displayName
                  ] }) : "",
                  "!"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Track your sign language progress and keep practicing." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, delay: 0.15 },
                  className: "flex items-center gap-3 bg-primary/10 border border-primary/25 rounded-2xl px-5 py-3 self-start",
                  "data-ocid": "dashboard.total_learned_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-bold text-primary leading-none", children: isLoading ? "—" : totalLearned }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                        "of ",
                        TOTAL_ALL,
                        " learned"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-10 bg-border" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-4xl font-bold text-primary leading-none", children: isLoading ? "—" : `${overallPct}%` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "complete" })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.stats_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
            "Progress by Category"
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Type,
                label: "Alphabets Learned",
                learned: learnedAlphabets.length,
                total: ALPHABETS.length,
                colorClass: "text-primary",
                barColor: "bg-primary",
                delay: 0.1,
                ocid: "dashboard.alphabets_card"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Hash,
                label: "Numbers Learned",
                learned: learnedNumbers.length,
                total: NUMBERS.length,
                colorClass: "text-primary",
                barColor: "bg-primary",
                delay: 0.2,
                ocid: "dashboard.numbers_card"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                icon: Hand,
                label: "Common Gestures",
                learned: learnedCommonGestures.length,
                total: COMMON_GESTURES.length,
                colorClass: "text-accent",
                barColor: "bg-accent",
                delay: 0.3,
                ocid: "dashboard.gestures_card"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.recommended_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4 text-accent" }),
            "Next to Learn",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-accent border-accent/40 text-xs ml-1",
                children: "Recommended"
              }
            )
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NextGestureCard,
              {
                category: "Alphabet",
                gesture: nextAlphabet,
                delay: 0.1,
                ocid: "dashboard.next_alphabet_card"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NextGestureCard,
              {
                category: "Number",
                gesture: nextNumber,
                delay: 0.2,
                ocid: "dashboard.next_number_card"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              NextGestureCard,
              {
                category: "Common Gesture",
                gesture: nextGesture,
                delay: 0.3,
                ocid: "dashboard.next_gesture_card"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.quick_actions_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold mb-3", children: "Quick Actions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: QUICK_ACTIONS.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.4, delay: 0.05 * i },
              "data-ocid": `dashboard.quick_action.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: action.to, className: "block h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `card-hover h-full border ${action.bgClass}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl ${action.bgClass}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    action.icon,
                    {
                      className: `w-5 h-5 ${action.colorClass}`
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: action.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: action.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-snug", children: action.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `flex items-center gap-1 mt-3 text-xs font-medium ${action.colorClass}`,
                    children: [
                      "Open ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                    ]
                  }
                )
              ] }) }) })
            },
            action.to
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "dashboard.leaderboard_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-semibold mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-accent" }),
            "Leaderboard"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: lbLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-4 space-y-3",
              "data-ocid": "dashboard.leaderboard.loading_state",
              children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full rounded-lg" }, i))
            }
          ) : !leaderboard || leaderboard.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "p-8 text-center text-muted-foreground",
              "data-ocid": "dashboard.leaderboard.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 mx-auto mb-2 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "No rankings yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1 opacity-70", children: "Start learning signs to appear on the board!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    asChild: true,
                    size: "sm",
                    variant: "outline",
                    className: "mt-4",
                    "data-ocid": "dashboard.leaderboard.start_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/learn", children: "Start Learning" })
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: leaderboard.slice(0, 5).map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -8 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.05 * i },
              className: "flex items-center gap-3 px-4 py-3",
              "data-ocid": `dashboard.leaderboard.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? "bg-accent/20 text-accent ring-1 ring-accent/40" : i === 1 ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"}`,
                    children: i === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5" }) : i + 1
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-sm font-medium truncate min-w-0", children: entry.displayName || "Anonymous" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: i === 0 ? "default" : "secondary",
                    className: "text-xs font-mono shrink-0",
                    children: [
                      Number(entry.totalGesturesLearned),
                      " signs"
                    ]
                  }
                )
              ]
            },
            entry.userId.toString()
          )) }) }) })
        ] })
      ]
    }
  );
}
export {
  DashboardPage as default
};
