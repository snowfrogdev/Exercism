#[derive(Debug, PartialEq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(first_list: &[T], second_list: &[T]) -> Comparison {
    if first_list.len() == second_list.len() {
        if first_list.iter().eq(second_list.iter()) { return Comparison::Equal }
        else { return Comparison::Unequal }
    }

    if first_list.len() > second_list.len() {
        if second_list.is_empty() || is_sublist(second_list, first_list,) { return Comparison::Superlist }
    }

    if first_list.is_empty() || is_sublist(first_list, second_list) { return Comparison::Sublist }

    

    Comparison::Unequal
}

fn is_sublist<T: PartialEq>(smaller_list: &[T], larger_list: &[T]) -> bool {
    larger_list
    .windows(smaller_list.len())
    .any(|window| window == smaller_list)
}

