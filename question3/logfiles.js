// fs and path modules
const fs = require("fs");
const path = require("path");

// logsPath becomes the path where this labtest is and joins it with Logs to get the full path to where logs would be
const logsPath = path.join(__dirname, "Logs");

// PART 1: Remove Log files
// Checks if Logs folder exists
if (fs.existsSync(logsPath)) {
    // checks all the logs in the log folder
    fs.readdirSync(logsPath).forEach(file =>{
        // prints that each log file is being deleted
        console.log(`delete files...${file}`);
        // and then deletes it
        fs.unlinkSync(path.join(logsPath, file));
    });
    // deletes logs folder itself last, after the log files are gone
    fs.rmdirSync(logsPath);
}

// PART 2: Create Log files
// creates log folder
fs.mkdirSync(logsPath);

// moves into log folder
process.chdir(logsPath);

// for loop that makes 10 log files
for (let i = 0; i<10;i++){
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(fileName);
}