pub struct PascalsTriangle(Vec<Vec<u32>>);

impl PascalsTriangle {
    pub fn new(row_count: u32) -> Self {
        PascalsTriangle((0..row_count).map(PascalsTriangle::calc_row).collect())
    }

    pub fn rows(&self) -> Vec<Vec<u32>> {
        self.0.clone()
    }

    fn calc_row(row_index: u32) -> Vec<u32> {
        let mut result = vec![1];

        for i in 1..=row_index {
            let &last = result.last().unwrap();
            result.push((last * (row_index + 1 - i)) / i);
        }

        result
    }
}
