const fs = require('fs');
var csv = require("fast-csv");

!async function () {
    const stream = fs.createReadStream("data/raw.csv");
    var writeStream = fs.createWriteStream("data/result.csv");
    const objectsArray = [];
    let counter = 0;
    csv
        .fromStream(stream, { headers: true })
        .on("data", function (data) {
            counter++;
            const ISOdate = new Date(data.date).toISOString();
            const updatedObject = Object.assign(data, { date: ISOdate });
            objectsArray.push(updatedObject);
        })
        .on("end", function () {
            csv
                .write(
                    objectsArray,
                    { headers: true })
                .pipe(writeStream);
            console.log("done", counter);
        });
}();