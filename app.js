const iol = require('./node-iol-v2');

/*
* ================================================
* Estado de la cuenta
* ================================================
*/

/*
iol.auth().then( token => {
    return Promise.all([
        iol.getAccountStatus(token)
    ]).then( data => {
        console.log("[i] Estado de la cuenta: ", data[0]);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});*/

/*
* ================================================
* Portfolio
* ================================================
*/

/*iol.auth().then( token => {
    return Promise.all([
        iol.getPortfolio(token)
    ]).then( data => {
        console.log("[i] Portfolio: ", data);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});*/

/*
* ================================================
* Operacions (compra y venta)
* ================================================
*/

/*iol.auth().then( token => {
    return Promise.all([
        iol.getOperations(token)
    ]).then( data => {
        console.log("[i] Operaciones: ", data);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});*/

/*
* ================================================
* Operacion (nro de operacion)
* ================================================
*/

/*iol.auth().then( token => {
    return Promise.all([
        iol.getOperation(token, '20674919')
    ]).then( data => {
        console.log("[i] Operacion 20674919: ", data);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});*/

/*
* ================================================
* Operacion (nro de operacion)
* ================================================
*/

iol.auth().then( token => {
    return Promise.all([
        iol.getOperation(token, '20674919')
    ]).then( data => {
        console.log("[i] Operacion 20674919: ", data);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});


/*
* ================================================
* Cotizacion bono
* ================================================
*/

/*
iol.auth().then(token => {
    return Promise.all([
        iol.getTickerValueTest(token, 'bcba', 'ay24'),
        iol.getTickerValueTest(token, 'bcba', 'ay24d')
    ]).then( (ay24) => {
        //console.log("ay24: ",ay24);
        console.log('AY24 price:', ay24[0].ultimoPrecio);
        console.log('AY24D price', ay24[1].ultimoPrecio);

        console.log('Purchasing dollars in the stock market costs:', ay24[0].ultimoPrecio/ay24[1].ultimoPrecio );
    })
}).catch( e => {
    console.log(e);
});*/


