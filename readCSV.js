var fs = require('fs');

try {  
    var data = fs.readFileSync('police_killings.csv', 'utf8');
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

const rows = data.split("\n").slice(1);
rows.forEach(elt => {
    const row = elt.split(",");
    const name = row[0];
    const gender = row[2];
})

console.log(gender);


// console.log(data);