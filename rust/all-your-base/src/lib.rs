#[derive(Debug, PartialEq)]
pub enum Error {
    InvalidInputBase,
    InvalidOutputBase,
    InvalidDigit(u32),
}

pub fn convert(number: &[u32], from_base: u32, to_base: u32) -> Result<Vec<u32>, Error> {
    if let Err(error) = validate(from_base, to_base, number) {
        return Err(error);
    }

    let number_in_base_10: u32 = number
        .iter()
        .rev()
        .enumerate()
        .map(|(index, digit)| digit * from_base.pow(index as u32))
        .sum();

    let mut result = Vec::new();
    let mut quotient = number_in_base_10;
    loop {
        result.push(quotient % to_base);
        quotient /= to_base;
        if quotient <= 0 {
            break;
        }
    }
    result.reverse();

    Ok(result)
}

fn validate(from_base: u32, to_base: u32, number: &[u32]) -> Result<(), Error> {
    if from_base < 2 {
        return Err(Error::InvalidInputBase);
    }
    if to_base < 2 {
        return Err(Error::InvalidOutputBase);
    }
    number.iter().fold(Ok(()), |result, &digit| {
        if digit >= from_base {
            Err(Error::InvalidDigit(digit))
        } else {
            result
        }
    })
}
