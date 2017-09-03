import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as _ from 'lodash'
import * as fs from 'fs'

export function router() {

    const router = express.Router()
    router.use(bodyParser.json())
    router.use(bodyParser.urlencoded({ extended: true }))

    router.use('/bower', express.static('bower_components'))

    router.get('/stream', function (req, res) {

        fs.readFile(__dirname+'/views/streaming.html', 'utf8', function (err, data) {
            if (err) {
                res.send('error')
            } else {
                const compiled = _.template(data);

                res.send(compiled(
                    {
                     title: req.query.title || 'player',
                     piwik_id:14
                    }
                ))

            }
        });

    })



    return router
}