#[derive(Debug, PartialEq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist<T: PartialEq>(first_list: &[T], second_list: &[T]) -> Comparison {
    match () {
        _ if first_list == second_list => Comparison::Equal,
        _ if first_list.is_sublist_of(second_list) => Comparison::Sublist,
        _ if first_list.is_superlist_of(second_list) => Comparison::Superlist,
        _ => Comparison::Unequal,
    }
}

trait Sublist<T: PartialEq> {
    fn is_sublist_of(&self, other: &[T]) -> bool;
    fn is_superlist_of(&self, other: &[T]) -> bool;
}

impl<T: PartialEq> Sublist<T> for [T] {
    fn is_sublist_of(&self, other: &[T]) -> bool {
        self.is_empty() || other.windows(self.len()).any(|window| window == self)
    }

    fn is_superlist_of(&self, other: &[T]) -> bool {
        self.len() > other.len() && other.is_sublist_of(self)
    }
}
