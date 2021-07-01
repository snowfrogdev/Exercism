pub fn primes_up_to(upper_bound: u64) -> Vec<u64> {
    let mut is_prime = vec![true; upper_bound as usize + 1];
    is_prime[0] = false;
    is_prime[1] = false;

    for i in 0..=f64::sqrt(upper_bound as f64) as usize {
        if is_prime[i] {
            let mut j = i * i;
            while j <= upper_bound as usize {
                is_prime[j] = false;
                j += i
            }
        }
    }

    is_prime
        .iter()
        .enumerate()
        .filter_map(|(i, is_prime)| is_prime.then(|| i as u64))
        .collect()
}
