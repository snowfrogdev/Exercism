pub fn check(candidate: &str) -> bool {
    let mut letters: Vec<char> = candidate
        .to_lowercase()
        .chars()
        .filter(|char| char.is_alphabetic())
        .collect();
    letters.sort_unstable();
    let char_count = letters.len();
    letters.dedup();
    letters.len() == char_count
}
