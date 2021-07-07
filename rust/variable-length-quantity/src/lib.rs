#[derive(Debug, PartialEq)]
pub enum Error {
    IncompleteNumber,
    Overflow,
}

/// Convert a list of numbers to a stream of bytes encoded with variable length encoding.
pub fn to_bytes(values: &[u32]) -> Vec<u8> {
    values.iter().fold(Vec::new(), |mut bytes, &value| {
        bytes.append(&mut to_bytes_single(value));
        bytes
    })
}

fn to_bytes_single(mut value: u32) -> Vec<u8> {
    let mut bytes = Vec::new();

    if value == 0 {
        return vec![0];
    }

    while value != 0 {
        bytes.push((value as u8 & 127) + if bytes.is_empty() { 0 } else { 128 });
        value >>= 7;
    }

    bytes.reverse();
    bytes
}

/// Given a stream of bytes, extract all numbers which are encoded in there.
pub fn from_bytes(bytes: &[u8]) -> Result<Vec<u32>, Error> {
    let mut result = Vec::new();
    let mut temp = Vec::new();
    for &byte in bytes {
        temp.push(byte);
        if byte >> 7 == 0 {
            result.push(from_bytes_single(temp.as_slice()));
            temp = Vec::new();
        }
    }

    if !temp.is_empty() {
        return Err(Error::IncompleteNumber);
    }
    
    result.into_iter().collect()
}

fn from_bytes_single(bytes: &[u8]) -> Result<u32, Error> {
    bytes.iter().fold(Ok(0u32), |n, &byte| {
        Ok(n?.no_overflow_shl(7)? + (byte as u32 & 127))
    })
}

trait NoOverflowShift {
    fn no_overflow_shl(self, rhs: u32) -> Result<u32, Error>;
}

impl NoOverflowShift for u32 {
    fn no_overflow_shl(self, rhs: u32) -> Result<u32, Error> {
        (rhs <= self.leading_zeros())
            .then(|| self << rhs)
            .ok_or(Error::Overflow)
    }
}
