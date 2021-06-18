pub fn build_proverb(list: &[&str]) -> String {
    if list.is_empty() {
        return String::new();
    }
    let lines = build_lines(list, String::new());
    lines + &format!("And all for the want of a {}.", list[0])
}

fn build_lines(list: &[&str], proverb: String) -> String {
    if list.len() == 1 {
        return proverb;
    }

    let line = format!("For want of a {} the {} was lost.", list[0], list[1]);
    build_lines(&list[1..], proverb + &line + "\n")
}
