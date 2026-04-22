import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Types "../types/progress";
import ProgressLib "../lib/progress";

mixin (profiles : Map.Map<Principal, Types.UserProfileInternal>) {

  /// Get or create the caller's profile. Safe to call on first login.
  public shared ({ caller }) func getOrCreateProfile() : async Types.UserProfile {
    if (caller.isAnonymous()) Runtime.trap("Anonymous callers not allowed");
    let profile = ProgressLib.getOrCreate(profiles, caller);
    profile.toPublic();
  };

  /// Get full progress for the authenticated caller.
  public shared query ({ caller }) func getProgress() : async ?Types.UserProfile {
    if (caller.isAnonymous()) return null;
    switch (profiles.get(caller)) {
      case (?profile) ?profile.toPublic();
      case null null;
    };
  };

  /// Mark a gesture as learned for the caller.
  /// category: "alphabet" | "number" | "common"
  /// gesture: e.g. "A", "1", "Hello"
  public shared ({ caller }) func markGestureLearned(category : Text, gesture : Text) : async Types.MarkResult {
    if (caller.isAnonymous()) return #err("Anonymous callers not allowed");
    if (gesture.size() == 0) return #err("Gesture cannot be empty");

    let cat : Types.GestureCategory = switch (category) {
      case "alphabet" #alphabet;
      case "number" #number;
      case "common" #common;
      case _ return #err("Invalid category: must be 'alphabet', 'number', or 'common'");
    };

    let profile = ProgressLib.getOrCreate(profiles, caller);
    let _ = profile.markLearned(cat, gesture);
    #ok(profile.toPublic());
  };

  /// Return top N users by total gestures learned.
  public shared query func getLeaderboardStats(limit : Nat) : async [Types.LeaderboardEntry] {
    ProgressLib.getLeaderboard(profiles, limit);
  };
};
