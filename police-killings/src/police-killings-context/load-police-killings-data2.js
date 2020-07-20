import parse from 'csv-parse/lib/sync'

export function loadPoliceKillingsData() {
    return fetch('../../public/police_killings.csv')
        .then((response) => {
            return response.text();
        })
        .then((text) => {
            return parse(text, {
                columns: true
            });
        })
}
