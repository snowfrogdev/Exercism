use std::collections::HashMap;

pub fn brackets_are_balanced(string: &str) -> bool {
    let mut brackets_map = HashMap::new();
    brackets_map.insert('[', ']');
    brackets_map.insert('{', '}');
    brackets_map.insert('(', ')');

    let mut stack = Vec::<char>::new();
    
    let brackets = string
        .chars()
        .filter(|c| brackets_map.contains_key(c) || brackets_map.values().any(|v| c == v));
    for bracket in brackets {
        if brackets_map.contains_key(&bracket) {
            stack.push(bracket);
        } else {
            match brackets_map.get(&stack.pop().unwrap_or_default()) {
                Some(&x) => {
                    if x != bracket {
                        return false;
                    }
                }
                None => return false,
            }
        }
    }

    stack.is_empty()
}
