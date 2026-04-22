import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, g as createSlot, e as cn, f as ue, B as Button } from "./index-CR4OlANc.js";
import { B as Badge } from "./badge-YYtlc1Bn.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-BTRa081w.js";
import { T as Tabs, j as TabsList, k as TabsTrigger } from "./tabs-BFRFt9Ax.js";
import { P as ProtectedRoute } from "./ProtectedRoute-4e_XFtSu.js";
import { u as useGestureDetection, A as AnimatePresence, C as Camera, T as TriangleAlert, a as CameraOff } from "./use-gesture-detection-DAkZPLbF.js";
import { C as COMMON_GESTURES, N as NUMBERS, A as ALPHABETS, c as useMarkGestureLearned, b as useProgress } from "./gesture-data-DajKdfv9.js";
import { Z as Zap } from "./zap-BMH9i3mJ.js";
import { S as Star, T as Trophy } from "./trophy-B_kspJLZ.js";
import { C as ChevronRight } from "./chevron-right-B1jkRc3z.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22", key: "1ailkh" }],
  ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
  ["path", { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }]
];
const Shuffle = createLucideIcon("shuffle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
];
const SkipForward = createLucideIcon("skip-forward", __iconNode);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
const CATEGORY_MAP = {
  alphabet: ALPHABETS,
  number: NUMBERS,
  common: COMMON_GESTURES
};
const CATEGORY_LABELS = {
  alphabet: "Alphabets",
  number: "Numbers",
  common: "Common Gestures"
};
const MATCHES_REQUIRED = 3;
function PracticePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PracticeContent, {}) });
}
function PracticeContent() {
  const videoRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const [cameraActive, setCameraActive] = reactExports.useState(false);
  const [cameraError, setCameraError] = reactExports.useState(null);
  const [activeCategory, setActiveCategory] = reactExports.useState("alphabet");
  const [gestureIndex, setGestureIndex] = reactExports.useState(0);
  const [matchCount, setMatchCount] = reactExports.useState(0);
  const [feedbackState, setFeedbackState] = reactExports.useState("idle");
  const feedbackTimerRef = reactExports.useRef(null);
  const [streak, setStreak] = reactExports.useState(0);
  const [sessionLearned, setSessionLearned] = reactExports.useState(0);
  const gestures = CATEGORY_MAP[activeCategory];
  const currentGesture = gestures[gestureIndex];
  const totalInCategory = gestures.length;
  const progressPct = (gestureIndex + 1) / totalInCategory * 100;
  const { gesture, confidence, isDetecting, startDetection, stopDetection } = useGestureDetection();
  const { mutate: markLearned } = useMarkGestureLearned();
  const { isGestureLearned } = useProgress();
  const isCurrentLearned = isGestureLearned(
    activeCategory,
    currentGesture.label
  );
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraActive(true);
      startDetection();
    } catch {
      setCameraError("Camera access denied. Please allow camera permissions.");
    }
  };
  const stopCamera = reactExports.useCallback(() => {
    var _a;
    if ((_a = videoRef.current) == null ? void 0 : _a.srcObject) {
      const stream = videoRef.current.srcObject;
      for (const t of stream.getTracks()) t.stop();
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    stopDetection();
  }, [stopDetection]);
  reactExports.useEffect(() => () => stopCamera(), [stopCamera]);
  const goToGesture = reactExports.useCallback((index) => {
    setGestureIndex(index);
    setMatchCount(0);
    setFeedbackState("idle");
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
  }, []);
  const goNext = reactExports.useCallback(() => {
    goToGesture((gestureIndex + 1) % totalInCategory);
  }, [gestureIndex, totalInCategory, goToGesture]);
  const goPrev = reactExports.useCallback(() => {
    goToGesture((gestureIndex - 1 + totalInCategory) % totalInCategory);
  }, [gestureIndex, totalInCategory, goToGesture]);
  const goRandom = reactExports.useCallback(() => {
    const randIdx = Math.floor(Math.random() * totalInCategory);
    goToGesture(
      randIdx === gestureIndex ? (randIdx + 1) % totalInCategory : randIdx
    );
  }, [gestureIndex, totalInCategory, goToGesture]);
  const skipGesture = reactExports.useCallback(() => {
    setStreak(0);
    ue.info(`Skipped "${currentGesture.label}"`, { duration: 2e3 });
    goNext();
  }, [currentGesture.label, goNext]);
  reactExports.useEffect(() => {
    if (!isDetecting || !gesture || feedbackState === "learned") return;
    if (feedbackState === "match") return;
    const isMatch = gesture.toLowerCase() === currentGesture.label.toLowerCase() && confidence >= 70;
    if (isMatch) {
      const newCount = matchCount + 1;
      setMatchCount(newCount);
      setStreak((s) => s + 1);
      if (newCount >= MATCHES_REQUIRED) {
        setFeedbackState("learned");
        setSessionLearned((prev) => prev + 1);
        markLearned({
          category: activeCategory,
          gesture: currentGesture.label
        });
        ue.success(`🎉 Gesture "${currentGesture.label}" Learned!`, {
          duration: 3e3
        });
        feedbackTimerRef.current = setTimeout(() => {
          setFeedbackState("idle");
          goNext();
        }, 2200);
      } else {
        setFeedbackState("match");
        feedbackTimerRef.current = setTimeout(() => {
          setFeedbackState("idle");
        }, 600);
      }
    } else if (!isMatch && feedbackState === "idle") {
      setFeedbackState("try-again");
      feedbackTimerRef.current = setTimeout(() => {
        setFeedbackState("idle");
      }, 400);
    }
  }, [
    gesture,
    confidence,
    currentGesture.label,
    isDetecting,
    matchCount,
    feedbackState,
    activeCategory,
    markLearned,
    goNext
  ]);
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setGestureIndex(0);
    setMatchCount(0);
    setFeedbackState("idle");
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
  };
  const matchProgress = matchCount / MATCHES_REQUIRED * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6",
      "data-ocid": "practice.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2.5 rounded-xl bg-primary/10 ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Practice Mode" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "Match each gesture ",
                MATCHES_REQUIRED,
                "× to mark it as learned"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3",
              "data-ocid": "practice.stats_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-4 h-4 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold text-accent", children: streak }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "streak" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-bold text-primary", children: sessionLearned }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "learned" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tabs,
          {
            value: activeCategory,
            onValueChange: handleCategoryChange,
            "data-ocid": "practice.category_tabs",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-3 w-full max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "alphabet", "data-ocid": "practice.tab.alphabet", children: "Alphabets" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "number", "data-ocid": "practice.tab.numbers", children: "Numbers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "common", "data-ocid": "practice.tab.common", children: "Common" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", "data-ocid": "practice.category_progress", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: CATEGORY_LABELS[activeCategory] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              gestureIndex + 1,
              " / ",
              totalInCategory
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progressPct, className: "h-1.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -16 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Card,
                  {
                    className: `relative overflow-hidden transition-smooth ${feedbackState === "learned" ? "border-primary glow-primary" : feedbackState === "match" ? "border-primary/60" : ""}`,
                    "data-ocid": "practice.target_card",
                    children: [
                      isCurrentLearned && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/20 text-primary border-primary/30 text-xs gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3 h-3" }),
                        " Learned"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 text-center space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.div,
                          {
                            animate: feedbackState === "learned" ? { scale: [1, 1.15, 1], rotate: [0, -3, 3, 0] } : feedbackState === "match" ? { scale: [1, 1.08, 1] } : { scale: 1 },
                            transition: { duration: 0.4 },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-3 leading-none select-none", children: currentGesture.emoji }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-7xl text-gradient-primary leading-none tracking-tight", children: currentGesture.label })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto", children: currentGesture.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 rounded-lg px-4 py-2 inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "Tip: " }),
                          currentGesture.tip
                        ] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 pt-1", children: [
                          Array.from(
                            { length: MATCHES_REQUIRED },
                            (_, i) => i + 1
                          ).map((dotNum) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              animate: dotNum <= matchCount ? { scale: [1, 1.3, 1] } : {},
                              transition: { duration: 0.3 },
                              className: `w-3 h-3 rounded-full border-2 transition-smooth ${dotNum <= matchCount ? "bg-primary border-primary" : "bg-transparent border-border"}`
                            },
                            `match-dot-${dotNum}`
                          )),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                            matchCount,
                            "/",
                            MATCHES_REQUIRED,
                            " matches"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Progress,
                          {
                            value: matchProgress,
                            className: `h-2 transition-smooth ${matchCount > 0 ? "opacity-100" : "opacity-40"}`
                          }
                        )
                      ] })
                    ]
                  }
                )
              },
              `${activeCategory}-${gestureIndex}`
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2",
                "data-ocid": "practice.nav_controls",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: goPrev,
                      className: "gap-1",
                      "data-ocid": "practice.prev_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
                        " Prev"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: goRandom,
                      className: "gap-1 flex-1",
                      "data-ocid": "practice.random_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Shuffle, { className: "w-4 h-4" }),
                        " Random"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: skipGesture,
                      className: "gap-1",
                      "data-ocid": "practice.skip_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SkipForward, { className: "w-4 h-4" }),
                        " Skip"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      size: "sm",
                      onClick: goNext,
                      className: "gap-1",
                      "data-ocid": "practice.next_button",
                      children: [
                        "Next ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                      ]
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden", "data-ocid": "practice.camera_panel", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-video bg-muted/30 flex items-center justify-center min-h-[260px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "video",
                  {
                    ref: videoRef,
                    className: `w-full h-full object-cover ${cameraActive ? "block" : "hidden"}`,
                    playsInline: true,
                    muted: true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "hidden" }),
                !cameraActive && !cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center gap-3 p-8 text-center text-muted-foreground",
                    "data-ocid": "practice.camera.empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-14 h-14 opacity-20" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Enable camera to start practicing" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-60", children: "Allow camera access when prompted" })
                    ]
                  }
                ),
                cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center gap-3 text-destructive p-8 text-center",
                    "data-ocid": "practice.camera.error_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: cameraError })
                    ]
                  }
                ),
                cameraActive && isDetecting && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/20 text-primary border-primary/30 text-xs gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-primary rounded-full animate-pulse" }),
                  "Detecting"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { children: [
                  feedbackState === "match" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { scale: 0.6, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { scale: 1.1, opacity: 0 },
                      transition: { duration: 0.25 },
                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-primary/40 success-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl text-primary", children: "✓ Match!" }) })
                    },
                    "match-overlay"
                  ),
                  feedbackState === "try-again" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { scale: 0.8, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-accent/15 backdrop-blur-sm rounded-2xl px-6 py-4 border border-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-2xl text-accent", children: "Try Again" }) })
                    },
                    "try-again-overlay"
                  ),
                  feedbackState === "learned" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { scale: 0.5, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: { scale: 1.2, opacity: 0 },
                      transition: { duration: 0.35, type: "spring", bounce: 0.4 },
                      className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/25 backdrop-blur-md rounded-2xl px-8 py-6 border border-primary/50 glow-primary text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-2", children: "🎉" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-black text-3xl text-primary", children: "Gesture Learned!" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary/70 text-sm mt-1", children: "Moving to next gesture…" })
                      ] })
                    },
                    "learned-overlay"
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 border-t border-border bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: cameraActive ? "secondary" : "default",
                    onClick: cameraActive ? stopCamera : startCamera,
                    className: "gap-1.5 shrink-0",
                    "data-ocid": cameraActive ? "practice.stop_camera_button" : "practice.start_camera_button",
                    children: cameraActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CameraOff, { className: "w-4 h-4" }),
                      " Stop Camera"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
                      " Start Camera"
                    ] })
                  }
                ),
                isDetecting && gesture && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground shrink-0", children: "Seeing:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "font-mono font-bold text-sm shrink-0",
                      children: gesture
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: `text-xs font-mono font-bold shrink-0 ${confidence >= 85 ? "text-primary" : confidence >= 70 ? "text-accent" : "text-muted-foreground"}`,
                      children: [
                        confidence.toFixed(0),
                        "%"
                      ]
                    }
                  )
                ] }),
                cameraActive && !isDetecting && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Initializing detector…" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
              !cameraActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-dashed", "data-ocid": "practice.hint_card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Start your camera to begin detecting gestures in real time." }) }) })
                },
                "no-camera-hint"
              ),
              cameraActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Card,
                    {
                      className: `transition-smooth ${feedbackState === "learned" ? "border-primary/40 bg-primary/5" : feedbackState === "match" ? "border-primary/30 bg-primary/5" : feedbackState === "try-again" ? "border-accent/30 bg-accent/5" : ""}`,
                      "data-ocid": "practice.feedback_card",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `text-3xl transition-smooth ${feedbackState === "idle" ? "opacity-40" : "opacity-100"}`,
                            children: feedbackState === "learned" ? "🎉" : feedbackState === "match" ? "✅" : feedbackState === "try-again" ? "🟠" : "👐"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: `font-display font-bold text-base transition-smooth ${feedbackState === "learned" ? "text-primary" : feedbackState === "match" ? "text-primary" : feedbackState === "try-again" ? "text-accent" : "text-muted-foreground"}`,
                              children: feedbackState === "learned" ? "Gesture Learned!" : feedbackState === "match" ? `Match! (${matchCount}/${MATCHES_REQUIRED})` : feedbackState === "try-again" ? "Try Again" : `Show "${currentGesture.label}" to the camera`
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: feedbackState === "idle" ? `Match ${MATCHES_REQUIRED} times to mark as learned` : feedbackState === "try-again" ? "Keep your hand steady and in frame" : feedbackState === "match" ? `${MATCHES_REQUIRED - matchCount} more to complete` : "Progress saved! Auto-advancing…" })
                        ] })
                      ] })
                    }
                  )
                },
                "practice-hint"
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  PracticePage as default
};
