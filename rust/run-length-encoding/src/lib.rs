pub fn encode(source: &str) -> String {
    let mut result = String::new();

    let mut last: Option<char> = None;
    let mut last_count = 0;
    for c in source.chars().chain("#".chars()) {
        if Some(c) == last {
            last_count += 1;
            continue;
        }

        if last_count == 1 {
            result.push(last.unwrap());
        } else if last_count > 1 {
            result.push_str(&last_count.to_string());
            result.push(last.unwrap());
        }

        last = Some(c);
        last_count = 1;
    }

    result
}

pub fn decode(source: &str) -> String {
    unimplemented!("Return the run-length decoding of {}.", source);
}
