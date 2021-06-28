use itertools::Itertools;

pub fn hamming_distance(s1: &str, s2: &str) -> Option<usize> {
    s1.chars()
        .zip_longest(s2.chars())
        .map(|x| match x {
            itertools::EitherOrBoth::Both(a, b) if a == b => Some(0),
            itertools::EitherOrBoth::Both(a, b) if a != b => Some(1),
            _ => None,
        })
        .sum::<Option<usize>>()
}
