import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  Fingerprint,
  Hand,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useAuth } from "../hooks/use-auth";

const benefits = [
  {
    icon: Zap,
    title: "Real-time detection",
    desc: "Instant gesture recognition powered by MediaPipe",
  },
  {
    icon: BookOpen,
    title: "Full sign library",
    desc: "A–Z alphabets, numbers 0–9, and common phrases",
  },
  {
    icon: Target,
    title: "Practice & track",
    desc: "Interactive sessions with accuracy scores",
  },
];

export default function SignUpPage() {
  const { signIn, isInitializing, isLoggingIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen px-4 bg-background bg-grid overflow-hidden"
      data-ocid="signup.page"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="w-full max-w-md z-10"
      >
        <Card className="bg-card/80 backdrop-blur-sm border-border/60 shadow-2xl shadow-background/50">
          <CardHeader className="text-center pb-2 pt-8 px-8">
            {/* Logo */}
            <motion.div
              className="inline-flex justify-center mb-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: "backOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-lg" />
                <div className="relative p-4 rounded-2xl bg-primary/10 border border-primary/30 glow-primary">
                  <Hand className="w-9 h-9 text-primary" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="font-display font-bold text-2xl text-foreground">
                  SIGN
                </span>
                <span className="font-display font-bold text-2xl text-primary">
                  LINK
                </span>
              </div>
              <h1 className="font-display text-xl font-semibold text-foreground mt-3">
                Create Account
              </h1>
              <p className="text-muted-foreground text-sm mt-1.5">
                Join Sign Link and start learning sign language today
              </p>
            </motion.div>
          </CardHeader>

          <CardContent className="px-8 pb-8 pt-5 space-y-5">
            {/* Benefits list */}
            <motion.div
              className="space-y-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 border border-border/40"
                >
                  <div className="p-1.5 rounded-md bg-primary/10 shrink-0">
                    <benefit.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground leading-none mb-0.5">
                      {benefit.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.4 }}
              className="space-y-3"
            >
              <Button
                type="button"
                className="w-full gap-2.5 h-12 text-base font-semibold font-display glow-primary transition-smooth"
                size="lg"
                onClick={signIn}
                disabled={isInitializing || isLoggingIn}
                data-ocid="signup.submit_button"
              >
                <Fingerprint className="w-5 h-5" />
                {isInitializing
                  ? "Initializing..."
                  : isLoggingIn
                    ? "Opening Identity…"
                    : "Create Account with Internet Identity"}
              </Button>

              {(isInitializing || isLoggingIn) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-xs text-muted-foreground"
                  data-ocid="signup.loading_state"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Connecting to Internet Identity…
                </motion.div>
              )}
            </motion.div>

            {/* Trust note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="rounded-lg bg-muted/40 border border-border/40 p-3 flex gap-2.5"
            >
              <ShieldCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Uses Internet Identity — a secure, decentralized login with no
                passwords, no email required.
              </p>
            </motion.div>

            {/* Switch link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-center text-sm text-muted-foreground"
            >
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-primary/80 font-medium hover:underline transition-smooth"
                data-ocid="signup.signin_link"
              >
                Sign In
              </Link>
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
