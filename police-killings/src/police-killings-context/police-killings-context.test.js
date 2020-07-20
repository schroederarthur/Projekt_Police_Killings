import { readFileSync } from 'fs'
import PoliceKillingsData from './load-police-killings-data2'

describe('loadPoliceKillingsData', () => {
    it('should provide police_killings.csv as json promise', async () => {
        const csvContent = readFileSync(__dirname +'../../public/police_killings.csv', 'utf8');
        const rows = csvContent.split('\r')
        const labels = rows[0].split(',')
        fetch.mockResponseOnce(csvContent)

        const data = await loadPoliceKillingsData();
        expect(data.length).toEqual(rows.length-1)
        data.forEach((policekillings) => {
            expect(Object.keys(policekillings)).toEqual(labels)
        })
    })
})