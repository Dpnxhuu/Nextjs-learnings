import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dpnxhuu@0579",       
  database: "authapp",
});

export default db;