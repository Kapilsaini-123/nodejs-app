import { MongoClient } from "mongodb";

const password = encodeURIComponent{process.env.MONGO_PASSWORD.trim()};
const connectionString = `mongodb+srv://kapilsaini23032002_db_user:${password}@cluster0.s6vjrjn.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
