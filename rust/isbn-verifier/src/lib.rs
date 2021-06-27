pub fn is_valid_isbn(isbn: &str) -> bool {
    let mut count = 0;
    let result = isbn
        .chars()
        .filter(|&c| c != '-')
        .inspect(|x,| println!("{}", x))
        .map(|c| {
            count = count + 1;
            let mult = 11 - count as u32;
            match c {
                '0'..='9' if count <= 10 => c.to_digit(10).ok_or("Invalid ISBN").map(|x| x * mult),
                'X' if count == 10 => Ok(10 * mult),
                _ => Err("Invalid ISBN")
            }
        })
        .sum::<Result<u32, &str>>();

    match result {
        Ok(x) if count == 10 => x % 11 == 0,
        _ => false
    }
}
