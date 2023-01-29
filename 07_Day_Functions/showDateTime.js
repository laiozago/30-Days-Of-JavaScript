function showDateTime() {
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theMonth = now.getMonth() + 1;
    let theDay = now.getDate();
    let theYear = now.getFullYear();
    let theTime = `${theHr}:${theMin} ${theDay}/${theMonth}/${theYear}`;
    return theTime;
}

console.log(showDateTime());
