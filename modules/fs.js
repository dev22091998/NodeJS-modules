const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'template'), err => {
//     if(err) throw new Error();

//     console.log('Folder was created succesfully')
// })
fs.writeFile(path.join(__dirname, 'template', 'December.txt'), 'Create new course NodeJS', err => {
    if(err) throw new Error();

    console.log('File was created succesfully')
})

fs.appendFile(path.join(__dirname, 'template', 'December.txt'), ' and microservice project', err => {
    if(err) throw new Error();

    console.log('File was changed succesfully')
})

fs.readFile(path.join(__dirname, 'template', 'December.txt'), (err, data) => {
    if(err) throw new Error();

    // console.log(data)
    console.log(Buffer.from(data).toString())
})