const iol = require('./node-iol-v2');
const utils = require('./utils.js');

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
* Get Ticker
* ================================================
*/
/*iol.auth().then( token => {
    return Promise.all([
        iol.getTicker(token, 'bcba', 'ay24'),
    ]).then( data => {
        console.log("[i] Data: ", data);
    }).catch( e => {
        console.log(e);
    });
}).catch( e => {
    console.log(e);
});*/

/*
* ================================================
* Cotizacion bono
* ================================================
*/
iol.auth().then(token => {
    return Promise.all([
        iol.getTickerValueTest(token, 'bcba', 'ay24'),
        iol.getTickerValueTest(token, 'bcba', 'ay24d')
    ]).then( (values) => {
        let ay24 = values[0];
        let ay24d = values[1];
        let ccl = ay24.ultimoPrecio/ay24d.ultimoPrecio;
        let myCcl = 3000 / ay24d.ultimoPrecio;

        console.log(`AY24 price: ${ utils.ARS(ay24.ultimoPrecio) }`);
        console.log(`AY24D price: ${ utils.USD(ay24d.ultimoPrecio) }`);
        console.log(`La compra de dólares MEP cuesta: ${ utils.ARS(ccl) }` );
        console.log(`* ================================================ *` );
        console.log(`Mi MEP: ${ utils.ARS(myCcl) }\n` );

        console.log(`CAJA DE PUNTAS AY24\n=======================================================\n`,utils.cTable(ay24.puntas));
        console.log(`CAJA DE PUNTAS AY24D\n=======================================================\n`,utils.cTable(ay24d.puntas));


    })
}).catch( e => {
    console.log(e);
});
