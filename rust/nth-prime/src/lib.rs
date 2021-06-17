// Uses the sieve of Eratosthenes. The size of the list is determined by
// multiplying (n + 1) by 22. This heuristics is based on the fact that
// the n-th prime number approximately equals n ln n. This should work
// for n-th primes where n <= 203,280,221, though I would not advise
// using that as an input unless you're not in a hurry to get your result. 😉
pub fn nth(n: u32) -> u32 {
    let limit = ((n + 1).saturating_mul(22)) as usize;
    let mut is_prime = vec![true; limit + 1];
    is_prime[0] = false;
    is_prime[1] = false;

    let mut prime_count = 0;

    for i in 2..limit {
        if is_prime[i] {
            if prime_count == n {
                return i as u32;
            };

            let mut j = i * i;
            while j <= limit {
                is_prime[j] = false;
                j += i;
            }

            prime_count += 1;
        }
    }

    panic!("We should never get here.")
}
