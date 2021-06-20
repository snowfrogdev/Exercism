use std::u32;

pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    (1..limit).filter(|i| i.is_multiple_of(factors)).sum()
}

trait MultipleOf {
    fn is_multiple_of(&self, factors: &[u32]) -> bool;
}

impl MultipleOf for u32 {
    fn is_multiple_of(&self, factors: &[u32]) -> bool {
        factors
            .iter()
            .filter(|&&i| i != 0)
            .any(|factor| self % factor == 0)
    }
}
