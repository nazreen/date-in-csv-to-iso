const fs = require('fs');
var csv = require("fast-csv");

!async function () {
    const stream = fs.createReadStream("data/raw.csv");
    var writeStream = fs.createWriteStream("data/result.csv");
    const promises = [];
    let counter = 0;
    csv
        .fromStream(stream, { headers: true })
        .on("data", function (data) {
            counter++;
            const ISOdate = new Date(data.source_date).toISOString();
            const updatePromise = Object.assign(data, { source_date: ISOdate });
            promises.push(updatePromise);
        })
        .on("end", function () {
            csv
                .write(
                    promises,
                    { headers: true })
                .pipe(writeStream);
            console.log("done", counter);
        });
}();