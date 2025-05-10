import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { createsong } from './dto/createsong.dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  async findAll() {
    try {
      return await this.songsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch songsss',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const song = await this.songsService.findById(id);
      if (!song) {
        throw new HttpException('Song not found', HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        song,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch song by ID',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() song: createsong) {
    try {
      return await this.songsService.create(song);
    } catch (error) {
      throw new HttpException(
        'Failed to create song',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
