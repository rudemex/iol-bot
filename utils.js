const currency = require('currency.js');
const Table = require('easy-table');

const ARS = value => currency(value, { symbol: "$ ", precision: 2, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
const USD = value => currency(value, { symbol: "U$S ", precision: 2, formatWithSymbol: true, decimal: ',', separator: '.'}).format(true);
const NUM = value => currency(value, { symbol: "", precision: 0, formatWithSymbol: false, decimal: ',', separator: '.'}).format(false);
const cTable = data => {
    let tablaDePuntas = new Table;

    data.forEach( row => {
        tablaDePuntas.cell('Cant. Compra', NUM(row.cantidadCompra))
        tablaDePuntas.cell('Precio Compra', ARS(row.precioCompra))
        tablaDePuntas.cell('Precio Venta', ARS(row.precioVenta))
        tablaDePuntas.cell('Cant. Venta', NUM(row.cantidadVenta))
        tablaDePuntas.newRow()
    });

    return tablaDePuntas.toString();
}

module.exports = {
    ARS,
    USD,
    NUM,
    cTable
};
