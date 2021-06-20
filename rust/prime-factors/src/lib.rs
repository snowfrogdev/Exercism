pub fn factors(mut n: u64) -> Vec<u64> {
    let mut prime_factors = Vec::<u64>::new();
    while n % 2 == 0 {
        prime_factors.push(2);
        n /= 2;
    }

    for i in (3..=(n as f64).sqrt() as u64).step_by(2) {
        while n % i == 0 {
            prime_factors.push(i);
            n /= i;
        }
    }

    if n > 2 { prime_factors.push(n) }

    prime_factors
}
