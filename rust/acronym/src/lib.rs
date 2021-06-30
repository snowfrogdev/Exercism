use fancy_regex::Regex;

pub fn abbreviate(phrase: &str) -> String {
    let re = Regex::new(r"\b[A-Za-z](?<!'[A-Za-z])|[A-Z](?<![A-Z]{2})").unwrap();

    re.find_iter(phrase)
        .map(|x| x.unwrap().as_str().to_ascii_uppercase())
        .collect()
}
