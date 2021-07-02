pub fn find<A: AsRef<[T]>, T: Ord>(array_like: A, key: T) -> Option<usize> {
    let array = array_like.as_ref();
    let mid = array.len() / 2;
    match key.cmp(array.get(mid)?) {
        std::cmp::Ordering::Less => find(&array[0..mid], key),
        std::cmp::Ordering::Equal => Some(mid),
        std::cmp::Ordering::Greater => {
            find(&array[mid + 1..], key).map(|i| mid + 1 + i)
        }
    }
}
