const iol = require('./node-iol-v2');
const signale  =  require('signale');
const utils = require('./utils.js');
const request = require("request");

//console.log( utils.currentDay() );

let urlAY24 = "https://www.invertironline.com/Titulo/GraficoIntradiario?idTitulo=79217&idTipo=3&idMercado=1";
let urlAY24D = "https://www.invertironline.com/Titulo/GraficoIntradiario?idTitulo=79234&idTipo=3&idMercado=1";
let serverTime = "https://www.invertironline.com/api/cotizaciones/server_time";

request({
    url: urlAY24,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})

/*iol.auth().then(token => {
    return Promise.all([
    iol.getTickerValue(token, 'bcba', 'ay24'),
    iol.getTickerValue(token, 'bcba', 'ay24d'),
    iol.getTickerValue(token, 'bcba', 'ao20'),
    iol.getTickerValue(token, 'bcba', 'ao20d')]).then(values => {
        let ay24 = values[0];
        let ay24d = values[1];
        let ao20 = values[2];
        let ao20d = values[3];

        let ccl = ay24.ultimoPrecio/ay24d.ultimoPrecio;
        let ao20Price = ao20.ultimoPrecio;
        let ao20DPric = ao20d.ultimoPrecio;

        signale.info('AY24:', ay24.ultimoPrecio);
        signale.info('AY24D', ay24d.ultimoPrecio);
        signale.info('AO20', ao20Price);
        signale.info('AO20D', ao20DPric);
        signale.info('La compra de dólar bolsa cuesta:', ccl);


        if ( ((((ao20DPric * ccl) / ao20Price) / 2) - 1) > 0.01 ) { //ARBITRAGE!!!
            let endOfToday = utils.currentDay().iso.end;
            signale.info('ao20Price: ',ao20Price);
            signale.info('endOfToday: ',endOfToday);
            //return iol.buy(token, 'bcba', 'TS', 1, ao20Price, 't0', endOfToday)
        }
    })
}).catch(signale.error)*/
