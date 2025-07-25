
function age() {
    let d1 = parseInt(document.getElementById('day').value);
    let m1 = parseInt(document.getElementById('mounth').value);
    let y1 = parseInt(document.getElementById('year').value);

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        m2 = m2 - 1;
        d2 += monthDays[(m2 - 1 + 12) % 12];
    }

    if (m1 > m2) {
        y2 -= 1;
        m2 += 12;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let y = y2 - y1;

    document.getElementById('age').innerHTML = 'Your age is ' + y + ' Years ' + m + ' Mounth ' + d + ' Days ';
}