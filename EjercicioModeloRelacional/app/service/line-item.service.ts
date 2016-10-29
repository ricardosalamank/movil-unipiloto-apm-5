import {Injectable} from "@angular/core";
import {LINE} from "../mock/line-item-mock";
import {LineItem} from "../model/line-item";

@Injectable()
export class LineService{
    getLines(): Promise<LineItem[]>{
        return Promise.resolve(LINE);
    }

    getLine(id: number): Promise<LineItem> {
        return this.getLines()
            .then(lines => lines.find(line => line.id === id));
    }
}