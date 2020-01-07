const iol = require('./node-iol-v2');
const signale  =  require('signale');
const utils = require('./utils.js');

signale.info(`DATE: ${ utils.formatDate('2020-01-07T03:01:16.9960595-03:00') }`);

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
        signale.success("[i] Estado de la cuenta: ", data[0]);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
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
        signale.success("[i] Portfolio: ", data);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
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
        signale.success("[i] Operaciones: ", data);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
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
        signale.success("[i] Operacion 20674919: ", data);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
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
        signale.success("[i] Operacion 20674919: ", data);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
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
        signale.success("[i] Data: ", data);
    }).catch( e => {
        signale.error(e);
    });
}).catch( e => {
    signale.error(e);
});*/

/*
* ================================================
* Cotizacion bono
* ================================================
*/
/*iol.auth().then(token => {
    return Promise.all([
        iol.getTickerValueTest(token, 'bcba', 'ay24'),
        iol.getTickerValueTest(token, 'bcba', 'ay24d')
    ]).then( (values) => {
        let ay24 = values[0];
        let ay24d = values[1];
        let ccl = ay24.ultimoPrecio/ay24d.ultimoPrecio;
        let myCcl = 3000 / ay24d.ultimoPrecio;

        //signale.success(values);

        signale.info(`AY24: ${ utils.ars(ay24.ultimoPrecio) }`);
        signale.info(`AY24D: ${ utils.usd(ay24d.ultimoPrecio) }`);

        signale.info(`La compra de dólar bolsa cuesta: ${ utils.ars(ccl) }` );
        signale.info(`* ================================================ *\n` );
        //signale.info(`Mi MEP: ${ utils.ars(myCcl) }\n` );

        if(ay24.puntas.length > 0 && ay24d.puntas.length > 0) {
            signale.success(`\nCAJA DE PUNTAS AY24\n=======================================================\n`,utils.cTable('$', ay24.puntas));
            signale.success(`\nCAJA DE PUNTAS AY24D\n=======================================================\n`,utils.cTable('U$D', ay24d.puntas));
        }

    })
}).catch( e => {
    signale.error(e);
});*/
