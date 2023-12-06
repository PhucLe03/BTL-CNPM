
const mayinRouter = require('./mayin')
const taikhoanRouter = require('./taikhoan')
const tailieuRouter = require('./tailieu')
const vitriRouter = require('./vitri')
//----------------------------------
const thongkeRouter = require('./thongke')
//----------------------------------
const loginRouter = require('./login')
const logoutRouter = require('./logout')


const route = (app) => {
    app.use('/mayin', mayinRouter)
    app.use('/taikhoan', taikhoanRouter)
    app.use('/tailieu', tailieuRouter)
    app.use('/vitri', vitriRouter)
    //----------------------------------
    //app.use('/thongke', thongkeRouter)
    //----------------------------------
    app.use('/login', loginRouter)
    app.use('/logout', logoutRouter)

}

module.exports = route