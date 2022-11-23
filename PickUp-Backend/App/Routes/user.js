const express = require('express')

const router = express.Router()

const path = 'user'

const bodyParser = require('body-parser')

const controller = require('../Controllers/user')
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get(
    `/${path}`,
    urlencodedParser,
    controller.getData
)

router.post(
    `/${path}`,
    urlencodedParser,
    controller.insertData
)

router.get(
    `/${path}/:email`,
    urlencodedParser,
    controller.getSingle
)


router.put(
    `/${path}/:email`,
    urlencodedParser,
    controller.updateSingle
)


/**
 * Ruta: /user GET
 */
router.delete(
    `/${path}/:email`,
    urlencodedParser,
    controller.deleteSingle
)

module.exports = router