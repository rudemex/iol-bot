const iol = require('./node-iol');
const signale  =  require('signale');
const utils = require('./utils.js');

//2020-01-08T02:59:59.999Z
console.log( utils.currentDay());
//console.log( utils.formatDateUTC( utils.currentDay().end ) );

/*
iol.auth().then(token => {
    return Promise.all([
    iol.getTickerValue(token, 'bcba', 'ay24'),
    iol.getTickerValue(token, 'bcba', 'ay24d'),
    iol.getTickerValue(token, 'bcba', 'TS'),
    iol.getTickerValue(token, 'nyse', 'TS')]).then(values => {
        let ay24 = values[0];
        let ay24d = values[1];


        let ccl = ay24.ultimoPrecio/ay24d.ultimoPrecio;
        let tsPriceInArg = values[2].ultimoPrecio;
        let tsPriceInUsa = values[3].ultimoPrecio;

        signale.info('AY24:', ay24.ultimoPrecio);
        signale.info('AY24D', ay24d.ultimoPrecio);
        signale.info('TS price in ARG', tsPriceInArg);
        signale.info('TS price in USA', tsPriceInUsa);
        signale.info('La compra de dólar bolsa cuesta:', ccl);

        if ( ((((tsPriceInUsa * ccl) / tsPriceInArg) / 2) - 1) > 0.01 ) { //ARBITRAGE!!!
            let endOfToday = new Date();
            endOfToday.setHours(23,59,59,999);
            signale.info('tsPriceInArg: ',tsPriceInArg);
            signale.info('endOfToday: ',endOfToday);
            //return iol.buy(token, 'bcba', 'TS', 1, tsPriceInArg, 't0', endOfToday)
        }
    })
}).catch(signale.error)*/
