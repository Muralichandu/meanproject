const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    const orderlist = Order.find();

    if(!orderlist){
        res.status(500).send('no orders list')
    }
    else{
        res.status(200).send(orderlist)
    }
})

router.post('/',(req,res)=>{

    let order = new Order({
        orderitems = req.body.orderitems,
        zip = req.body.zip,
        phonenumber = req.body.phonenumber,
        status = req.body.status,
        city = req.body.city,
        country = req.body.country,
        Addresstwo= req.body.Addresstwo,
        Addressone = req.body.Addressone,
        totalprice = req.body.totalprice
    })
    let order = Order.save();
    if(!order){
        res.status(500).send('no orders list')
    }
    else{
        res.status(200).send(order)
    }
})
module.exports = router