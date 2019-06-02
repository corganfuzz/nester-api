import { CreateItemD } from './dto/create-item.dto';
import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
// import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    // The old express way

    // @Get()
    // findAll(@Req() req: Request, @Res() res: Response): Response {
    //     console.log(req.url);
    //     return res.send('Hello WOrld');
    // }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;
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
