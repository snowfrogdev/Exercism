export default class SpaceAge {
    static EARTH_YEAR_IN_SECONDS = 31557600
    constructor(public seconds: number) {}

    onEarth(): number {
        return this.round_(this.getEarthAgeNotRounded_())
    }

    onMercury(): number {
        const MERCURY_ORBITAL_PERIOD_IN_EARTH_YEARS = 0.2408467
        return this.round_(this.getEarthAgeNotRounded_() / MERCURY_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onVenus(): number {
        const VENUS_ORBITAL_PERIOD_IN_EARTH_YEARS = 0.61519726
        return this.round_(this.getEarthAgeNotRounded_() / VENUS_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onMars(): number {
        const MARS_ORBITAL_PERIOD_IN_EARTH_YEARS = 1.8808158
        return this.round_(this.getEarthAgeNotRounded_() / MARS_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onJupiter(): number {
        const JUPITER_ORBITAL_PERIOD_IN_EARTH_YEARS = 11.862615
        return this.round_(this.getEarthAgeNotRounded_() / JUPITER_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onSaturn(): number {
        const SATURN_ORBITAL_PERIOD_IN_EARTH_YEARS = 29.447498
        return this.round_(this.getEarthAgeNotRounded_() / SATURN_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onUranus(): number {
        const URANUS_ORBITAL_PERIOD_IN_EARTH_YEARS = 84.016846
        return this.round_(this.getEarthAgeNotRounded_() / URANUS_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    onNeptune(): number {
        const NEPTUNE_ORBITAL_PERIOD_IN_EARTH_YEARS = 164.79132
        return this.round_(this.getEarthAgeNotRounded_() / NEPTUNE_ORBITAL_PERIOD_IN_EARTH_YEARS)
    }

    private round_(float: number) {
        return parseFloat(float.toFixed(2))
    }

    private getEarthAgeNotRounded_(): number {
        return this.seconds / SpaceAge.EARTH_YEAR_IN_SECONDS
    }
}