use std::cmp;

#[derive(Debug, PartialEq, Eq)]
pub enum Classification {
    Abundant,
    Perfect,
    Deficient,
}

pub fn classify(num: u64) -> Option<Classification> {
    if num == 0 {
        return None;
    }

    let sum: u64 = factors(num).iter().filter(|&&n| n != num).sum();

    match sum.cmp(&num) {
        cmp::Ordering::Equal => Some(Classification::Perfect),
        cmp::Ordering::Greater => Some(Classification::Abundant),
        cmp::Ordering::Less => Some(Classification::Deficient),
    }
}

fn factors(n: u64) -> Vec<u64> {
    let mut factors = vec![1];
    let mut i = 2;
    while i * i <= n {
        if n % i == 0 {
            factors.push(i);
            if i * i != n {
                factors.push(n / i);
            }
        }
        i += 1;
    }

    factors
}

