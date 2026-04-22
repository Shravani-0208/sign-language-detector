import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type UserId = Principal;
export type Timestamp = bigint;
export interface LeaderboardEntry {
    totalGesturesLearned: bigint;
    displayName: string;
    userId: UserId;
}
export interface UserProfile {
    id: UserId;
    totalGesturesLearned: bigint;
    displayName: string;
    lastActiveAt: Timestamp;
    createdAt: Timestamp;
    learnedAlphabets: Array<string>;
    learnedNumbers: Array<string>;
    learnedCommonGestures: Array<string>;
}
export type MarkResult = {
    __kind__: "ok";
    ok: UserProfile;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    getLeaderboardStats(limit: bigint): Promise<Array<LeaderboardEntry>>;
    getOrCreateProfile(): Promise<UserProfile>;
    getProgress(): Promise<UserProfile | null>;
    markGestureLearned(category: string, gesture: string): Promise<MarkResult>;
}
