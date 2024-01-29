function createCalendar(elem, year) {
    elem = document.querySelector(elem);
    elem.classList.add('elem');
    
    for (let i = 0; i < 12; i++) {
        let month = document.createElement('div');
        month.classList.add('month');

        let moon = i;
        let d = new Date(year, moon);
        let div = ` <div>${i + 1}.${year}</div>`;
        let table = `
        <table>
        <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
        </tr>
        <tr>
        `;

        for (let i = 0; i < getDay(d); i++) {
            table += '<td></td>';
        }

        while (d.getMonth() == moon) {
            table += '<td>' + d.getDate() + '</td>';
            if (getDay(d) % 7 == 6) {
                table += '<tr></tr>'
            }
            d.setDate(d.getDate() + 1);
        }

        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '<td></td>'
            }
        }

        table += '</tr></table>';
        month.innerHTML = div + '<br>' + table;
        elem.append(month);
    }

}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day - 1;
}

createCalendar('body', +prompt('enter year'));