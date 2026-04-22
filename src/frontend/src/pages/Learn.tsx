import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  ChevronRight,
  Filter,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useMarkGestureLearned, useProgress } from "../hooks/use-progress";
import {
  ALPHABETS,
  COMMON_GESTURES,
  type GestureInfo,
  NUMBERS,
} from "../lib/gesture-data";

type FilterMode = "all" | "learned" | "unlearned";

export default function LearnPage() {
  return (
    <ProtectedRoute>
      <LearnContent />
    </ProtectedRoute>
  );
}

// ─── Gesture Detail Dialog ────────────────────────────────────────────────────

function GestureDialog({
  gesture,
  category,
  learned,
  open,
  onClose,
  onMark,
}: {
  gesture: GestureInfo | null;
  category: string;
  learned: boolean;
  open: boolean;
  onClose: () => void;
  onMark: (category: string, gesture: string) => void;
}) {
  const navigate = useNavigate();

  if (!gesture) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="max-w-md border-border bg-card"
        data-ocid="learn.gesture_dialog"
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-5xl leading-none"
              role="img"
              aria-label={gesture.label}
            >
              {gesture.emoji}
            </span>
            <div className="flex-1 min-w-0">
              <DialogTitle className="font-display text-4xl font-bold text-foreground">
                {gesture.label}
              </DialogTitle>
              {learned && (
                <Badge className="mt-1 bg-primary/20 text-primary border-primary/40 gap-1 text-xs">
                  <Check className="w-3 h-3" /> Learned
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Description */}
          <div className="rounded-xl bg-muted/60 p-4 space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              How to form this gesture
            </p>
            <p className="text-foreground leading-relaxed">
              {gesture.description}
            </p>
          </div>

          {/* Tip */}
          <div className="flex items-start gap-3 rounded-xl bg-accent/10 border border-accent/20 p-4">
            <Lightbulb className="w-4 h-4 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wider text-accent font-medium mb-0.5">
                Practice Tip
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {gesture.tip}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 pt-1">
            <Button
              type="button"
              className="w-full gap-2"
              onClick={() => {
                navigate({ to: "/practice" });
                onClose();
              }}
              data-ocid="learn.practice_button"
            >
              <Sparkles className="w-4 h-4" />
              Practice this gesture
              <ChevronRight className="w-4 h-4 ml-auto" />
            </Button>

            {!learned && (
              <Button
                type="button"
                variant="outline"
                className="w-full gap-2 border-primary/40 text-primary hover:bg-primary/10"
                onClick={() => {
                  onMark(category, gesture.label);
                  onClose();
                }}
                data-ocid="learn.mark_learned_button"
              >
                <Check className="w-4 h-4" />
                Mark as Learned
              </Button>
            )}

            <Button
              type="button"
              variant="ghost"
              className="w-full text-muted-foreground"
              onClick={onClose}
              data-ocid="learn.close_button"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Gesture Card ─────────────────────────────────────────────────────────────

function GestureCard({
  gesture,
  learned,
  index,
  onOpen,
}: {
  gesture: GestureInfo;
  learned: boolean;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.5) }}
    >
      <button
        type="button"
        className="w-full text-left h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        onClick={onOpen}
        data-ocid={`learn.gesture_card.${index + 1}`}
      >
        <Card
          className={[
            "card-hover h-full transition-smooth relative overflow-hidden",
            learned
              ? "border-primary/50 bg-primary/5 shadow-primary/10 shadow-md"
              : "border-border hover:border-primary/30",
          ].join(" ")}
        >
          {/* Glow strip for learned cards */}
          {learned && (
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
          )}

          <CardContent className="p-4 flex flex-col gap-2 h-full">
            <div className="flex items-start justify-between gap-2">
              <span
                className="text-3xl leading-none"
                role="img"
                aria-label={gesture.label}
              >
                {gesture.emoji}
              </span>
              {learned ? (
                <Badge className="bg-primary/20 text-primary border-primary/30 gap-1 text-xs shrink-0">
                  <Check className="w-3 h-3" /> Learned
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-muted-foreground text-xs shrink-0 border-border"
                >
                  New
                </Badge>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-display font-bold text-2xl leading-tight">
                {gesture.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">
                {gesture.description}
              </p>
            </div>

            <p className="text-xs text-accent font-medium flex items-center gap-1 mt-auto">
              <Lightbulb className="w-3 h-3 shrink-0" />
              <span className="truncate">{gesture.tip}</span>
            </p>
          </CardContent>
        </Card>
      </button>
    </motion.div>
  );
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────

function FilterBar({
  filter,
  onChange,
  total,
  learnedCount,
}: {
  filter: FilterMode;
  onChange: (f: FilterMode) => void;
  total: number;
  learnedCount: number;
}) {
  const filters: { value: FilterMode; label: string }[] = [
    { value: "all", label: "All" },
    { value: "learned", label: "Learned" },
    { value: "unlearned", label: "Unlearned" },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
      <div className="flex gap-1.5">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => onChange(f.value)}
            className={[
              "px-3 py-1 rounded-full text-xs font-medium transition-smooth border",
              filter === f.value
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground bg-transparent",
            ].join(" ")}
            data-ocid={`learn.filter.${f.value}`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="text-xs text-muted-foreground ml-auto">
        <span className="text-primary font-semibold">{learnedCount}</span>
        {" of "}
        <span className="font-medium text-foreground">{total}</span>
        {" learned"}
      </span>
    </div>
  );
}

// ─── Gesture Grid ─────────────────────────────────────────────────────────────

function GestureGrid({
  gestures,
  category,
  filter,
  isGestureLearned,
  onOpen,
}: {
  gestures: GestureInfo[];
  category: string;
  filter: FilterMode;
  isGestureLearned: (cat: string, g: string) => boolean;
  onOpen: (gesture: GestureInfo, category: string) => void;
}) {
  const filtered = gestures.filter((g) => {
    const learned = isGestureLearned(category, g.label);
    if (filter === "learned") return learned;
    if (filter === "unlearned") return !learned;
    return true;
  });

  if (filtered.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center gap-3"
        data-ocid="learn.empty_state"
      >
        <span className="text-5xl">🙌</span>
        <p className="text-muted-foreground text-sm">
          {filter === "learned"
            ? "You haven't learned any gestures here yet."
            : "You've learned all gestures in this section!"}
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => onOpen(gestures[0], category)}
          data-ocid="learn.empty_cta_button"
        >
          Start learning
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {filtered.map((g, i) => (
        <GestureCard
          key={g.label}
          gesture={g}
          learned={isGestureLearned(category, g.label)}
          index={i}
          onOpen={() => onOpen(g, category)}
        />
      ))}
    </div>
  );
}

// ─── Tab Header ───────────────────────────────────────────────────────────────

function TabHeader({
  title,
  learned,
  total,
}: {
  title: string;
  learned: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-display font-semibold text-lg text-foreground">
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-24 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <span className="text-xs text-muted-foreground tabular-nums">
          {pct}%
        </span>
      </div>
    </div>
  );
}

// ─── Main Content ─────────────────────────────────────────────────────────────

function LearnContent() {
  const {
    isGestureLearned,
    learnedAlphabets,
    learnedNumbers,
    learnedCommonGestures,
  } = useProgress();
  const { mutate: markLearned } = useMarkGestureLearned();

  const [activeTab, setActiveTab] = useState("alphabet");
  const [filter, setFilter] = useState<FilterMode>("all");
  const [dialogGesture, setDialogGesture] = useState<GestureInfo | null>(null);
  const [dialogCategory, setDialogCategory] = useState<string>("");

  const handleOpen = (gesture: GestureInfo, category: string) => {
    setDialogGesture(gesture);
    setDialogCategory(category);
  };

  const handleClose = () => {
    setDialogGesture(null);
    setDialogCategory("");
  };

  const handleMark = (category: string, gesture: string) => {
    markLearned(
      { category, gesture },
      {
        onSuccess: (result) => {
          if (result.__kind__ === "ok") {
            toast.success(`"${gesture}" marked as learned! 🎉`);
          } else {
            toast.error(result.err);
          }
        },
        onError: () => toast.error("Failed to save progress"),
      },
    );
  };

  const tabConfig = [
    {
      value: "alphabet",
      label: "Alphabets (A–Z)",
      shortLabel: "A–Z",
      gestures: ALPHABETS,
      category: "alphabet",
      learnedCount: learnedAlphabets.length,
    },
    {
      value: "number",
      label: "Numbers (0–9)",
      shortLabel: "0–9",
      gestures: NUMBERS,
      category: "number",
      learnedCount: learnedNumbers.length,
    },
    {
      value: "common",
      label: "Common Gestures",
      shortLabel: "Common",
      gestures: COMMON_GESTURES,
      category: "common",
      learnedCount: learnedCommonGestures.length,
    },
  ];

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6"
      data-ocid="learn.page"
    >
      {/* Page Header */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="p-2 rounded-xl bg-primary/10">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">Learning Library</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Tap any card to explore the gesture in detail
          </p>
        </div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        className="grid grid-cols-3 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {tabConfig.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setActiveTab(t.value)}
            className={[
              "rounded-xl border p-3 text-left transition-smooth",
              activeTab === t.value
                ? "border-primary/50 bg-primary/5"
                : "border-border bg-card hover:border-primary/25",
            ].join(" ")}
            data-ocid={`learn.stat.${t.value}`}
          >
            <p className="text-xs text-muted-foreground font-medium truncate">
              {t.shortLabel}
            </p>
            <p className="font-display font-bold text-xl text-foreground">
              <span className="text-primary">{t.learnedCount}</span>
              <span className="text-muted-foreground font-normal text-sm">
                /{t.gestures.length}
              </span>
            </p>
          </button>
        ))}
      </motion.div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => {
          setActiveTab(v);
          setFilter("all");
        }}
        data-ocid="learn.tabs"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="alphabet" data-ocid="learn.alphabet_tab">
              Alphabets
            </TabsTrigger>
            <TabsTrigger value="number" data-ocid="learn.numbers_tab">
              Numbers
            </TabsTrigger>
            <TabsTrigger value="common" data-ocid="learn.common_tab">
              Common
            </TabsTrigger>
          </TabsList>
        </div>

        {tabConfig.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="mt-5 space-y-4"
          >
            <TabHeader
              title={tab.label}
              learned={tab.learnedCount}
              total={tab.gestures.length}
            />

            <FilterBar
              filter={filter}
              onChange={setFilter}
              total={tab.gestures.length}
              learnedCount={tab.learnedCount}
            />

            <GestureGrid
              gestures={tab.gestures}
              category={tab.category}
              filter={filter}
              isGestureLearned={isGestureLearned}
              onOpen={handleOpen}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Detail Dialog */}
      <GestureDialog
        gesture={dialogGesture}
        category={dialogCategory}
        learned={
          dialogGesture
            ? isGestureLearned(dialogCategory, dialogGesture.label)
            : false
        }
        open={dialogGesture !== null}
        onClose={handleClose}
        onMark={handleMark}
      />
    </div>
  );
}
