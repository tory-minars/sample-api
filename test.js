
const stringInput = "Hello my name is   is  Tory    hello"

const buildArrFromString = (inputString) => {
    const modifiedString = inputString.split(' ')
    let strArr = modifiedString.reduce((acc, curr) => {
         const currLower = curr.toLowerCase()
        if(currLower == '') {
             return acc
        }
        if(!acc[currLower]) {
             acc[currLower] = 1
             return acc
        }

         acc[currLower] += 1
         return acc
        
    }, [])
    return strArr
}

console.log(buildArrFromString(stringInput))