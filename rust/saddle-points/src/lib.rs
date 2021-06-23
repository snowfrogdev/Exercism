pub fn find_saddle_points(input: &[Vec<u64>]) -> Vec<(usize, usize)> {
    let mut points = Vec::new();

    for (row_index, row) in input.iter().enumerate() {
        let largest = row.iter().max().unwrap_or(&0);

        for (col_index, value) in row.iter().enumerate() {
            let smallest = (0..input.len()).map(|i| input[i][col_index]).min().unwrap();

            if value == largest && value == &smallest {
                points.push((row_index, col_index));
            }
        }
    }

    points
}
