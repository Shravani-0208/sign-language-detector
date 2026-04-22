import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertTriangle,
  Camera,
  CameraOff,
  Clock,
  Crosshair,
  Hand,
  Square,
  Trash2,
  Volume2,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useGestureDetection } from "../hooks/use-gesture-detection";

interface HistoryEntry {
  gesture: string;
  timestamp: Date;
  confidence: number;
}

export default function DetectPage() {
  return (
    <ProtectedRoute>
      <DetectContent />
    </ProtectedRoute>
  );
}

function DetectContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraLoading, setCameraLoading] = useState(false);
  const [timedHistory, setTimedHistory] = useState<HistoryEntry[]>([]);
  const prevGestureRef = useRef<string | null>(null);

  const {
    gesture,
    confidence,
    isDetecting,
    startDetection,
    stopDetection,
    clearHistory,
  } = useGestureDetection();

  // Track new gestures and add timestamps
  useEffect(() => {
    if (gesture && isDetecting && gesture !== prevGestureRef.current) {
      prevGestureRef.current = gesture;
      setTimedHistory((prev) => {
        const entry: HistoryEntry = {
          gesture,
          timestamp: new Date(),
          confidence,
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
          height: { ideal: 720 },
        },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setCameraActive(true);
    } catch {
      setCameraError(
        "Camera access denied. Please allow camera permissions and try again.",
      );
    } finally {
      setCameraLoading(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      for (const t of stream.getTracks()) t.stop();
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
    if (isDetecting) stopDetection();
  };

  useEffect(() => {
    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const confidenceBarColor =
    confidence >= 90
      ? "bg-primary"
      : confidence >= 70
        ? "bg-accent"
        : "bg-muted-foreground";

  const confidenceTextColor =
    confidence >= 90
      ? "text-primary"
      : confidence >= 70
        ? "text-accent"
        : "text-muted-foreground";

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6"
      data-ocid="detect.page"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold">
            Real-Time Detection
          </h1>
        </div>
        <p className="text-muted-foreground ml-[52px]">
          Point your camera at your hand to detect sign language gestures in
          real time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* === Left: Camera Panel (3 cols) === */}
        <motion.div
          className="lg:col-span-3 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card
            className={`overflow-hidden transition-all duration-500 ${
              isDetecting && cameraActive
                ? "ring-2 ring-primary shadow-[0_0_32px_oklch(var(--primary)/0.35)]"
                : "ring-1 ring-border"
            }`}
            data-ocid="detect.camera_panel"
          >
            <CardContent className="p-0">
              {/* Video area */}
              <div
                className="relative w-full bg-muted/30"
                style={{ aspectRatio: "16/9", minHeight: 260 }}
              >
                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${cameraActive ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                  playsInline
                  muted
                />
                <canvas ref={canvasRef} className="hidden" />

                {/* Empty / Error / Loading state overlays */}
                {!cameraActive && !cameraLoading && !cameraError && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground"
                    data-ocid="detect.camera.empty_state"
                  >
                    <div className="relative">
                      <Camera className="w-16 h-16 opacity-20" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium opacity-60">
                        Camera is off
                      </p>
                      <p className="text-xs opacity-40 mt-1">
                        Click &quot;Start Camera&quot; below to begin
                      </p>
                    </div>
                  </div>
                )}

                {cameraLoading && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    data-ocid="detect.camera.loading_state"
                  >
                    <Skeleton className="w-16 h-16 rounded-full" />
                    <div className="space-y-1 text-center">
                      <Skeleton className="h-3 w-40 mx-auto" />
                      <Skeleton className="h-3 w-28 mx-auto" />
                    </div>
                  </div>
                )}

                {cameraError && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center"
                    data-ocid="detect.camera.error_state"
                  >
                    <AlertTriangle className="w-10 h-10 text-destructive" />
                    <p className="text-sm text-destructive">{cameraError}</p>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={startCamera}
                    >
                      Try Again
                    </Button>
                  </div>
                )}

                {/* Detecting badge */}
                <AnimatePresence>
                  {cameraActive && isDetecting && (
                    <motion.div
                      className="absolute top-3 left-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Badge className="bg-primary/90 text-primary-foreground gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                        Live
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hand position guide when detecting but no gesture */}
                <AnimatePresence>
                  {cameraActive && isDetecting && !gesture && (
                    <motion.div
                      className="absolute bottom-4 left-0 right-0 flex justify-center"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                    >
                      <div className="bg-background/70 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-muted-foreground border border-border/40">
                        <Hand className="w-4 h-4" />
                        Position your hand in front of the camera
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 p-3 border-t border-border bg-card">
                {!cameraActive ? (
                  <Button
                    type="button"
                    size="sm"
                    onClick={startCamera}
                    disabled={cameraLoading}
                    className="gap-1.5 flex-1"
                    data-ocid="detect.start_camera_button"
                  >
                    <Camera className="w-4 h-4" />
                    {cameraLoading ? "Starting..." : "Start Camera"}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={stopCamera}
                    className="gap-1.5 flex-1"
                    data-ocid="detect.stop_camera_button"
                  >
                    <CameraOff className="w-4 h-4" /> Stop Camera
                  </Button>
                )}

                <Button
                  type="button"
                  size="sm"
                  onClick={handleToggleDetection}
                  disabled={!cameraActive}
                  className={`gap-1.5 flex-1 transition-all duration-300 ${
                    isDetecting
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground border-0"
                      : ""
                  }`}
                  variant={isDetecting ? "default" : "secondary"}
                  data-ocid="detect.toggle_detection_button"
                >
                  {isDetecting ? (
                    <>
                      <Square className="w-4 h-4 fill-current" /> Stop Detecting
                    </>
                  ) : (
                    <>
                      <Crosshair className="w-4 h-4" /> Start Detecting
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* History */}
          <Card data-ocid="detect.history_panel">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm font-semibold">Detection History</p>
                  {timedHistory.length > 0 && (
                    <Badge variant="secondary" className="text-xs h-5 px-1.5">
                      {timedHistory.length}
                    </Badge>
                  )}
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  onClick={handleClearHistory}
                  className="h-7 px-2 text-xs gap-1 text-muted-foreground hover:text-destructive"
                  data-ocid="detect.clear_history_button"
                >
                  <Trash2 className="w-3 h-3" /> Clear
                </Button>
              </div>

              {timedHistory.length === 0 ? (
                <p
                  className="text-sm text-muted-foreground/50 italic py-2"
                  data-ocid="detect.history.empty_state"
                >
                  Detected gestures will appear here once you start detecting...
                </p>
              ) : (
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {timedHistory.map((entry, i) => (
                    <motion.div
                      key={`${entry.gesture}-${entry.timestamp.getTime()}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-between rounded-md px-2.5 py-1.5 bg-muted/40 hover:bg-muted/60 transition-colors"
                      data-ocid={`detect.history.item.${i + 1}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-primary text-sm">
                          {entry.gesture}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {entry.confidence.toFixed(0)}%
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground/60 font-mono">
                        {formatTime(entry.timestamp)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* === Right: Results Panel (2 cols) === */}
        <motion.div
          className="lg:col-span-2 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* Current Gesture */}
          <Card
            className={`transition-all duration-500 ${
              gesture && isDetecting
                ? "ring-2 ring-primary/70 shadow-[0_0_24px_oklch(var(--primary)/0.25)]"
                : ""
            }`}
            data-ocid="detect.results_panel"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Detected Gesture
                </p>
                {gesture && isDetecting && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={handleVoiceOutput}
                    className="h-7 w-7 p-0 text-muted-foreground hover:text-primary"
                    aria-label="Speak detected gesture"
                    data-ocid="detect.voice_button"
                  >
                    <Volume2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {gesture && isDetecting ? (
                  <motion.div
                    key={gesture}
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {/* Big gesture text with glow */}
                    <div
                      className="font-display font-bold text-primary leading-none mb-4"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 5.5rem)",
                        textShadow: "0 0 40px oklch(var(--primary) / 0.6)",
                      }}
                    >
                      {gesture}
                    </div>

                    {/* Confidence bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground font-medium">
                          Confidence
                        </span>
                        <span
                          className={`font-bold font-mono ${confidenceTextColor}`}
                        >
                          {confidence.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${confidenceBarColor}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${confidence}%` }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {confidence >= 90
                          ? "Very high confidence"
                          : confidence >= 70
                            ? "Good confidence"
                            : "Low confidence — try adjusting hand position"}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-8 gap-3 text-center"
                    data-ocid="detect.gesture.empty_state"
                  >
                    <Hand className="w-12 h-12 text-muted-foreground/20" />
                    <div>
                      <p className="text-sm text-muted-foreground/60 font-medium">
                        {isDetecting
                          ? "Position your hand in front of the camera"
                          : "Start detecting to see results"}
                      </p>
                      {!isDetecting && (
                        <p className="text-xs text-muted-foreground/40 mt-1">
                          Enable detection using the button below
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Status info card */}
          <Card className="bg-muted/20">
            <CardContent className="p-4 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Status
              </p>

              <div className="grid grid-cols-2 gap-2">
                <StatusChip
                  label="Camera"
                  value={cameraActive ? "Active" : "Off"}
                  active={cameraActive}
                />
                <StatusChip
                  label="Detection"
                  value={isDetecting ? "Running" : "Stopped"}
                  active={isDetecting}
                />
                <StatusChip
                  label="Gestures logged"
                  value={String(timedHistory.length)}
                  active={timedHistory.length > 0}
                />
                <StatusChip
                  label="Last detected"
                  value={timedHistory[0]?.gesture ?? "—"}
                  active={!!timedHistory[0]}
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick tips */}
          <Card className="border-border/50">
            <CardContent className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Tips for best results
              </p>
              <ul className="space-y-1.5">
                {[
                  "Use good lighting on your hand",
                  "Keep hand centered in frame",
                  "Hold gestures steady for 2–3 seconds",
                  "Plain background works best",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function StatusChip({
  label,
  value,
  active,
}: { label: string; value: string; active: boolean }) {
  return (
    <div className="rounded-md bg-muted/40 px-3 py-2">
      <p className="text-xs text-muted-foreground/60 mb-0.5">{label}</p>
      <p
        className={`text-xs font-bold font-mono ${active ? "text-primary" : "text-muted-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
}
