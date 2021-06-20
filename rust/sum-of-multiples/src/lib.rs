use std::collections::HashSet;

pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    let mut multiples = HashSet::new();

    for factor in factors {
        let mut multiple = *factor;
        while multiple != 0 && multiple < limit {
            multiples.insert(multiple);
            multiple += factor;
        }
    }

    multiples.iter().sum()
}
