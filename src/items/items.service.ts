import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '3436354545454',
            name: 'Item One',
            qty: 100,
            description: 'This is Item one',
        },
        {
            id: '898989545454',
            name: 'Item Two',
            qty: 50,
            description: 'This is Item two',
        },
    ];

    findAll(): Item[] {
        return this.items;
    }

}
