export class Utils {
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    static getProductionUrl() {
        process.env.DEV_MODE === 'true' ? 'http://localhost:5000' : 'https://duckcards.vercel.app:5000'
    }
}
