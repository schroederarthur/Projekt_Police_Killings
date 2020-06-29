var fs = require('fs');

var dataName = [];
var dataAge = [];
var dataGender= [];
var dataRace = [];
var dataMonth = [];
var dataCause = [];
var dataArmed = [];


function getData(){
 
    var data = fs.readFileSync("police_killings.csv", "utf8");
    // console.log(data.toString());    


    const lines = data.split("\n");
    lines.slice(1,lines.length).forEach(row => {
    const victimData = row.split(",");
    
    const name = victimData[0];
    dataName.push(name);
    
    const age = victimData[1];
    dataAge.push(age);

    const gender = victimData[2];
    dataGender.push(gender);

    const race = victimData[3];
    dataRace.push(race);

    const month = victimData[4];
    dataMonth.push(month);

    const cause = victimData[19];
    dataCause.push(cause);

    const armed = victimData[20];
    dataArmed.push(armed);

    // console.log(name, gender);
})
}
getData();



console.log(dataArmed);

function getVictimData(victimIndex){
    const i = victimIndex;
    console.log(dataName[i] + "\nName: " + dataAge[i] + "\nGender: " + dataGender[i] + "\nRace: "+ dataRace[i] + "\nDied in: "+ dataMonth[i] + "\nCause of death: "+ dataCause[i] +"\nArmed: "+ dataArmed[i] + "\n");
}


getVictimData(2);

// console.log(data);