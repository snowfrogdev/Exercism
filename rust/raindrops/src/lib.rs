pub fn raindrops(n: u32) -> String {
    let n_is_divisible_by = |divisor| n % divisor == 0;
    let mut result = String::new();

    if n_is_divisible_by(3) {
        result.push_str("Pling")
    };
    if n_is_divisible_by(5) {
        result.push_str("Plang")
    };
    if n_is_divisible_by(7) {
        result.push_str("Plong")
    };
    if result.is_empty() {
        result.push_str(&n.to_string())
    };

    result
}
