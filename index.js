// Declare variables
var fs = require('fs'),
    obj

// Read the file and send to the callback
fs.readFile('data.json', handleFile)

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    // You can now play with your datas
}
function httpGet(data.json)
{
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", data.json, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
    var object = JSON.parse(httpGet("data.json"));


for (var i = 0;i<object.items.length;i++) //for loop looping through array of objects stored in "var object"
{
  console.log(object.items[i])
  for (var j = 0; object.items[i].length;j++){
    console.log(items[i].fname[j] + items[i].age)
    // console.log("Country Details - Capital: "+object.Country[i].Country_Details[j].Capital)
  }
}