use std::cmp::Ordering;

use regex::Regex;

pub fn encode(source: &str) -> String {
    let mut result = String::new();

    let mut last: Option<char> = None;
    let mut last_count = 0;
    for c in source.chars().chain("#".chars()) {
        if Some(c) == last {
            last_count += 1;
            continue;
        }

        match last_count.cmp(&1) {
            Ordering::Equal => result.push(last.unwrap()),
            Ordering::Greater => {
                result.push_str(&last_count.to_string());
                result.push(last.unwrap());
            }
            Ordering::Less => (),
        }

        last = Some(c);
        last_count = 1;
    }

    result
}

pub fn decode(source: &str) -> String {
    let mut result = String::new();

    let re = Regex::new(r"(\d*)([a-zA-Z]|\s)").unwrap();
    for cap in re.captures_iter(source) {
        if cap[1].is_empty() {
            result.push_str(&cap[2]);
        } else {
            (0..cap[1].parse::<u32>().unwrap()).for_each(|_| result.push_str(&cap[2]));
        }
    }

    result
}
