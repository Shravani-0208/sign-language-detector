import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronRight,
  Crosshair,
  Dumbbell,
  Hand,
  Hash,
  Lightbulb,
  Star,
  TrendingUp,
  Trophy,
  Type,
} from "lucide-react";
import { motion } from "motion/react";
import { ProtectedRoute } from "../components/ProtectedRoute";
import {
  useGetLeaderboard,
  useGetOrCreateProfile,
  useProgress,
} from "../hooks/use-progress";
import { ALPHABETS, COMMON_GESTURES, NUMBERS } from "../lib/gesture-data";

const QUICK_ACTIONS = [
  {
    to: "/detect",
    label: "Start Detection",
    icon: Crosshair,
    colorClass: "text-primary",
    bgClass: "bg-primary/10 border-primary/20",
    description: "Open webcam and detect signs in real time",
    badge: "Live",
  },
  {
    to: "/learn",
    label: "Learn Signs",
    icon: BookOpen,
    colorClass: "text-accent",
    bgClass: "bg-accent/10 border-accent/20",
    description: "Browse alphabets, numbers and common phrases",
    badge: "44 signs",
  },
  {
    to: "/practice",
    label: "Practice Mode",
    icon: Dumbbell,
    colorClass: "text-primary",
    bgClass: "bg-primary/10 border-primary/20",
    description: "Test your signing with live feedback and scoring",
    badge: "Interactive",
  },
] as const;

function ProgressBar({
  value,
  max,
  colorClass = "bg-primary",
}: {
  value: number;
  max: number;
  colorClass?: string;
}) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${colorClass}`}
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  learned: number;
  total: number;
  colorClass: string;
  barColor: string;
  delay: number;
  ocid: string;
}

function StatCard({
  icon: Icon,
  label,
  learned,
  total,
  colorClass,
  barColor,
  delay,
  ocid,
}: StatCardProps) {
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      data-ocid={ocid}
    >
      <Card className="h-full">
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div
              className={`p-2 rounded-lg ${colorClass.replace("text-", "bg-")}/10`}
            >
              <Icon className={`w-4 h-4 ${colorClass}`} />
            </div>
            <Badge variant="secondary" className="text-xs font-mono">
              {pct}%
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {label}
          </p>
          <div className="flex items-baseline gap-1 mb-2">
            <span className={`font-display text-3xl font-bold ${colorClass}`}>
              {learned}
            </span>
            <span className="text-muted-foreground text-sm">/ {total}</span>
          </div>
          <ProgressBar value={learned} max={total} colorClass={barColor} />
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface NextGestureCardProps {
  category: string;
  gesture: { label: string; emoji: string; description: string } | undefined;
  delay: number;
  ocid: string;
}

function NextGestureCard({
  category,
  gesture,
  delay,
  ocid,
}: NextGestureCardProps) {
  if (!gesture) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        data-ocid={ocid}
      >
        <Card className="h-full border-accent/20 bg-accent/5">
          <CardContent className="p-4 flex items-center gap-3">
            <span className="text-2xl">🎉</span>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {category}
              </p>
              <p className="text-sm font-semibold text-accent">All learned!</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      data-ocid={ocid}
    >
      <Card className="h-full border-accent/20 bg-accent/5">
        <CardContent className="p-4 flex items-center gap-3">
          <span className="text-2xl">{gesture.emoji}</span>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
            <p className="text-sm font-semibold text-accent">{gesture.label}</p>
            <p className="text-xs text-muted-foreground truncate">
              {gesture.description}
            </p>
          </div>
          <Link to="/learn">
            <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { data: profile, isLoading } = useGetOrCreateProfile();
  const { data: leaderboard, isLoading: lbLoading } = useGetLeaderboard();
  const { learnedAlphabets, learnedNumbers, learnedCommonGestures } =
    useProgress();

  const totalLearned = Number(profile?.totalGesturesLearned ?? 0);
  const TOTAL_ALL = ALPHABETS.length + NUMBERS.length + COMMON_GESTURES.length;
  const overallPct =
    TOTAL_ALL > 0 ? Math.round((totalLearned / TOTAL_ALL) * 100) : 0;

  // Next unlearned gesture per category
  const nextAlphabet = ALPHABETS.find(
    (g) => !learnedAlphabets.includes(g.label),
  );
  const nextNumber = NUMBERS.find((g) => !learnedNumbers.includes(g.label));
  const nextGesture = COMMON_GESTURES.find(
    (g) => !learnedCommonGestures.includes(g.label),
  );

  return (
    <div
      className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8"
      data-ocid="dashboard.page"
    >
      {/* Welcome + Total */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            Welcome back
            {profile?.displayName ? (
              <span className="text-gradient-primary">
                , {profile.displayName}
              </span>
            ) : (
              ""
            )}
            !
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Track your sign language progress and keep practicing.
          </p>
        </div>

        {/* Total Learned Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-3 bg-primary/10 border border-primary/25 rounded-2xl px-5 py-3 self-start"
          data-ocid="dashboard.total_learned_card"
        >
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-primary leading-none">
              {isLoading ? "—" : totalLearned}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              of {TOTAL_ALL} learned
            </p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-primary leading-none">
              {isLoading ? "—" : `${overallPct}%`}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">complete</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Category Progress Stats */}
      <section data-ocid="dashboard.stats_section">
        <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          Progress by Category
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              icon={Type}
              label="Alphabets Learned"
              learned={learnedAlphabets.length}
              total={ALPHABETS.length}
              colorClass="text-primary"
              barColor="bg-primary"
              delay={0.1}
              ocid="dashboard.alphabets_card"
            />
            <StatCard
              icon={Hash}
              label="Numbers Learned"
              learned={learnedNumbers.length}
              total={NUMBERS.length}
              colorClass="text-primary"
              barColor="bg-primary"
              delay={0.2}
              ocid="dashboard.numbers_card"
            />
            <StatCard
              icon={Hand}
              label="Common Gestures"
              learned={learnedCommonGestures.length}
              total={COMMON_GESTURES.length}
              colorClass="text-accent"
              barColor="bg-accent"
              delay={0.3}
              ocid="dashboard.gestures_card"
            />
          </div>
        )}
      </section>

      {/* Next Recommended */}
      <section data-ocid="dashboard.recommended_section">
        <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-accent" />
          Next to Learn
          <Badge
            variant="outline"
            className="text-accent border-accent/40 text-xs ml-1"
          >
            Recommended
          </Badge>
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <NextGestureCard
              category="Alphabet"
              gesture={nextAlphabet}
              delay={0.1}
              ocid="dashboard.next_alphabet_card"
            />
            <NextGestureCard
              category="Number"
              gesture={nextNumber}
              delay={0.2}
              ocid="dashboard.next_number_card"
            />
            <NextGestureCard
              category="Common Gesture"
              gesture={nextGesture}
              delay={0.3}
              ocid="dashboard.next_gesture_card"
            />
          </div>
        )}
      </section>

      {/* Quick Actions */}
      <section data-ocid="dashboard.quick_actions_section">
        <h2 className="font-display text-lg font-semibold mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {QUICK_ACTIONS.map((action, i) => (
            <motion.div
              key={action.to}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              data-ocid={`dashboard.quick_action.${i + 1}`}
            >
              <Link to={action.to} className="block h-full">
                <Card className={`card-hover h-full border ${action.bgClass}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2.5 rounded-xl ${action.bgClass}`}>
                        <action.icon
                          className={`w-5 h-5 ${action.colorClass}`}
                        />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {action.badge}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-1">{action.label}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {action.description}
                    </p>
                    <div
                      className={`flex items-center gap-1 mt-3 text-xs font-medium ${action.colorClass}`}
                    >
                      Open <ChevronRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section data-ocid="dashboard.leaderboard_section">
        <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
          <Trophy className="w-4 h-4 text-accent" />
          Leaderboard
        </h2>
        <Card>
          <CardContent className="p-0">
            {lbLoading ? (
              <div
                className="p-4 space-y-3"
                data-ocid="dashboard.leaderboard.loading_state"
              >
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-10 w-full rounded-lg" />
                ))}
              </div>
            ) : !leaderboard || leaderboard.length === 0 ? (
              <div
                className="p-8 text-center text-muted-foreground"
                data-ocid="dashboard.leaderboard.empty_state"
              >
                <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm font-medium">No rankings yet</p>
                <p className="text-xs mt-1 opacity-70">
                  Start learning signs to appear on the board!
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-4"
                  data-ocid="dashboard.leaderboard.start_button"
                >
                  <Link to="/learn">Start Learning</Link>
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {leaderboard.slice(0, 5).map((entry, i) => (
                  <motion.div
                    key={entry.userId.toString()}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center gap-3 px-4 py-3"
                    data-ocid={`dashboard.leaderboard.item.${i + 1}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        i === 0
                          ? "bg-accent/20 text-accent ring-1 ring-accent/40"
                          : i === 1
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i === 0 ? <Star className="w-3.5 h-3.5" /> : i + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium truncate min-w-0">
                      {entry.displayName || "Anonymous"}
                    </span>
                    <Badge
                      variant={i === 0 ? "default" : "secondary"}
                      className="text-xs font-mono shrink-0"
                    >
                      {Number(entry.totalGesturesLearned)} signs
                    </Badge>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
