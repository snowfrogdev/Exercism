use std::fmt::{Debug, Display};

use chrono::{Duration, NaiveTime};

#[derive(Debug, PartialEq, Eq, PartialOrd, Ord)]
pub struct Clock {
    time: NaiveTime,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let time = hours * 60 + minutes;

        Clock {
            time: NaiveTime::from_hms(0, 0, 0) + Duration::minutes(time as i64),
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        unimplemented!("Add {} minutes to existing Clock time", minutes);
    }
}

impl Display for Clock {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.time.format("%H:%M").to_string())
    }
}
