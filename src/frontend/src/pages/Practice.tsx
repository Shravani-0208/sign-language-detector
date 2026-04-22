import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  Camera,
  CameraOff,
  ChevronLeft,
  ChevronRight,
  Flame,
  Shuffle,
  SkipForward,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useGestureDetection } from "../hooks/use-gesture-detection";
import { useMarkGestureLearned, useProgress } from "../hooks/use-progress";
import {
  ALPHABETS,
  COMMON_GESTURES,
  type GestureCategory,
  type GestureInfo,
  NUMBERS,
} from "../lib/gesture-data";

const CATEGORY_MAP: Record<GestureCategory, GestureInfo[]> = {
  alphabet: ALPHABETS,
  number: NUMBERS,
  common: COMMON_GESTURES,
};

const CATEGORY_LABELS: Record<GestureCategory, string> = {
  alphabet: "Alphabets",
  number: "Numbers",
  common: "Common Gestures",
};

const MATCHES_REQUIRED = 3;

export default function PracticePage() {
  return (
    <ProtectedRoute>
      <PracticeContent />
    </ProtectedRoute>
  );
}

function PracticeContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Camera state
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // Category & gesture navigation
  const [activeCategory, setActiveCategory] =
    useState<GestureCategory>("alphabet");
  const [gestureIndex, setGestureIndex] = useState(0);

  // Practice state
  const [matchCount, setMatchCount] = useState(0);
  const [feedbackState, setFeedbackState] = useState<
    "idle" | "match" | "try-again" | "learned"
  >("idle");
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Session stats
  const [streak, setStreak] = useState(0);
  const [sessionLearned, setSessionLearned] = useState(0);

  const gestures = CATEGORY_MAP[activeCategory];
  const currentGesture = gestures[gestureIndex];
  const totalInCategory = gestures.length;
  const progressPct = ((gestureIndex + 1) / totalInCategory) * 100;

  const { gesture, confidence, isDetecting, startDetection, stopDetection } =
    useGestureDetection();
  const { mutate: markLearned } = useMarkGestureLearned();
  const { isGestureLearned } = useProgress();
  const isCurrentLearned = isGestureLearned(
    activeCategory,
    currentGesture.label,
  );

  // Camera management
  const startCamera = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
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

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      for (const t of stream.getTracks()) t.stop();
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    stopDetection();
  }, [stopDetection]);

  useEffect(() => () => stopCamera(), [stopCamera]);

  // Reset match count when gesture changes
  const goToGesture = useCallback((index: number) => {
    setGestureIndex(index);
    setMatchCount(0);
    setFeedbackState("idle");
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
  }, []);

  const goNext = useCallback(() => {
    goToGesture((gestureIndex + 1) % totalInCategory);
  }, [gestureIndex, totalInCategory, goToGesture]);

  const goPrev = useCallback(() => {
    goToGesture((gestureIndex - 1 + totalInCategory) % totalInCategory);
  }, [gestureIndex, totalInCategory, goToGesture]);

  const goRandom = useCallback(() => {
    const randIdx = Math.floor(Math.random() * totalInCategory);
    goToGesture(
      randIdx === gestureIndex ? (randIdx + 1) % totalInCategory : randIdx,
    );
  }, [gestureIndex, totalInCategory, goToGesture]);

  const skipGesture = useCallback(() => {
    setStreak(0);
    toast.info(`Skipped "${currentGesture.label}"`, { duration: 2000 });
    goNext();
  }, [currentGesture.label, goNext]);

  // Gesture match detection
  useEffect(() => {
    if (!isDetecting || !gesture || feedbackState === "learned") return;
    // Debounce: don't re-process while showing feedback
    if (feedbackState === "match") return;

    const isMatch =
      gesture.toLowerCase() === currentGesture.label.toLowerCase() &&
      confidence >= 70;

    if (isMatch) {
      const newCount = matchCount + 1;
      setMatchCount(newCount);
      setStreak((s) => s + 1);

      if (newCount >= MATCHES_REQUIRED) {
        // Learned!
        setFeedbackState("learned");
        setSessionLearned((prev) => prev + 1);
        markLearned({
          category: activeCategory,
          gesture: currentGesture.label,
        });
        toast.success(`🎉 Gesture "${currentGesture.label}" Learned!`, {
          duration: 3000,
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
    goNext,
  ]);

  // Reset when switching category
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat as GestureCategory);
    setGestureIndex(0);
    setMatchCount(0);
    setFeedbackState("idle");
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
  };

  const matchProgress = (matchCount / MATCHES_REQUIRED) * 100;

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="practice.page"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 ring-1 ring-primary/20">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">Practice Mode</h1>
            <p className="text-muted-foreground text-sm">
              Match each gesture {MATCHES_REQUIRED}× to mark it as learned
            </p>
          </div>
        </div>

        {/* Session stats */}
        <div
          className="flex items-center gap-3"
          data-ocid="practice.stats_panel"
        >
          <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5">
            <Flame className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm font-bold text-accent">
              {streak}
            </span>
            <span className="text-xs text-muted-foreground">streak</span>
          </div>
          <div className="flex items-center gap-1.5 bg-card border border-border rounded-lg px-3 py-1.5">
            <Star className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm font-bold text-primary">
              {sessionLearned}
            </span>
            <span className="text-xs text-muted-foreground">learned</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs
        value={activeCategory}
        onValueChange={handleCategoryChange}
        data-ocid="practice.category_tabs"
      >
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="alphabet" data-ocid="practice.tab.alphabet">
            Alphabets
          </TabsTrigger>
          <TabsTrigger value="number" data-ocid="practice.tab.numbers">
            Numbers
          </TabsTrigger>
          <TabsTrigger value="common" data-ocid="practice.tab.common">
            Common
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Category progress */}
      <div className="space-y-1.5" data-ocid="practice.category_progress">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{CATEGORY_LABELS[activeCategory]}</span>
          <span>
            {gestureIndex + 1} / {totalInCategory}
          </span>
        </div>
        <Progress value={progressPct} className="h-1.5" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Target gesture + navigation */}
        <div className="space-y-4">
          {/* Target gesture card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${gestureIndex}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
            >
              <Card
                className={`relative overflow-hidden transition-smooth ${
                  feedbackState === "learned"
                    ? "border-primary glow-primary"
                    : feedbackState === "match"
                      ? "border-primary/60"
                      : ""
                }`}
                data-ocid="practice.target_card"
              >
                {/* Learned ribbon */}
                {isCurrentLearned && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs gap-1">
                      <Trophy className="w-3 h-3" /> Learned
                    </Badge>
                  </div>
                )}

                <CardContent className="p-6 text-center space-y-4">
                  {/* Gesture emoji + label */}
                  <motion.div
                    animate={
                      feedbackState === "learned"
                        ? { scale: [1, 1.15, 1], rotate: [0, -3, 3, 0] }
                        : feedbackState === "match"
                          ? { scale: [1, 1.08, 1] }
                          : { scale: 1 }
                    }
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-6xl mb-3 leading-none select-none">
                      {currentGesture.emoji}
                    </div>
                    <h2 className="font-display font-black text-7xl text-gradient-primary leading-none tracking-tight">
                      {currentGesture.label}
                    </h2>
                  </motion.div>

                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {currentGesture.description}
                  </p>

                  {/* Tip */}
                  <div className="bg-muted/40 rounded-lg px-4 py-2 inline-block">
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent font-semibold">Tip: </span>
                      {currentGesture.tip}
                    </p>
                  </div>

                  {/* Match progress dots */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    {Array.from(
                      { length: MATCHES_REQUIRED },
                      (_, i) => i + 1,
                    ).map((dotNum) => (
                      <motion.div
                        key={`match-dot-${dotNum}`}
                        animate={
                          dotNum <= matchCount ? { scale: [1, 1.3, 1] } : {}
                        }
                        transition={{ duration: 0.3 }}
                        className={`w-3 h-3 rounded-full border-2 transition-smooth ${
                          dotNum <= matchCount
                            ? "bg-primary border-primary"
                            : "bg-transparent border-border"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      {matchCount}/{MATCHES_REQUIRED} matches
                    </span>
                  </div>

                  {/* Match confirmation progress bar */}
                  <Progress
                    value={matchProgress}
                    className={`h-2 transition-smooth ${matchCount > 0 ? "opacity-100" : "opacity-40"}`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div
            className="flex items-center gap-2"
            data-ocid="practice.nav_controls"
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goPrev}
              className="gap-1"
              data-ocid="practice.prev_button"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goRandom}
              className="gap-1 flex-1"
              data-ocid="practice.random_button"
            >
              <Shuffle className="w-4 h-4" /> Random
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={skipGesture}
              className="gap-1"
              data-ocid="practice.skip_button"
            >
              <SkipForward className="w-4 h-4" /> Skip
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={goNext}
              className="gap-1"
              data-ocid="practice.next_button"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right: Camera + feedback */}
        <div className="space-y-4">
          {/* Camera panel */}
          <Card className="overflow-hidden" data-ocid="practice.camera_panel">
            <div className="relative w-full aspect-video bg-muted/30 flex items-center justify-center min-h-[260px]">
              <video
                ref={videoRef}
                className={`w-full h-full object-cover ${cameraActive ? "block" : "hidden"}`}
                playsInline
                muted
              />
              <canvas ref={canvasRef} className="hidden" />

              {!cameraActive && !cameraError && (
                <div
                  className="flex flex-col items-center gap-3 p-8 text-center text-muted-foreground"
                  data-ocid="practice.camera.empty_state"
                >
                  <Camera className="w-14 h-14 opacity-20" />
                  <p className="text-sm font-medium">
                    Enable camera to start practicing
                  </p>
                  <p className="text-xs opacity-60">
                    Allow camera access when prompted
                  </p>
                </div>
              )}

              {cameraError && (
                <div
                  className="flex flex-col items-center gap-3 text-destructive p-8 text-center"
                  data-ocid="practice.camera.error_state"
                >
                  <AlertTriangle className="w-8 h-8" />
                  <p className="text-sm">{cameraError}</p>
                </div>
              )}

              {/* Detection indicator when active */}
              {cameraActive && isDetecting && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-xs gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    Detecting
                  </Badge>
                </div>
              )}

              {/* Big feedback overlay */}
              <AnimatePresence>
                {feedbackState === "match" && (
                  <motion.div
                    key="match-overlay"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.1, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-primary/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-primary/40 success-pulse">
                      <p className="font-display font-black text-3xl text-primary">
                        ✓ Match!
                      </p>
                    </div>
                  </motion.div>
                )}

                {feedbackState === "try-again" && (
                  <motion.div
                    key="try-again-overlay"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-accent/15 backdrop-blur-sm rounded-2xl px-6 py-4 border border-accent/30">
                      <p className="font-display font-black text-2xl text-accent">
                        Try Again
                      </p>
                    </div>
                  </motion.div>
                )}

                {feedbackState === "learned" && (
                  <motion.div
                    key="learned-overlay"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.35, type: "spring", bounce: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="bg-primary/25 backdrop-blur-md rounded-2xl px-8 py-6 border border-primary/50 glow-primary text-center">
                      <div className="text-4xl mb-2">🎉</div>
                      <p className="font-display font-black text-3xl text-primary">
                        Gesture Learned!
                      </p>
                      <p className="text-primary/70 text-sm mt-1">
                        Moving to next gesture…
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Camera controls + detected gesture bar */}
            <div className="flex items-center gap-3 p-3 border-t border-border bg-card">
              <Button
                type="button"
                size="sm"
                variant={cameraActive ? "secondary" : "default"}
                onClick={cameraActive ? stopCamera : startCamera}
                className="gap-1.5 shrink-0"
                data-ocid={
                  cameraActive
                    ? "practice.stop_camera_button"
                    : "practice.start_camera_button"
                }
              >
                {cameraActive ? (
                  <>
                    <CameraOff className="w-4 h-4" /> Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="w-4 h-4" /> Start Camera
                  </>
                )}
              </Button>

              {isDetecting && gesture && (
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs text-muted-foreground shrink-0">
                    Seeing:
                  </span>
                  <Badge
                    variant="outline"
                    className="font-mono font-bold text-sm shrink-0"
                  >
                    {gesture}
                  </Badge>
                  <span
                    className={`text-xs font-mono font-bold shrink-0 ${
                      confidence >= 85
                        ? "text-primary"
                        : confidence >= 70
                          ? "text-accent"
                          : "text-muted-foreground"
                    }`}
                  >
                    {confidence.toFixed(0)}%
                  </span>
                </div>
              )}

              {cameraActive && !isDetecting && (
                <span className="text-xs text-muted-foreground">
                  Initializing detector…
                </span>
              )}
            </div>
          </Card>

          {/* Live feedback status card */}
          <AnimatePresence mode="wait">
            {!cameraActive && (
              <motion.div
                key="no-camera-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Card className="border-dashed" data-ocid="practice.hint_card">
                  <CardContent className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Start your camera to begin detecting gestures in real
                      time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {cameraActive && (
              <motion.div
                key="practice-hint"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Card
                  className={`transition-smooth ${
                    feedbackState === "learned"
                      ? "border-primary/40 bg-primary/5"
                      : feedbackState === "match"
                        ? "border-primary/30 bg-primary/5"
                        : feedbackState === "try-again"
                          ? "border-accent/30 bg-accent/5"
                          : ""
                  }`}
                  data-ocid="practice.feedback_card"
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div
                      className={`text-3xl transition-smooth ${feedbackState === "idle" ? "opacity-40" : "opacity-100"}`}
                    >
                      {feedbackState === "learned"
                        ? "🎉"
                        : feedbackState === "match"
                          ? "✅"
                          : feedbackState === "try-again"
                            ? "🟠"
                            : "👐"}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-display font-bold text-base transition-smooth ${
                          feedbackState === "learned"
                            ? "text-primary"
                            : feedbackState === "match"
                              ? "text-primary"
                              : feedbackState === "try-again"
                                ? "text-accent"
                                : "text-muted-foreground"
                        }`}
                      >
                        {feedbackState === "learned"
                          ? "Gesture Learned!"
                          : feedbackState === "match"
                            ? `Match! (${matchCount}/${MATCHES_REQUIRED})`
                            : feedbackState === "try-again"
                              ? "Try Again"
                              : `Show "${currentGesture.label}" to the camera`}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {feedbackState === "idle"
                          ? `Match ${MATCHES_REQUIRED} times to mark as learned`
                          : feedbackState === "try-again"
                            ? "Keep your hand steady and in frame"
                            : feedbackState === "match"
                              ? `${MATCHES_REQUIRED - matchCount} more to complete`
                              : "Progress saved! Auto-advancing…"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
