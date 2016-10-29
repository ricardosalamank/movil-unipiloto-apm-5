"use strict";
var product_mock_1 = require('../mock/product-mock');
var sales_invoice_mock_1 = require('../mock/sales-invoice-mock');
exports.LINE = [
    {
        id: 1,
        salesInvoiceID: sales_invoice_mock_1.SALES,
        lineNumber: "1",
        productId: product_mock_1.PRODUCTS,
        purchasePrice: "20000"
    },
    {
        id: 2,
        salesInvoiceID: sales_invoice_mock_1.SALES,
        lineNumber: "2",
        productId: product_mock_1.PRODUCTS,
        purchasePrice: "30000"
    },
    {
        id: 3,
        salesInvoiceID: sales_invoice_mock_1.SALES,
        lineNumber: "3",
        productId: product_mock_1.PRODUCTS,
        purchasePrice: "50000"
    }
];
//# sourceMappingURL=line-item-mock.js.map