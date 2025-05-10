import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Envs } from './common/config';
import { AllExceptionsFilter } from './common/middleware/erroeHandler';
import { ResponseInterceptor } from './common/middleware/responseHandler';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RedisModule } from './redis/redis.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe())
    // app.useGlobalInterceptors(new ResponseInterceptor());

    app.useGlobalFilters(new AllExceptionsFilter());

    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);


    await app.listen(Envs.PORT ?? 3000);

    const app2 = await NestFactory.createMicroservice<MicroserviceOptions>(RedisModule, {
        transport: Transport.REDIS,
        options: {
            host: '127.0.0.1',
            port: 6379,
        },
    });

    await app2.listen();
}
bootstrap();
