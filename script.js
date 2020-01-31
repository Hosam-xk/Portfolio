/*The next line wiil show a popup message */
//alert("hello world") // see?it works 

const FIRST_NAME = "Hossam Ahmed"
const LAST_NAME = "Abass"
const space = " "
// declare avrible named "fullName"
// its value should be your frist name <space> your last name
//e.g "Hossam Ahmed Abass"
 
let fullName = FIRST_NAME + space+ LAST_NAME

const myAddress ="Via Fratelli Rossalli, n 11\n10015 Ivrea (TO)\n Italy"
const streetName = "Via Fratelli Rossalli"; 
const civicNumber = "n 11";
const zipCode = "10015";
const city = "Ivrea";
const province = "(TO)" 
const country = "Italy";
const newLine = "\n"
let Address  = streetName +","+ space + civicNumber + newLine + zipCode + space + city  + space + province + newLine + space + country 



const newAddress = `${streetName} ${ civicNumber} 
${zipCode} ${city} ${province} 
 ${country}`


const workExperience = "one year work in an pizzeria"
const studies = "diploma  in engineering"
const softSkills = "tiem work "
const languages = `
-Arabc
-English
-Italian`
const hobbies = "football, video games , "

console.log(newAddress)

const CV = `${workExperience} 
  ${studies}
  ${softSkills}
  ${languages}
  ${hobbies}`
  
  console.log(CV)