var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var menu = models.menu_iteam;

//readAll method call
router.get('/readAll', function(req, res) {


    menu.findAll({


    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json([]);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});
//read method call
router.get('/read/:id', function(req, res) {
    console.log(req.params)
    menu.findOne({
            where: {
                menu_id: req.params.id
            }
        })
        .then(function(results) {
            if (results) {
                res.json(results);
            } else {
                res.json(null);
            }
        }).catch(function(err) {
            console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
            res.json({
                success: false,
                message: 'Record(s) not found.'
            });
        });
});


//insert method call
router.post('/create', function(req, res) {
    console.log(req.body)

    menu.create(req.body).then(function(results) {
        if (results) {
            res.json({ success: true, message: "menu-iteam is Inserted" });
        } else {
            res.json({ success: false, message: "menu-iteam not Inserted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "menu-iteams is not Inserted" });
    });


});
//update method call
router.put('/update/:id', function(req, res) {
        console.log(req.body)
        menu.update(req.body, {
            where: {
                menu_id: req.params.id
            }
        }).then(function(results) {
            if (results) {
                res.json({ success: true, message: "menu-iteam is  Updated" });
            } else {
                res.json({ success: false, message: "menu-iteam is not Updated" });
            }
        }).catch(function(err) {
            console.log(err)
            res.json({ success: false, message: "menu-iteam is not Updated" });
        });
    })
    //detete method call
router.delete('/delete/:id', jsonParser, function(req, res) {
    console.log(req.params)
    menu.destroy(({
        where: {
            menu_id: req.params.id
        }

    })).then(function(results) {
        if (results) {
            res.json({ success: true, message: "menu-iteam is deleted" });
        } else {
            res.json({ success: false, message: "menu-iteam is not deleted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "menu-iteam is not deleted" });
    });
})

module.exports = router;