import { useCallback, useEffect, useRef, useState } from "react";

export interface GestureResult {
  gesture: string;
  confidence: number;
}

export interface UseGestureDetectionReturn {
  gesture: string | null;
  confidence: number;
  isDetecting: boolean;
  history: string[];
  startDetection: () => void;
  stopDetection: () => void;
  clearHistory: () => void;
}

// Simulated gesture detection using hand landmark simulation
// In production, this would integrate with MediaPipe Hands
const GESTURE_POOL = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "Hello",
  "Thank You",
  "Yes",
  "No",
];

function simulateGestureDetection(): GestureResult {
  const gesture = GESTURE_POOL[Math.floor(Math.random() * GESTURE_POOL.length)];
  const confidence = 70 + Math.random() * 30;
  return { gesture, confidence };
}

export function useGestureDetection(): UseGestureDetectionReturn {
  const [gesture, setGesture] = useState<string | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [isDetecting, setIsDetecting] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stableGestureRef = useRef<string | null>(null);
  const stableCountRef = useRef(0);

  const startDetection = useCallback(() => {
    setIsDetecting(true);
    stableCountRef.current = 0;
    stableGestureRef.current = null;

    intervalRef.current = setInterval(() => {
      const result = simulateGestureDetection();
      setGesture(result.gesture);
      setConfidence(result.confidence);

      // Stable gesture detection — require 3 consecutive same detections
      if (result.gesture === stableGestureRef.current) {
        stableCountRef.current += 1;
        if (stableCountRef.current === 3) {
          setHistory((prev) => {
            const next = [result.gesture, ...prev].slice(0, 20);
            return next;
          });
        }
      } else {
        stableGestureRef.current = result.gesture;
        stableCountRef.current = 1;
      }
    }, 800);
  }, []);

  const stopDetection = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsDetecting(false);
    setGesture(null);
    setConfidence(0);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return {
    gesture,
    confidence,
    isDetecting,
    history,
    startDetection,
    stopDetection,
    clearHistory,
  };
}
