#[derive(Debug, PartialEq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(first_list: &[T], second_list: &[T]) -> Comparison {
    match first_list.len() {
        len if len == second_list.len() && first_list.iter().eq(second_list.iter()) => Comparison::Equal,
        len if len > second_list.len() && second_list.is_sublist_of(first_list) => Comparison::Superlist,
        _ if first_list.is_sublist_of(second_list) => Comparison::Sublist,
        _ => Comparison::Unequal
    }
}

trait Sublist<T: PartialEq> {
    fn is_sublist_of(&self, other: &[T]) -> bool;
}

impl<T: PartialEq> Sublist<T> for [T] {
    fn is_sublist_of(&self, other: &[T]) -> bool {
        self.is_empty() || other.windows(self.len()).any(|window| window == self)
    }
}
