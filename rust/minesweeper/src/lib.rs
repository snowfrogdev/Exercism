use std::usize;

pub fn annotate(minefield: &[&str]) -> Vec<String> {
    let mut result = Vec::new();

    if minefield.is_empty() {
        return result;
    };

    let height = minefield.len();
    let width = minefield[0].len();

    let field: Vec<Vec<char>> = minefield
        .iter()
        .map(|s| s.chars().collect::<Vec<char>>())
        .collect();

    for y in 0..height {
        let mut row = String::new();
        for x in 0..width {
            match field[y][x] {
                ' ' => row += &mine_count(y, x, &field, height, width),
                c => row = format!("{}{}", row, c),
            }
        }

        result.push(row);
    }

    result
}

fn mine_count(y: usize, x: usize, field: &[Vec<char>], height: usize, width: usize) -> String {
    let count = [
        field[y].get(x + 1),
        field[y].get(x.checked_sub(1).unwrap_or(width)),
        field
            .get(y.checked_sub(1).unwrap_or(height))
            .map(|row| &row[x]),
        field.get(y + 1).map(|row| &row[x]),
        field.get(y + 1).and_then(|row| row.get(x + 1)),
        field
            .get(y + 1)
            .and_then(|row| row.get(x.checked_sub(1).unwrap_or(width))),
        field
            .get(y.checked_sub(1).unwrap_or(height))
            .and_then(|row| row.get(x + 1)),
        field
            .get(y.checked_sub(1).unwrap_or(height))
            .and_then(|row| row.get(x.checked_sub(1).unwrap_or(width))),
    ]
    .iter()
    .fold(0, |acc, el| match el {
        Some(&c) if c == '*' => acc + 1,
        _ => acc,
    });

    match count {
        0 => " ".to_string(),
        x => x.to_string(),
    }
}
