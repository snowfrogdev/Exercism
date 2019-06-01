const EARTH_YEAR_IN_SECONDS = 31557600

enum OrbitalPeriodInEarthYears {
    EARTH   = 1,
    MERCURY = 0.2408467,
    VENUS   = 0.61519726,
    MARS    = 1.8808158,
    JUPITER = 11.862615,
    SATURN  = 29.447498,
    URANUS  = 84.016846,
    NEPTUNE = 164.79132
}

export default class SpaceAge {
    private earthAgeNotRounded: number
    constructor(public seconds: number) {
        this.earthAgeNotRounded = this.seconds / EARTH_YEAR_IN_SECONDS
    }

    onEarth(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.EARTH)
    }

    onMercury(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.MERCURY)
    }

    onVenus(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.VENUS)
    }

    onMars(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.MARS)
    }

    onJupiter(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.JUPITER)
    }

    onSaturn(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.SATURN)
    }

    onUranus(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.URANUS)
    }

    onNeptune(): number {
        return this.getSpaceAge(OrbitalPeriodInEarthYears.NEPTUNE)
    }

    private getSpaceAge(orbitalPeriodInEarthYears: number): number {
        return this.round_(this.earthAgeNotRounded / orbitalPeriodInEarthYears)
    }

    private round_(float: number) {
        return parseFloat(float.toFixed(2))
    }
}