/*import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
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
export default db; */


import { MongoClient } from "mongodb";

if (!process.env.MONGO_PASSWORD) {
  throw new Error("MONGO_PASSWORD environment variable is missing");
}

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());

const connectionString =
  `mongodb+srv://kapilsaini23032002_db_user:${password}@cluster0.s6vjrjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(connectionString);

let db;

try {
  await client.connect();
  console.log("MongoDB connected successfully");

  db = client.db("integration_ninjas");

} catch (err) {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
}

export default db;
