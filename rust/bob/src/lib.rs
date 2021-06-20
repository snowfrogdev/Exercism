pub fn reply(message: &str) -> &str {
    match message {
        m if is_question(m) && is_shouting(m) => "Calm down, I know what I'm doing!",
        m if is_question(m) => "Sure.",
        m if m.trim().is_empty() => "Fine. Be that way!",
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

fn is_question(message: &str) -> bool {
    message.trim_end().ends_with('?')
}
