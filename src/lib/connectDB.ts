import mongoose, { ConnectOptions } from 'mongoose';

interface IConnect {
    isConnected?: number | undefined;
}

const connection: IConnect = {}

const dbConnect = async () => {
    if (connection.isConnected) return

    const db = await mongoose.
        connect(process.env.DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)

    connection.isConnected = db.connections[0].readyState
}
export default dbConnect