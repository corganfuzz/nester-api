import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
    // private readonly items: Item[] = [
    //     {
    //         id: '3436354545454',
    //         name: 'Item One',
    //         qty: 100,
    //         description: 'This is Item one',
    //     },
    //     {
    //         id: '898989545454',
    //         name: 'Item Two',
    //         qty: 50,
    //         description: 'This is Item two',
    //     },
    // ];

    // Replacing findall with async method

    // findAll(): Item[] {
    //     return this.items;
    // }

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    // Replacing findOne with async method

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id});
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise <Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
    }

    // findOne(id: string): Item {
    //     return this.items.find( item => item.id === id);
    // }

}
