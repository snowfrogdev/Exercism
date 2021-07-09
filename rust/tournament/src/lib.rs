use std::collections::HashMap;

const HEADER: &str = "Team                           | MP |  W |  D |  L |  P";

#[derive(Default)]
struct Standing<'a> {
    name: &'a str,
    matches_played: u32,
    matches_won: u32,
    matches_drawn: u32,
    matches_lost: u32,
    points: u32,
}

impl<'a> Standing<'a> {
    fn new(name: &'a str) -> Self {
        Self {
            name,
            ..Default::default()
        }
    }

    fn add_win(&self) -> Self {
        Self {
            matches_played: self.matches_played + 1,
            matches_won: self.matches_won + 1,
            points: self.points + 3,
            ..*self
        }
    }

    fn add_loss(&self) -> Self {
        Self {
            matches_played: self.matches_played + 1,
            matches_lost: self.matches_lost + 1,
            ..*self
        }
    }

    fn add_draw(&self) -> Self {
        Self {
            matches_played: self.matches_played + 1,
            matches_drawn: self.matches_drawn + 1,
            points: self.points + 1,
            ..*self
        }
    }
}

impl<'a> From<&Standing<'a>> for String {
    fn from(origin: &Standing) -> String {
        format!(
            "{:<30} | {:>2} | {:>2} | {:>2} | {:>2} | {:>2}",
            origin.name,
            origin.matches_played,
            origin.matches_won,
            origin.matches_drawn,
            origin.matches_lost,
            origin.points
        )
    }
}

pub fn tally(match_results: &str) -> String {
    let mut results: HashMap<&str, Standing> = HashMap::new();

    for line in match_results.lines() {
        let match_data: Vec<&str> = line.split(';').collect();
        match match_data[2] {
            "win" => results = record_win(results, match_data[0], match_data[1]),
            "loss" => results = record_win(results, match_data[1], match_data[0]),
            "draw" => {
                if let Some(standing) = results.get(match_data[0]) {
                    let new_standing = standing.add_draw();
                    results.insert(match_data[0], new_standing);
                } else {
                    results.insert(match_data[0], Standing::new(match_data[0]).add_draw());
                }
                if let Some(standing) = results.get(match_data[1]) {
                    let new_standing = standing.add_draw();
                    results.insert(match_data[1], new_standing);
                } else {
                    results.insert(match_data[1], Standing::new(match_data[1]).add_draw());
                }
            }
            _ => panic!(),
        }
    }

    let mut standings: Vec<&Standing> = results.values().collect();
    standings.sort_unstable_by(|a, b| b.points.cmp(&a.points).then_with(|| a.name.cmp(&b.name)));

    vec![String::from(HEADER)]
        .into_iter()
        .chain(standings.into_iter().map(|standing| standing.into()))
        .collect::<Vec<String>>()
        .join("\n")
}

fn record_win<'a>(
    mut results: HashMap<&'a str, Standing<'a>>,
    winner: &'a str,
    loser: &'a str,
) -> HashMap<&'a str, Standing<'a>> {
    if let Some(standing) = results.get(winner) {
        let new_standing = standing.add_win();
        results.insert(winner, new_standing);
    } else {
        results.insert(winner, Standing::new(winner).add_win());
    }
    if let Some(standing) = results.get(loser) {
        let new_standing = standing.add_loss();
        results.insert(loser, new_standing);
    } else {
        results.insert(loser, Standing::new(loser).add_loss());
    }

    results
}
