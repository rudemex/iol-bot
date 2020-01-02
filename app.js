const iol = require('./node-iol-v2');

iol.auth().then(token => {
    return Promise.all([
        iol.getTickerValueTest(token, 'bcba', 'ay24'),
        iol.getTickerValueTest(token, 'bcba', 'ay24d')
    ]).then( (ay24) => {
        //console.log("ay24: ",ay24);
        console.log('AY24 price:', ay24[0].ultimoPrecio);
        console.log('AY24D price', ay24[1].ultimoPrecio);

        console.log('Purchasing dollars in the stock market costs:', ay24[0].ultimoPrecio/ay24[1].ultimoPrecio);
    })
}).catch( e => {
    console.log(e);
});