pub fn is_valid_isbn(isbn: &str) -> bool {
    isbn.chars()
        .filter(|&c| c != '-')
        .fold((0i32, 10i32, true), |(sum, count, valid), c| match c {
            '0'..='9' => (
                (sum + c.to_digit(10).unwrap() as i32 * count) % 11,
                count - 1,
                valid,
            ),
            'X' => ((sum + 10 * count) % 11, count - 1, valid && count == 1),
            _ => (0, 0, false),
        })
        == (0, 0, true)
}
