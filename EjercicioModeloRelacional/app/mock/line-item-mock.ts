import {LineItem} from '../model/line-item';
import {PRODUCTS} from '../mock/product-mock';
import {SALES} from '../mock/sales-invoice-mock';

export const LINE: LineItem[] = [
    {
        id: 1,
        salesInvoiceID: SALES,
        lineNumber: "1",
        productId : PRODUCTS,
        purchasePrice: "20000"
    },
    {
        id: 2,
        salesInvoiceID: SALES,
        lineNumber: "2",
        productId : PRODUCTS,
        purchasePrice: "30000"
    },
    {
        id: 3,
        salesInvoiceID: SALES,
        lineNumber: "3",
        productId : PRODUCTS,
        purchasePrice: "50000"
    }
];