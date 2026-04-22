import Time "mo:core/Time";

module {
  public type UserId = Principal;
  public type Timestamp = Time.Time;

  public type GestureCategory = {
    #alphabet;
    #number;
    #common;
  };
};
