export const TimeConverter = (delay) => {
    let hours = Math.trunc(delay/60);
    let minutes = delay % 60;
    return `${hours}ч ${minutes}м`
}
