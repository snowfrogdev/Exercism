const isLeapYear = (year: number): boolean => {
    const yearIsDivisbleBy = (num: number): boolean => year % num === 0
    return yearIsDivisbleBy(4) && (!yearIsDivisbleBy(100) || yearIsDivisbleBy(400))
}

export default isLeapYear