import Common "common";

module {
  public type UserId = Common.UserId;
  public type Timestamp = Common.Timestamp;
  public type GestureCategory = Common.GestureCategory;

  /// Internal representation — uses Set for O(log n) lookups.
  /// Not shared across canister boundary (contains Set).
  public type UserProfileInternal = {
    id : UserId;
    var displayName : Text;
    var learnedAlphabets : [Text];
    var learnedNumbers : [Text];
    var learnedCommonGestures : [Text];
    var totalGesturesLearned : Nat;
    var lastActiveAt : Timestamp;
    createdAt : Timestamp;
  };

  /// Shared public type returned to callers.
  public type UserProfile = {
    id : UserId;
    displayName : Text;
    learnedAlphabets : [Text];
    learnedNumbers : [Text];
    learnedCommonGestures : [Text];
    totalGesturesLearned : Nat;
    lastActiveAt : Timestamp;
    createdAt : Timestamp;
  };

  /// Leaderboard stats — top learners by total gestures.
  public type LeaderboardEntry = {
    userId : UserId;
    displayName : Text;
    totalGesturesLearned : Nat;
  };

  /// Result returned by markGestureLearned.
  public type MarkResult = {
    #ok : UserProfile;
    #err : Text;
  };
};
