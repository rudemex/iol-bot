const iol = require('./node-iol');

iol.auth()
    .then(token => {
        return Promise.all([
            iol.getTickerValue(token, 'bcba', 'ay24'),
            iol.getTickerValue(token, 'bcba', 'ay24d'),
            iol.getTickerValue(token, 'bcba', 'TS'),
            iol.getTickerValue(token, 'nyse', 'TS')])
            .then(values => {
                let ay24 = values[0];
                let ay24d = values[1];


                let ccl = ay24.ultimoPrecio/ay24d.ultimoPrecio;
                let tsPriceInArg = values[2].ultimoPrecio;
                let tsPriceInUsa = values[3].ultimoPrecio;

                console.log('AY24 price:', ay24.ultimoPrecio);
                console.log('AY24D price', ay24d.ultimoPrecio);
                console.log('TS price in ARG', tsPriceInArg);
                console.log('TS price in USA', tsPriceInUsa);
                console.log('La compra de dólares MEP cuesta:', ccl);

                if ( ((((tsPriceInUsa * ccl) / tsPriceInArg) / 2) - 1) > 0.01 ) { //ARBITRAGE!!!
                    let endOfToday = new Date();
                    endOfToday.setHours(23,59,59,999);
                    console.log('tsPriceInArg: ',tsPriceInArg);
                    console.log('endOfToday: ',endOfToday);
                    //return iol.buy(token, 'bcba', 'TS', 1, tsPriceInArg, 't0', endOfToday)
                }
            })
    })
    .catch(console.log)