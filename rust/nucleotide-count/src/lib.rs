use std::collections::HashMap;

static VALID: [char; 4] = ['A', 'C', 'G', 'T'];

pub fn count(nucleotide: char, dna: &str) -> Result<usize, char> {
    if VALID.contains(&nucleotide) {
        dna.chars().fold(Ok(0), |p, c| {
            match c {
                'A' | 'C' | 'G' | 'T' if c == nucleotide => p.map(|count| count + 1),
                'A' | 'C' | 'G' | 'T' => p,
                _ => Err(c),
            }
        })
    } else {
        Err(nucleotide)
    }
}

pub fn nucleotide_counts(dna: &str) -> Result<HashMap<char, usize>, char> {
    let mut map = HashMap::new();
    for &n in VALID.iter() {
        match count(n, dna) {
            Ok(count) => {
                map.insert(n, count);
            }
            Err(c) => return Err(c),
        }
    }

    Ok(map)
}
