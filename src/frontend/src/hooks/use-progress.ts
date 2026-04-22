import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { MarkResult, UserProfile } from "../backend.d";

export function useGetProgress() {
  const { actor, isFetching: actorFetching } = useActor(createActor);

  const query = useQuery<UserProfile | null>({
    queryKey: ["progress"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getProgress();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
  };
}

export function useGetOrCreateProfile() {
  const { actor, isFetching: actorFetching } = useActor(createActor);

  return useQuery<UserProfile>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getOrCreateProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });
}

export function useMarkGestureLearned() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<MarkResult, Error, { category: string; gesture: string }>({
    mutationFn: async ({ category, gesture }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.markGestureLearned(category, gesture);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progress"] });
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}

export function useGetLeaderboard() {
  const { actor, isFetching: actorFetching } = useActor(createActor);

  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not available");
      return actor.getLeaderboardStats(BigInt(10));
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useProgress() {
  const { data: progress } = useGetProgress();

  const learnedAlphabets = progress?.learnedAlphabets ?? [];
  const learnedNumbers = progress?.learnedNumbers ?? [];
  const learnedCommonGestures = progress?.learnedCommonGestures ?? [];

  const isGestureLearned = (category: string, gesture: string): boolean => {
    if (category === "alphabet") return learnedAlphabets.includes(gesture);
    if (category === "number") return learnedNumbers.includes(gesture);
    if (category === "common") return learnedCommonGestures.includes(gesture);
    return false;
  };

  return {
    learnedAlphabets,
    learnedNumbers,
    learnedCommonGestures,
    isGestureLearned,
    totalLearned: Number(progress?.totalGesturesLearned ?? 0),
  };
}
