import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Types "types/progress";
import ProgressMixin "mixins/progress-api";

actor {
  let profiles = Map.empty<Principal, Types.UserProfileInternal>();

  include ProgressMixin(profiles);
};
