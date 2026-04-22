import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Hand,
  Sparkles,
  Video,
} from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "../hooks/use-auth";

const FEATURES = [
  {
    icon: Video,
    title: "Real-time Detection",
    description:
      "Webcam-powered gesture recognition using AI hand-tracking. See your signs translated to text instantly.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: BookOpen,
    title: "Learn Signs",
    description:
      "Step-by-step guides for alphabets A–Z, numbers 0–9, and essential phrases like Hello, Thank You, and more.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: CheckCircle2,
    title: "Practice Mode",
    description:
      "Interactive sessions where the system validates your gestures and scores your accuracy in real time.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description:
      "Detailed progress tracking across all learning modules. Celebrate milestones and keep improving.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
];

const STATS = [
  { value: "26", label: "Alphabet Signs" },
  { value: "10", label: "Number Signs" },
  { value: "20+", label: "Common Phrases" },
  { value: "94%", label: "Avg. Accuracy" },
];

export default function WelcomePage() {
  const { isAuthenticated, signIn, isInitializing, isLoggingIn } = useAuth();

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      signIn();
    }
  };

  return (
    <div className="flex flex-col" data-ocid="welcome.page">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center justify-center bg-background">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--primary) / 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(var(--primary) / 0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge
              variant="secondary"
              className="gap-1.5 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              AI-Powered Sign Language Detection
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6"
          >
            {/* Logo mark */}
            <div className="flex justify-center mb-7">
              <div className="relative inline-flex">
                <div className="absolute inset-0 rounded-2xl glow-primary opacity-60" />
                <div className="relative inline-flex p-5 rounded-2xl bg-primary/10 border border-primary/30">
                  <Hand className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.1]">
              Sign Language{" "}
              <span className="text-gradient-primary">Detector</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Bridge the gap between sign language and the world — detect,
              learn, and practice ASL in real time using your webcam.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {isAuthenticated ? (
              <>
                <Button
                  asChild
                  size="lg"
                  className="gap-2 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth"
                  data-ocid="welcome.dashboard_button"
                >
                  <Link to="/dashboard">
                    Go to Dashboard <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 px-8 text-base"
                  data-ocid="welcome.detect_button"
                >
                  <Link to="/detect">
                    <Video className="w-4 h-4" /> Try Detection
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  size="lg"
                  className="gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth"
                  onClick={handleGetStarted}
                  disabled={isInitializing || isLoggingIn}
                  data-ocid="welcome.get_started_button"
                >
                  {isLoggingIn ? "Signing In…" : "Get Started"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 px-8 text-base border-border/60 hover:border-primary/50 transition-smooth"
                  data-ocid="welcome.learn_button"
                >
                  <Link to="/learn">Explore Learning</Link>
                </Button>
              </>
            )}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-3 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <span className="font-display text-2xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section
        className="py-24 bg-muted/30"
        data-ocid="welcome.features_section"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Master Sign Language
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete platform that combines AI-powered detection with
              structured learning and real-time feedback.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`card-hover h-full border ${feature.border} bg-card`}
                  data-ocid={`welcome.feature_card.${i + 1}`}
                >
                  <CardContent className="p-6 flex flex-col">
                    <div
                      className={`inline-flex self-start p-3 rounded-xl ${feature.bg} mb-5`}
                    >
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-background" data-ocid="welcome.how_section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to start communicating with sign language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign In",
                desc: "Create your account to unlock all learning modules and track your personal progress.",
              },
              {
                step: "02",
                title: "Learn & Practice",
                desc: "Browse the sign library, study each gesture, then enter practice mode to test yourself.",
              },
              {
                step: "03",
                title: "Detect Live",
                desc: "Open the detection page, allow webcam access, and sign — the AI translates in real time.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i === 1 ? 0 : i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
                data-ocid={`welcome.step.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-primary text-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-muted/30" data-ocid="welcome.cta_section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 rounded-2xl glow-primary opacity-50" />
              <div className="relative inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/30">
                <Hand className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Start Your Sign Language Journey Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join learners worldwide mastering ASL with the power of real-time
              AI detection. No experience needed.
            </p>

            {isAuthenticated ? (
              <Button
                asChild
                size="lg"
                className="gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth"
                data-ocid="welcome.cta_dashboard_button"
              >
                <Link to="/dashboard">
                  Open Dashboard <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            ) : (
              <Button
                type="button"
                size="lg"
                onClick={handleGetStarted}
                disabled={isInitializing || isLoggingIn}
                className="gap-2 px-10 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-smooth"
                data-ocid="welcome.cta_signup_button"
              >
                {isLoggingIn ? "Signing In…" : "Get Started — It's Free"}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
