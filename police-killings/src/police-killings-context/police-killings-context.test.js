import { readFileSync } from 'fs'
import { loadPoliceData } from './'

describe('police-context', () => {
    describe('loadPoliceData', () => {
        it('should provide police-killings.csv as json promise', async() => {
            const csvContent = readFileSync(__dirname + '/../../public/police_killings.csv', 'utf8')
            const rows = csvContent.split('\r')
            const labels = rows[0].split(',')
            fetch.mockResponseOnce(csvContent)

            const data = await loadPoliceData();
            expect(data.length).toEqual(rows.length-1)

                        

        })
    })
}) 