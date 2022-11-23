const model = require('../Models/user')
const mongoose = require('mongoose');
const { json } = require('body-parser');




exports.getData = (req, res) => {
    model.find((err, docs) => {
        res.json({
            docs
        })
    })
}

exports.getSingle = (req, res) => {
    model.find({ email: req.params.email },
        (err, docs) => {
            res.send(      
                         
                docs
            )
        })
}

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

exports.updateSingle = (req, res) => {
    const body = req.body
    model.updateOne(
        { email:req.params.email },
        body,
        (err, docs) => {
            res.send({
                docs
            })
        })
}

exports.deleteSingle = (req, res) => {
    model.deleteOne(
        { email: req.params.email },
        (err, docs) => {
            res.send({
                docs
            })
        })
}
