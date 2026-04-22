import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports, S as Skeleton, B as Button, H as Hand, C as Crosshair } from "./index-CR4OlANc.js";
import { B as Badge } from "./badge-YYtlc1Bn.js";
import { m as motion, C as Card, a as CardContent } from "./proxy-BTRa081w.js";
import { P as ProtectedRoute } from "./ProtectedRoute-4e_XFtSu.js";
import { u as useGestureDetection, C as Camera, T as TriangleAlert, A as AnimatePresence, a as CameraOff } from "./use-gesture-detection-DAkZPLbF.js";
import { Z as Zap } from "./zap-BMH9i3mJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
const Square = createLucideIcon("square", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode$1);
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
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
];
const Volume2 = createLucideIcon("volume-2", __iconNode);
function DetectPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProtectedRoute, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DetectContent, {}) });
}
function DetectContent() {
  var _a;
  const videoRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const [cameraActive, setCameraActive] = reactExports.useState(false);
  const [cameraError, setCameraError] = reactExports.useState(null);
  const [cameraLoading, setCameraLoading] = reactExports.useState(false);
  const [timedHistory, setTimedHistory] = reactExports.useState([]);
  const prevGestureRef = reactExports.useRef(null);
  const {
    gesture,
    confidence,
    isDetecting,
    startDetection,
    stopDetection,
    clearHistory
  } = useGestureDetection();
  reactExports.useEffect(() => {
    if (gesture && isDetecting && gesture !== prevGestureRef.current) {
      prevGestureRef.current = gesture;
      setTimedHistory((prev) => {
        const entry = {
          gesture,
          timestamp: /* @__PURE__ */ new Date(),
          confidence
        };
        return [entry, ...prev].slice(0, 10);
      });
    }
    if (!isDetecting) {
      prevGestureRef.current = null;
    }
  }, [gesture, isDetecting, confidence]);
  const handleClearHistory = () => {
    clearHistory();
    setTimedHistory([]);
  };
  const startCamera = async () => {
    setCameraError(null);
    setCameraLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraActive(true);
    } catch {
      setCameraError(
        "Camera access denied. Please allow camera permissions and try again."
      );
    } finally {
      setCameraLoading(false);
    }
  };
  const stopCamera = () => {
    var _a2;
    if ((_a2 = videoRef.current) == null ? void 0 : _a2.srcObject) {
      const stream = videoRef.current.srcObject;
      for (const t of stream.getTracks()) t.stop();
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    if (isDetecting) stopDetection();
  };
  reactExports.useEffect(() => {
    return () => {
      var _a2;
      if ((_a2 = videoRef.current) == null ? void 0 : _a2.srcObject) {
        const stream = videoRef.current.srcObject;
        for (const t of stream.getTracks()) t.stop();
      }
    };
  }, []);
  const handleToggleDetection = () => {
    if (isDetecting) {
      stopDetection();
    } else {
      startDetection();
    }
  };
  const handleVoiceOutput = () => {
    if (gesture && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(gesture);
      window.speechSynthesis.speak(utterance);
    }
  };
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };
  const confidenceBarColor = confidence >= 90 ? "bg-primary" : confidence >= 70 ? "bg-accent" : "bg-muted-foreground";
  const confidenceTextColor = confidence >= 90 ? "text-primary" : confidence >= 70 ? "text-accent" : "text-muted-foreground";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6",
      "data-ocid": "detect.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-primary/10 border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold", children: "Real-Time Detection" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground ml-[52px]", children: "Point your camera at your hand to detect sign language gestures in real time." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "lg:col-span-3 space-y-4",
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.4, delay: 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Card,
                  {
                    className: `overflow-hidden transition-all duration-500 ${isDetecting && cameraActive ? "ring-2 ring-primary shadow-[0_0_32px_oklch(var(--primary)/0.35)]" : "ring-1 ring-border"}`,
                    "data-ocid": "detect.camera_panel",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "relative w-full bg-muted/30",
                          style: { aspectRatio: "16/9", minHeight: 260 },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "video",
                              {
                                ref: videoRef,
                                className: `w-full h-full object-cover transition-opacity duration-300 ${cameraActive ? "opacity-100" : "opacity-0 absolute inset-0"}`,
                                playsInline: true,
                                muted: true
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "hidden" }),
                            !cameraActive && !cameraLoading && !cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground",
                                "data-ocid": "detect.camera.empty_state",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-16 h-16 opacity-20" }) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium opacity-60", children: "Camera is off" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-40 mt-1", children: 'Click "Start Camera" below to begin' })
                                  ] })
                                ]
                              }
                            ),
                            cameraLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "absolute inset-0 flex flex-col items-center justify-center gap-4",
                                "data-ocid": "detect.camera.loading_state",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-16 h-16 rounded-full" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-center", children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-40 mx-auto" }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-28 mx-auto" })
                                  ] })
                                ]
                              }
                            ),
                            cameraError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center",
                                "data-ocid": "detect.camera.error_state",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-10 h-10 text-destructive" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: cameraError }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Button,
                                    {
                                      type: "button",
                                      size: "sm",
                                      variant: "outline",
                                      onClick: startCamera,
                                      children: "Try Again"
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cameraActive && isDetecting && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: "absolute top-3 left-3",
                                initial: { opacity: 0, scale: 0.8 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.8 },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/90 text-primary-foreground gap-1.5 shadow-lg", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" }),
                                  "Live"
                                ] })
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cameraActive && isDetecting && !gesture && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              motion.div,
                              {
                                className: "absolute bottom-4 left-0 right-0 flex justify-center",
                                initial: { opacity: 0, y: 8 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 8 },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/70 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-muted-foreground border border-border/40", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-4 h-4" }),
                                  "Position your hand in front of the camera"
                                ] })
                              }
                            ) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 border-t border-border bg-card", children: [
                        !cameraActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            onClick: startCamera,
                            disabled: cameraLoading,
                            className: "gap-1.5 flex-1",
                            "data-ocid": "detect.start_camera_button",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
                              cameraLoading ? "Starting..." : "Start Camera"
                            ]
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            variant: "outline",
                            onClick: stopCamera,
                            className: "gap-1.5 flex-1",
                            "data-ocid": "detect.stop_camera_button",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CameraOff, { className: "w-4 h-4" }),
                              " Stop Camera"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            onClick: handleToggleDetection,
                            disabled: !cameraActive,
                            className: `gap-1.5 flex-1 transition-all duration-300 ${isDetecting ? "bg-primary hover:bg-primary/90 text-primary-foreground border-0" : ""}`,
                            variant: isDetecting ? "default" : "secondary",
                            "data-ocid": "detect.toggle_detection_button",
                            children: isDetecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Square, { className: "w-4 h-4 fill-current" }),
                              " Stop Detecting"
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Crosshair, { className: "w-4 h-4" }),
                              " Start Detecting"
                            ] })
                          }
                        )
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { "data-ocid": "detect.history_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-muted-foreground" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Detection History" }),
                      timedHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs h-5 px-1.5", children: timedHistory.length })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        type: "button",
                        size: "sm",
                        variant: "ghost",
                        onClick: handleClearHistory,
                        className: "h-7 px-2 text-xs gap-1 text-muted-foreground hover:text-destructive",
                        "data-ocid": "detect.clear_history_button",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                          " Clear"
                        ]
                      }
                    )
                  ] }),
                  timedHistory.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm text-muted-foreground/50 italic py-2",
                      "data-ocid": "detect.history.empty_state",
                      children: "Detected gestures will appear here once you start detecting..."
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 max-h-40 overflow-y-auto pr-1", children: timedHistory.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -12 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.25 },
                      className: "flex items-center justify-between rounded-md px-2.5 py-1.5 bg-muted/40 hover:bg-muted/60 transition-colors",
                      "data-ocid": `detect.history.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-primary text-sm", children: entry.gesture }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                            entry.confidence.toFixed(0),
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground/60 font-mono", children: formatTime(entry.timestamp) })
                      ]
                    },
                    `${entry.gesture}-${entry.timestamp.getTime()}`
                  )) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "lg:col-span-2 space-y-4",
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.4, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Card,
                  {
                    className: `transition-all duration-500 ${gesture && isDetecting ? "ring-2 ring-primary/70 shadow-[0_0_24px_oklch(var(--primary)/0.25)]" : ""}`,
                    "data-ocid": "detect.results_panel",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Detected Gesture" }),
                        gesture && isDetecting && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Button,
                          {
                            type: "button",
                            size: "sm",
                            variant: "ghost",
                            onClick: handleVoiceOutput,
                            className: "h-7 w-7 p-0 text-muted-foreground hover:text-primary",
                            "aria-label": "Speak detected gesture",
                            "data-ocid": "detect.voice_button",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4" })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: gesture && isDetecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, scale: 0.85, y: 8 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.85, y: -8 },
                          transition: { duration: 0.2, ease: "easeOut" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "font-display font-bold text-primary leading-none mb-4",
                                style: {
                                  fontSize: "clamp(3rem, 8vw, 5.5rem)",
                                  textShadow: "0 0 40px oklch(var(--primary) / 0.6)"
                                },
                                children: gesture
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-medium", children: "Confidence" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                  "span",
                                  {
                                    className: `font-bold font-mono ${confidenceTextColor}`,
                                    children: [
                                      confidence.toFixed(1),
                                      "%"
                                    ]
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                motion.div,
                                {
                                  className: `h-full rounded-full ${confidenceBarColor}`,
                                  initial: { width: 0 },
                                  animate: { width: `${confidence}%` },
                                  transition: { duration: 0.35, ease: "easeOut" }
                                }
                              ) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: confidence >= 90 ? "Very high confidence" : confidence >= 70 ? "Good confidence" : "Low confidence — try adjusting hand position" })
                            ] })
                          ]
                        },
                        gesture
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          className: "flex flex-col items-center justify-center py-8 gap-3 text-center",
                          "data-ocid": "detect.gesture.empty_state",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Hand, { className: "w-12 h-12 text-muted-foreground/20" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground/60 font-medium", children: isDetecting ? "Position your hand in front of the camera" : "Start detecting to see results" }),
                              !isDetecting && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/40 mt-1", children: "Enable detection using the button below" })
                            ] })
                          ]
                        },
                        "empty"
                      ) })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusChip,
                      {
                        label: "Camera",
                        value: cameraActive ? "Active" : "Off",
                        active: cameraActive
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusChip,
                      {
                        label: "Detection",
                        value: isDetecting ? "Running" : "Stopped",
                        active: isDetecting
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusChip,
                      {
                        label: "Gestures logged",
                        value: String(timedHistory.length),
                        active: timedHistory.length > 0
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      StatusChip,
                      {
                        label: "Last detected",
                        value: ((_a = timedHistory[0]) == null ? void 0 : _a.gesture) ?? "—",
                        active: !!timedHistory[0]
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Tips for best results" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: [
                    "Use good lighting on your hand",
                    "Keep hand centered in frame",
                    "Hold gestures steady for 2–3 seconds",
                    "Plain background works best"
                  ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-2 text-xs text-muted-foreground",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5", children: "•" }),
                        tip
                      ]
                    },
                    tip
                  )) })
                ] }) })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function StatusChip({
  label,
  value,
  active
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md bg-muted/40 px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60 mb-0.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `text-xs font-bold font-mono ${active ? "text-primary" : "text-muted-foreground"}`,
        children: value
      }
    )
  ] });
}
export {
  DetectPage as default
};
