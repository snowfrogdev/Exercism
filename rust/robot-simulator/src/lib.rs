use num::{FromPrimitive, Integer};

extern crate num;
#[macro_use]
extern crate num_derive;

#[derive(PartialEq, Debug, FromPrimitive)]
pub enum Direction {
    North,
    East,
    South,
    West,
}

pub struct Robot {
    direction: Direction,
    position: (i32, i32),
}

impl Robot {
    pub fn new(x: i32, y: i32, d: Direction) -> Self {
        Robot {
            direction: d,
            position: (x, y),
        }
    }

    pub fn turn_right(mut self) -> Self {
        self.direction =
            FromPrimitive::from_i32((self.direction as i32 + 1).mod_floor(&4)).unwrap();
        self
    }

    pub fn turn_left(mut self) -> Self {
        self.direction =
            FromPrimitive::from_i32((self.direction as i32 - 1).mod_floor(&4)).unwrap();
        self
    }

    pub fn advance(mut self) -> Self {
        let (x, y) = self.position;
        let new_position = match self.direction {
            Direction::North => (x, y + 1),
            Direction::East => (x + 1, y),
            Direction::South => (x, y - 1),
            Direction::West => (x - 1, y),
        };

        self.position = new_position;
        self
    }

    pub fn instructions(mut self, instructions: &str) -> Self {
        for instruction in instructions.chars() {
            self = match instruction {
                'L' => self.turn_left(),
                'R' => self.turn_right(),
                'A' => self.advance(),
                _ => panic!("Unknown instruction: {}", instruction),
            };
        }

        self
    }

    pub fn position(&self) -> (i32, i32) {
        self.position
    }

    pub fn direction(&self) -> &Direction {
        &self.direction
    }
}
