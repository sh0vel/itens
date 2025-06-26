// This file will load each table's HTML and insert it into the correct div
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