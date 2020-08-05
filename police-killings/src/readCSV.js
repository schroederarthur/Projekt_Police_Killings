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

    //  console.log(name, gender);
})
}
getData();



 console.log(dataArmed);

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
 

var mapMonth = {};
var mapAge = {};
var mapGender = {};
var mapCause = {};
var mapRace = {};


function countMonths(){
        
      for (let i = 0; i < dataMonth.length; i++) {
          let item = dataMonth[i];
          mapMonth[item] = (mapMonth[item] + 1) || 1;
        }
        return mapMonth;
        
      }


function countGender(){
        
        for (let i = 0; i < dataGender.length; i++) {
            let item = dataGender[i];
            mapGender[item] = (mapGender[item] + 1) || 1;
          }
          return mapGender;
          
        }

function countCause(){
        
            for (let i = 0; i < dataCause.length; i++) {
                let item = dataCause[i];
                mapCause[item] = (mapCause[item] + 1) || 1;
              }
              return mapCause;
              
            }

 function countRace(){
        
              for (let i = 0; i < dataRace.length; i++) {
                  let item = dataRace[i];
                  mapRace[item] = (mapRace[item] + 1) || 1;
                }
                return mapRace;
                
              }

countMonths();
countGender();
countCause();
countRace();
// console.log(year);
console.log(mapMonth)
// console.log(mapAge)
console.log(mapGender)
console.log(mapCause)
console.log(mapRace)
// console.log(mapMonth)
// console.log(dataRace)

module.exports = {

dataName,
dataAge,
dataGender,
dataRace, 
dataMonth,
dataCause,
dataArmed,
}

