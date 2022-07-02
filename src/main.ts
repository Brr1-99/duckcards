import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { AppModule } from './app.module'

const port = process.env.PORT || 5000
const logger = new Logger('Init')

async function bootstrap() {
    // Create the Nest application
    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    app.useStaticAssets(join(__dirname, '..', 'static'))

    logger.verbose(`NestJS is running on http://localhost:${port}`)

    // Start the application
    await app.listen(port)
}
bootstrap()
