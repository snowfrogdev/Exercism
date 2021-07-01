#[derive(Debug, PartialEq)]
pub struct Dna(String);

#[derive(Debug, PartialEq)]
pub struct Rna(String);

impl Dna {
    pub fn new(dna: &str) -> Result<Dna, usize> {
        dna.chars()
            .enumerate()
            .fold(Ok(String::new()), |p, c| match c {
                (_, c) if ['A', 'C', 'G', 'T'].contains(&c) => p.map(|mut s| {
                    s.push(c);
                    s
                }),
                (i, _) => {
                    if p.is_err() {
                        p
                    } else {
                        Err(i)
                    }
                }
            })
            .map(Dna)
    }

    pub fn into_rna(self) -> Rna {
        let rna = self
            .0
            .chars()
            .map(|c| match c {
                'G' => 'C',
                'C' => 'G',
                'T' => 'A',
                'A' => 'U',
                _ => panic!(),
            })
            .collect::<String>();

        Rna(rna)
    }
}

impl Rna {
    pub fn new(rna: &str) -> Result<Rna, usize> {
        rna.chars()
            .enumerate()
            .fold(Ok(String::new()), |p, c| match c {
                (_, c) if ['A', 'C', 'G', 'U'].contains(&c) => p.map(|mut s| {
                    s.push(c);
                    s
                }),
                (i, _) => {
                    if p.is_err() {
                        p
                    } else {
                        Err(i)
                    }
                }
            })
            .map(Rna)
    }
}
