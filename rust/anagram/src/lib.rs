use itertools::Itertools;
use std::collections::HashSet;

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let word = word.to_lowercase();
    let sorted_word = sort(&word);

    possible_anagrams
        .iter()
        .filter(|candidate| {
            let candidate = candidate.to_lowercase();
            sort(&candidate) == sorted_word && candidate != word
        })
        .cloned()
        .collect()
}

fn sort(word: &str) -> Vec<char> {
    word.chars().sorted_unstable().collect_vec()
}
