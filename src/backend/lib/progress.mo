import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Types "../types/progress";

module {
  public type UserProfileInternal = Types.UserProfileInternal;
  public type UserProfile = Types.UserProfile;
  public type LeaderboardEntry = Types.LeaderboardEntry;
  public type GestureCategory = Types.GestureCategory;

  /// Create a new user profile for a given principal.
  public func newProfile(id : Principal) : UserProfileInternal {
    let now = Time.now();
    {
      id;
      var displayName = id.toText();
      var learnedAlphabets = [];
      var learnedNumbers = [];
      var learnedCommonGestures = [];
      var totalGesturesLearned = 0;
      var lastActiveAt = now;
      createdAt = now;
    };
  };

  /// Convert internal profile to shared public type.
  public func toPublic(self : UserProfileInternal) : UserProfile {
    {
      id = self.id;
      displayName = self.displayName;
      learnedAlphabets = self.learnedAlphabets;
      learnedNumbers = self.learnedNumbers;
      learnedCommonGestures = self.learnedCommonGestures;
      totalGesturesLearned = self.totalGesturesLearned;
      lastActiveAt = self.lastActiveAt;
      createdAt = self.createdAt;
    };
  };

  /// Get or create a profile for the caller.
  public func getOrCreate(
    profiles : Map.Map<Principal, UserProfileInternal>,
    caller : Principal,
  ) : UserProfileInternal {
    switch (profiles.get(caller)) {
      case (?existing) existing;
      case null {
        let profile = newProfile(caller);
        profiles.add(caller, profile);
        profile;
      };
    };
  };

  /// Mark a gesture as learned in the given category.
  /// Returns false if already learned (no duplicate).
  public func markLearned(
    self : UserProfileInternal,
    category : GestureCategory,
    gesture : Text,
  ) : Bool {
    switch (category) {
      case (#alphabet) {
        if (self.learnedAlphabets.find(func(g : Text) : Bool { g == gesture }) != null) {
          return false;
        };
        self.learnedAlphabets := self.learnedAlphabets.concat([gesture]);
      };
      case (#number) {
        if (self.learnedNumbers.find(func(g : Text) : Bool { g == gesture }) != null) {
          return false;
        };
        self.learnedNumbers := self.learnedNumbers.concat([gesture]);
      };
      case (#common) {
        if (self.learnedCommonGestures.find(func(g : Text) : Bool { g == gesture }) != null) {
          return false;
        };
        self.learnedCommonGestures := self.learnedCommonGestures.concat([gesture]);
      };
    };
    self.totalGesturesLearned += 1;
    self.lastActiveAt := Time.now();
    true;
  };

  /// Get leaderboard stats sorted by totalGesturesLearned descending.
  public func getLeaderboard(
    profiles : Map.Map<Principal, UserProfileInternal>,
    limit : Nat,
  ) : [LeaderboardEntry] {
    let iter = profiles.entries().map(
      func((_, p)) : LeaderboardEntry {
        { userId = p.id; displayName = p.displayName; totalGesturesLearned = p.totalGesturesLearned }
      }
    );
    let entries : [LeaderboardEntry] = iter.toArray();

    let sorted = entries.sort(func(a : LeaderboardEntry, b : LeaderboardEntry) : { #less; #equal; #greater } {
      if (a.totalGesturesLearned > b.totalGesturesLearned) #less
      else if (a.totalGesturesLearned < b.totalGesturesLearned) #greater
      else #equal
    });

    if (limit >= sorted.size()) {
      sorted
    } else {
      sorted.sliceToArray(0, limit)
    };
  };
};
