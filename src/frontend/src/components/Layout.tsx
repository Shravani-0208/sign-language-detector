import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  Crosshair,
  Dumbbell,
  Hand,
  LayoutDashboard,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Suspense } from "react";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useTheme } from "../hooks/use-theme";

const NAV_LINKS = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/detect", label: "Detect", icon: Crosshair },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/practice", label: "Practice", icon: Dumbbell },
];

function PageSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto w-full">
      <Skeleton className="h-12 w-64" />
      <Skeleton className="h-4 w-48" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {(["a", "b", "c", "d", "e", "f"] as const).map((id) => (
          <Skeleton key={id} className="h-32 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default function Layout() {
  const { isDark, toggleTheme, mounted } = useTheme();
  const { isAuthenticated, isInitializing, isLoggingIn, signIn, signOut } =
    useAuth();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentPath = location.pathname;
  const isAuthPage = currentPath === "/signin" || currentPath === "/signup";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              data-ocid="nav.logo_link"
            >
              <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Hand className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="text-foreground">SIGN</span>
                <span className="text-primary"> LINK</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            {isAuthenticated && !isAuthPage && (
              <nav
                className="hidden md:flex items-center gap-1"
                aria-label="Main navigation"
              >
                {NAV_LINKS.map(({ to, label, icon: Icon }) => {
                  const isActive = currentPath === to;
                  return (
                    <Link
                      key={to}
                      to={to}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                      data-ocid={`nav.${label.toLowerCase()}_link`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                  aria-label={
                    isDark ? "Switch to light mode" : "Switch to dark mode"
                  }
                  data-ocid="nav.theme_toggle"
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              {!isAuthPage && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={isAuthenticated ? signOut : signIn}
                  disabled={isInitializing || isLoggingIn}
                  data-ocid="nav.auth_button"
                  className="hidden md:flex"
                >
                  {isInitializing
                    ? "Loading..."
                    : isLoggingIn
                      ? "Signing in..."
                      : isAuthenticated
                        ? "Sign Out"
                        : "Sign In"}
                </Button>
              )}

              {/* Mobile menu toggle */}
              {isAuthenticated && !isAuthPage && (
                <button
                  type="button"
                  className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted transition-smooth"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label="Toggle menu"
                  data-ocid="nav.mobile_menu_toggle"
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && isAuthenticated && !isAuthPage && (
          <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ to, label, icon: Icon }) => {
              const isActive = currentPath === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  data-ocid={`nav.mobile_${label.toLowerCase()}_link`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                onClick={isAuthenticated ? signOut : signIn}
                disabled={isInitializing || isLoggingIn}
                className="w-full"
                data-ocid="nav.mobile_auth_button"
              >
                {isAuthenticated ? "Sign Out" : "Sign In"}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Hand className="w-3.5 h-3.5 text-primary" />
            <span>Sign Language Detector</span>
          </div>
          <span>
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
