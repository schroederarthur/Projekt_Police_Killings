import parse from 'csv-parse/lib/sync'

export default function loadPoliceKillingsData() {
    return fetch('/police_killings.csv')
        .then((response) => {
            return response.text()
        })
        .then((text) => {
            return parse(text, {
                columns: true
            })
        })
}
