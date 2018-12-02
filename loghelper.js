let readline = require('readline');
let process = require('process');

let isPretty = false;
let selectedParams = [];

let readParams = () => {
  process.argv.forEach((val) => {
    if(val === 'pretty'){
      isPretty = true;
    } else if(val.startsWith('.')){
      selectedParams.push(val.substring(1));
    }
  });
};

let filterData = data => {
  if(selectedParams.length === 0) return data;
  let filtered = {};
  selectedParams.forEach(el => {
    filtered[el] = getProperty(data, el);
  });

  return filtered;
};

let getProperty = (data, property) => {
  let pos = property.indexOf('.');
  if(pos > -1){
    return getProperty(data, property.substring(pos + 1));
  } else {
    return data[property];
  }
};

readParams();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  let data = JSON.parse(line);
  data = filterData(data);
  if(isPretty){
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(JSON.stringify(data));
  }
});
