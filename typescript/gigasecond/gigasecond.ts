export default class Gigasecond {
    static readonly MILLISECONDS_IN_A_GIGASECOND = 1E12;
    constructor(private birthDate_: Date) { }

    date() {
        const birthDateInMillisecondsFromUnixEpoch = this.birthDate_.getTime();
        const gigasecondAnniversaryInMilliseconds = birthDateInMillisecondsFromUnixEpoch + Gigasecond.MILLISECONDS_IN_A_GIGASECOND;
        return new Date(gigasecondAnniversaryInMilliseconds);
    }
}