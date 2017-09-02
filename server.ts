import {router} from './index'
import * as express from 'express'

const app = express()

app.use('/', router())


app.listen(process.env.PORT||3001)

