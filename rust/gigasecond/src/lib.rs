use chrono::{DateTime, Duration, Utc};

// Returns a Utc DateTime one billion seconds after start.
pub fn after(start: DateTime<Utc>) -> DateTime<Utc> {
    const GIGASECOND: i64 = i64::pow(10, 9);
    start + Duration::seconds(GIGASECOND)
}
