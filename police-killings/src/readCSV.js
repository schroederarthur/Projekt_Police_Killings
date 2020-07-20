/*import React from 'react';
import './police_killings.csv'
import Papa from 'papaparse';




async function GetFile(be) {
    const file = Papa.parse(await fetchCsv());
    console.log(file);
    return file;
}

async function fetchCsv() {
    const response = await fetch('./police_killings.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
}
*/