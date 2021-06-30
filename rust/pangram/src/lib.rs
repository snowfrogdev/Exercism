use fancy_regex::Regex;
use lazy_static::lazy_static;

pub fn is_pangram(sentence: &str) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new(r"([a-z])(?!.*\1)").unwrap();
    }

    RE.find_iter(sentence.to_ascii_lowercase().as_str()).count() == 26
}
