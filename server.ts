import {router} from './index'
import * as express from 'express'
const cors = require( 'cors')

const app = express()
app.use(cors())

app.use('/', router())


app.listen(process.env.PORT||3001)

