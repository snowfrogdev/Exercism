#[allow(clippy::new_without_default)]
pub struct School<'a>(Vec<(u32, &'a str)>);

impl<'a> School<'a> {
    pub fn new() -> School<'a> {
        School(Vec::new())
    }

    pub fn add(&mut self, grade: u32, student: &'a str) {
        self.0.push((grade, student));
    }

    pub fn grades(&self) -> Vec<u32> {
        let mut grades: Vec<u32> = self.0.iter().map(|(grade, _)| *grade).collect();
        grades.sort_unstable();
        grades.dedup();
        grades
    }

    pub fn grade(&self, grade: u32) -> Vec<String> {
        let mut students: Vec<String> = self
            .0
            .iter()
            .filter(|(g, _)| *g == grade)
            .map(|(_, name)| name.to_string())
            .collect();

        students.sort_unstable();
        students
    }
}
