function lowerCaseWords(mixedArray){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)){
            reject("Input is not an array.");
        } else {
            const loweredWords = mixedArray.filter(item => typeof item === "string").map(word => word.toLowerCase());

            resolve(loweredWords);
             
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const nonArray = "notArray"

lowerCaseWords(nonArray).then(result => console.log(result)).catch(error => console.error(error))
lowerCaseWords(mixedArray).then(result => console.log(result)).catch(error => console.error(error))
