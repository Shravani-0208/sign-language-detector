import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQueryClient } from "@tanstack/react-query";

export function useAuth() {
  const {
    login,
    clear,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    identity,
  } = useInternetIdentity();
  const queryClient = useQueryClient();

  const signIn = () => {
    login();
  };

  const signOut = () => {
    clear();
    queryClient.clear();
  };

  return {
    identity,
    isAuthenticated,
    isInitializing,
    isLoggingIn,
    signIn,
    signOut,
  };
}
