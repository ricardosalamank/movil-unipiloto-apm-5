import {SalesInvoice} from '../model/sales-invoice';
import {Product} from '../model/product';
export class LineItem {
    id: number;
    salesInvoiceID: SalesInvoice[];
    lineNumber: string;
    productId: Product[];
    purchasePrice: string;
}