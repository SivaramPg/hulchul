import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.fryqx.mongodb.net/${process.env.MONGO_DB_DBNAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
