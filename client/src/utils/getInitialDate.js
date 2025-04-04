export default function getInitialDate() {
    let date = new Date(Date.now());
    date.setHours(date.getHours() + 4);
    let minutes = date.getMinutes();
    minutes = Math.round(minutes / 10) * 10;
    date.setMinutes(minutes);
    return date.toISOString().slice(0, 16);
}
