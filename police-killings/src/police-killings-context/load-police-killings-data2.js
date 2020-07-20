import parse from 'csv-parse/lib/sync'

export function loadPoliceKillingsData() {
    return fetch('https://raw.githubusercontent.com/fivethirtyeight/data/master/police-killings/police_killings.csv')
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            return parse(text, {
                columns: true
            });
        })
}
