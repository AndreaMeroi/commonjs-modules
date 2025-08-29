function hobbieslistFn(hobbyOne, hobbyTwo, hobbyThree) {

    const hobbiesList = ['bricolage', 'trekking', 'painting']

    return hobbiesList
}

const fullHobbiesList = hobbieslistFn('', '', '')

console.log(fullHobbiesList);

//MJS EXPORT//

export { fullHobbiesList }

//COMMONJS EXPORT//

//module.exports = hobbieslistFn
