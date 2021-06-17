pub fn verse(n: u32) -> String {
    match n {
        0 => String::from("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n"),
        1 => String::from("1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n"),
        2 => String::from("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n"),
        _ => format!("{n} bottles of beer on the wall, {n} bottles of beer.\nTake one down and pass it around, {m} bottles of beer on the wall.\n", n = n, m = n - 1)
    }
}

pub fn sing(start: u32, end: u32) -> String {
    if start == end {
        return verse(end);
    }

    return verse(start) + "\n" + &sing(start - 1, end);
}
