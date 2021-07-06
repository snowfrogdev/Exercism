#[derive(Debug, PartialEq)]
pub enum Error {
    NotEnoughPinsLeft,
    GameComplete,
}

pub struct BowlingGame {
    throws: Vec<u16>,
    is_second_ball: bool,
}

impl BowlingGame {
    pub fn new() -> Self {
        Self {
            throws: Vec::new(),
            is_second_ball: false,
        }
    }

    pub fn roll(&mut self, pins: u16) -> Result<(), Error> {
        if pins > 10 || self.is_second_ball && pins + self.throws.last().unwrap() > 10 {
            Err(Error::NotEnoughPinsLeft)
        } else if self.score().is_some() {
            Err(Error::GameComplete)
        } else {
            self.throws.push(pins);
            self.is_second_ball = if pins != 10 {
                !self.is_second_ball
            } else {
                false
            };
            Ok(())
        }
    }

    pub fn score(&self) -> Option<u16> {
        let mut score = 0;
        let mut throw = 0;
        for _ in 0..10 {
            match (self.throws.get(throw), self.throws.get(throw + 1)) {
                (Some(&first), Some(&second)) => {
                    score += first + second;
                    let is_strike = first == 10;
                    let is_spare = first + second == 10;
                    if is_strike || is_spare {
                        match self.throws.get(throw + 2) {
                            Some(&third) => {
                                score += third;
                            }
                            None => return None,
                        }
                    }
                    throw += if is_strike { 1 } else { 2 };
                }
                _ => return None,
            }
        }
        Some(score)
    }
}
