const fs = require('fs');

function store(namaFile, data) {
    const exists = fs.existsSync(namaFile + '.json');
    let existingData = '[]';
    if (!exists) {
        fs.writeFileSyncy(
            path.join(_dirname, namaFile  + '.json'),
            JSON.stringify([data])
        );
    } else {
        existingData = getAll(namaFile + '.json')
        let dataBaru = JSON.parse(existingData);
        dataBaru.push(data);
        dataBaru = JSON.stringify(dataBaru);
        fs.writeFileSync(path.join(_dirname, namaFile + '.json'), dataBaru);
    }
};
function getAll(namaFile) {
    const data = fs.readFileSync(path.join(_dirname, namaFile));
    if (data) {
        return data.toString('utf-8');
    }
    return undefined;
}

module.exports = {
    store,
    getAll,
}