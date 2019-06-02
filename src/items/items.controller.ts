import { ItemsService } from './items.service';
import { CreateItemD } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsservice: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsservice.findOne(id);
    }

    @Post()
    create(@Body() createItemD: CreateItemD): string {
        return `Name: ${createItemD.name} Desc: ${createItemD.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemD, @Param('id') id): string {
        return `Update ${id} - Name ${updateItemDto.name}`;
    }

}
