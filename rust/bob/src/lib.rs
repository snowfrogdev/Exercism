pub fn reply(message: &str) -> &str {
    match message.trim() {
        m if m.ends_with('?') && is_shouting(m) => "Calm down, I know what I'm doing!",
        m if m.ends_with('?') => "Sure.",
        m if m.is_empty() => "Fine. Be that way!",
        m if is_shouting(m) => "Whoa, chill out!",
        _ => "Whatever.",
    }
}

fn is_shouting(message: &str) -> bool {
    let letters = message
        .chars()
        .filter(|c| c.is_alphabetic())
        .collect::<String>();

    !letters.is_empty() && letters.chars().all(|c| c.is_uppercase())
}
