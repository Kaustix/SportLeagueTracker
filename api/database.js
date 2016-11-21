import mongoose from 'mongoose';
import config from 'config';

export function Connect() {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.get('database.connection'));

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Database Connection Error:"));
    db.once("open", () => { console.log("Database Connected"); });
}