#[derive(Debug)]
pub struct Duration(f64);

impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        const SECONDS_IN_EARTH_YEAR: f64 = 31_557_600f64;
        Duration(s as f64 / SECONDS_IN_EARTH_YEAR)
    }
}

macro_rules! planets {
    ($($name:ident => $earth_years:expr),*) => {
        $(
            pub struct $name;

            impl $name {
                pub fn years_during(d: &Duration) -> f64 {
                    d.0 / $earth_years as f64
                }
            }
        )*

    };
}

planets!(
    Earth => 1,
    Mercury => 0.2408467,
    Venus => 0.61519726,
    Mars => 1.8808158,
    Jupiter => 11.862615,
    Saturn => 29.447498,
    Uranus => 84.016846,
    Neptune => 164.79132
);
