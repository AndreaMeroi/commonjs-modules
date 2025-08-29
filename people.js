//MJS IMPORT//
// import from name.js//

import { NameComplete } from "./name.js";

//import from hobbies.js//

import { fullHobbiesList } from "./hobbies.js";

//COMMONJS IMPORT//
// import from name.js//

//const fullNameFn = require("./name.js");

// import from hobbies.js//

//const hobbieslistFn = require("./hobbies.js")

//Create a new function to make an obj using two propertis (fullName and Hobbies)

function PersonalHobbiesFn() {

    const PersonalHobbies = {

        fullNameFn,
        hobbieslistFn
    }

    return PersonalHobbies

}

const PersonalHobby = PersonalHobbiesFn