const user = require('../databases/user.data')
const { UserSchema } = require('./user.mongo')

// const showUser = () => {
//     try {
//         return user
//     } catch (error) {
//         console.log(error)
//     }
// }
// const newId = () => {
//     try {
//         const hotel = hotels[hotels.length - 1]
//         return hotel.id + 1
//     } catch (error) {
//         console.log(error)
//     }
// }
// const postUser = (newData) => {
//     try {
//         user.push({
//             id: newId(),
//             fullname: newData.fullname,
//             gender: newData.gender,
//             number: newData.number,
//             email: newData.email,
//             password: newData.password,
//         });
//         console.log(newData)
//     } catch (error) {
//         console.log(error)
//     }
// }



const showUser = async() => {
return await UserSchema.find({})
}

const postUser = async(newData)=>{
  return await UserSchema.create(newData)
}
module.exports = {
    showUser,
    postUser,
}
