const currency = require('currency.js');
const Table = require('easy-table');
const moment = require('moment-timezone');

// Format num to ARS currency
const ars = value => currency(value, { symbol: "$ ", precision: 2, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
// Format num to U$S currency
const usd = value => currency(value, { symbol: "U$S ", precision: 2, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
// Format num to currency
const amount = (symbol = null, value) => currency(value, { symbol: `${ (symbol) ? `${symbol} ` :'' }`, precision: 2, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
// Format num
const num = (symbol = null, value) => currency(value, { symbol: `${ (symbol) ? `${symbol} ` :'' }`, precision: 0, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
// Format date
const formatDate = (date, formatDate = 'YYYY-MM-DD HH:mm:ss', timeZone = 'America/Argentina/Buenos_Aires') => moment(date).tz(timeZone).format(formatDate);
// Format date UTC 2013-11-18T11:55Z
const formatDateUTC = (date, formatDate = 'YYYY-MM-DDTHH:mm:ss.SSSZ', timeZone = 'America/Argentina/Buenos_Aires') => moment(date).tz(timeZone).format(formatDate);
// Get current date with formats
const currentDay = () => {
    let now = moment();

    let datesObj = {
        "date":{
            "now": formatDate(now),
            "start": formatDate(now.startOf('day')),
            "end": formatDate(now.endOf('day')),
        },
        "extended": {
            "now": formatDate(now, 'YYYY-MM-DD HH:mm:ss.SSS'),
            "start": formatDate(now.startOf('day'), 'YYYY-MM-DD HH:mm:ss.SSS'),
            "end": formatDate(now.endOf('day'), 'YYYY-MM-DD HH:mm:ss.SSS'),
        },
        "iso":{
            "now": `${ now.toISOString() }`,
            "start": `${ now.startOf('day').toISOString()} `,
            "end": `${ now.endOf('day').toISOString() }`,
        },
        "utc":{
            "now": `${ formatDateUTC(now) }`,
            "start": `${ formatDateUTC(now.startOf('day')) }`,
            "end": `${ formatDateUTC(now.endOf('day')) }`,
        }
    };

    return datesObj;
};

// Format json to table log
const cTable = (symbol = null, data) => {
    let tablaDePuntas = new Table;

    data.forEach( row => {
        tablaDePuntas.cell('Cant. Compra', num('U.', row.cantidadCompra))
        tablaDePuntas.cell('Precio Compra', amount(symbol, row.precioCompra))
        tablaDePuntas.cell('Precio Venta', amount(symbol, row.precioVenta))
        tablaDePuntas.cell('Cant. Venta', num('U.', row.cantidadVenta))
        tablaDePuntas.newRow()
    });

    return tablaDePuntas.toString();
}

module.exports = {
    ars,
    usd,
    amount,
    num,
    currentDay,
    formatDate,
    formatDateUTC,
    cTable
};
