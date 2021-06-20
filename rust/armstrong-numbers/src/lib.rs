pub fn is_armstrong_number(num: u32) -> bool {
    num == required_sum(num)
}

fn required_sum(mut num: u32) -> u32 {
    let count = count_digits(num);

    let mut sum = 0;
    while num > 0 {
        sum += (num % 10).pow(count);
        num /= 10;
    }

    sum
}

fn count_digits(mut num: u32) -> u32 {
    let mut i = 0;
    while num > 0 {
        num /= 10;
        i += 1;
    }

    i
}
