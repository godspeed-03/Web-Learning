import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { createsong } from './dto/createsong.dto';

@Injectable()
export class SongsService implements OnModuleInit {
  private songs: createsong[] = []; // In-memory array
  private redisClient: RedisClientType;

  async onModuleInit() {
    this.redisClient = createClient({ url: 'redis://localhost:6379' });
    this.redisClient.on('error', (err) => console.error('Redis error:', err));
    await this.redisClient.connect();
    this.songs = [{"title":"Bohemian Rhapsody", "artist":"Queen"}]
  }

  async create(song: createsong) {
    this.songs.push(song);
    await this.redisClient.del('songs'); // Invalidate cache
    return { message: 'Created successfully', data: this.songs };
  }

  async findAll() {
    const cached = await this.redisClient.get('songs');
    console.log(cached)
    if (cached) {
      return {
        fromCache: true,
        data: cached,
      };
    }

    await this.redisClient.set('songs', JSON.stringify(this.songs), {
      EX: 60, // Cache for 60 seconds
    });

    return {
      fromCache: false,
      data: this.songs,
    };
  }

  async findById(id: string) {
    const song = this.songs[+id];
    return song || null;
  }
}
