function naughtyOrNice(data) {
    let naughtyCount = 0;
    let niceCount = 0;

    for (const month in data) {
        for (const day in data[month]) {
            if (data[month][day] === 'Naughty') {
                naughtyCount++;
            } else if (data[month][day] === 'Nice') {
                niceCount++;
            }
        }
    }

    if (naughtyCount > niceCount) {
        return "Naughty!";
    } else if (niceCount > naughtyCount) {
        return "Nice!";
    } else {
        return "Nice!";
    }
}

const yearData = {
    January: { '1': 'Naughty', '2': 'Naughty', '3': 'Naughty', '31': 'Nice' },
    February: { '1': 'Nice', '2': 'Naughty', '3': 'Naughty', '28': 'Nice' },
    march: {'1': 'Nice', '2': 'Naughty', '3': 'Naughty', '28': 'Nice'},
    april: {'1': 'Naughty', '2': 'Naughty', '3': 'Nice', '31': 'Nice'},
    may: {'1': 'Naughty', '2': 'Nice', '3': 'Nice', '31': 'Nice'},
    june: {'1': 'Naughty', '2': 'Naughty', '3': 'Nice', '31': 'Nice'},
    july: {'1': 'Naughty', '2': 'Naughty', '3': 'Nice', '31': 'Nice'},
    august: {'1': 'Naughty', '2': 'Naughty', '3': 'Nice', '31': 'Nice'},
    september: {'1': 'Naughty', '2': 'Nice', '3': 'Nice', '31': 'Nice'},
    october: {'1': 'Naughty', '2': 'Naughty', '3': 'Nice', '31': 'Nice'},
    november: {'1': 'Nice', '2': 'Nice', '3': 'Nice', '31': 'Nice'},
    December: { '1': 'Nice', '2': 'Nice', '3': 'Naughty', '31': 'Naughty' }
};

console.log(naughtyOrNice(yearData)); 
