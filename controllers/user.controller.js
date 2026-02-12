
const { showUser, postUser } = require("../models/user.model")


const addData = async(req, res)=>{
    try {
        // const data = await postUser(req.body)
        await postUser(req.body)
        // res.json(data)
        console.log(req.body)
        res.render('user')
    } catch (error) {
        console.log(error)
    }
}
const getData = async(req, res) => {
    try {
        const user= await showUser()
        // res.json(user)
        res.render('user', {user})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getData,
    addData
}




