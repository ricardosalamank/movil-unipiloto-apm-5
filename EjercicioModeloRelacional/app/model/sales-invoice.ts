import {User} from '../model/user';
export class SalesInvoice {
    id: number;
    customerId: User[];
    invoiceAmount: string;
    tax: string;
}