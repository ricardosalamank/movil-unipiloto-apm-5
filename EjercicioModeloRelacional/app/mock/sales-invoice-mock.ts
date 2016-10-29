import {SalesInvoice} from '../model/sales-invoice';
import {USERS} from '../mock/user-mock';
export const SALES: SalesInvoice[] = [
    {
        id: 1,
        customerId: USERS,
        invoiceAmount: "12345",
        tax: "12345"
    },
    {
        id: 2,
        customerId: USERS,
        invoiceAmount: "456",
        tax: "456"
    },
    {
        id: 3,
        customerId: USERS,
        invoiceAmount: "987",
        tax: "987"
    }
];