// Loads each day's table into the correct div
function loadTable(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

loadTable('day1-table', 'day1.html');
loadTable('day2-table', 'day2.html');
loadTable('day3-table', 'day3.html');
loadTable('day4-table', 'day4.html');
loadTable('day5-table', 'day5.html');
loadTable('day6-table', 'day6.html');