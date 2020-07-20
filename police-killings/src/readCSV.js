/* var fs = require('fs');

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



// console.log(dataArmed);

function getVictimData(victimIndex){
    const i = victimIndex - 1;
    console.log("\nName: " + dataName[i] + "\nAge: " + dataAge[i] + "\nGender: " + dataGender[i] + "\nRace: "+ dataRace[i] + "\nDied in: "+ dataMonth[i] + "\nCause of death: "+ dataCause[i] +"\nArmed: "+ dataArmed[i] + "\n");
}


// getVictimData(11);

// console.log(data);

// export {dataName};
// export {dataAge};
// export {dataGender};
// export {dataRace};
// export {dataMonth};
// export {dataCause};
// export {dataArmed};
 

module.exports = {

dataName,
dataAge,
dataGender,
dataRace, 
dataMonth,
dataCause,
dataArmed,
}

*/