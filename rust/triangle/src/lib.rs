use std::ops::Add;

pub struct Triangle<T: Add<Output = T> + PartialOrd + Copy>(T, T, T);

impl<T: Add<Output = T> + PartialOrd + Copy> Triangle<T> {
    pub fn build(sides: [T; 3]) -> Option<Triangle<T>> {
        if sides[0] + sides[1] > sides[2]
            && sides[1] + sides[2] > sides[0]
            && sides[2] + sides[0] > sides[1]
        {
            Some(Triangle(sides[0], sides[1], sides[2]))
        } else {
            None
        }
    }

    pub fn is_equilateral(&self) -> bool {
        self.0 == self.1 && self.1 == self.2
    }

    pub fn is_scalene(&self) -> bool {
        self.0 != self.1 && self.1 != self.2 && self.2 != self.0
    }

    pub fn is_isosceles(&self) -> bool {
        self.0 == self.1 || self.1 == self.2 || self.2 == self.0
    }
}
