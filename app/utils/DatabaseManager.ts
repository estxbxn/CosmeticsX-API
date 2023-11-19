import Env from "@ioc:Adonis/Core/Env";

const MongoClient = require("mongodb").MongoClient;

export class DatabaseManager {
  private static dbUrl: string = Env.get("MONGODB_URL");

  public static async insert_obj(database, collection, object) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).insertOne(object);

    await db.close();
    return result;
  }

  public static async delete_obj(database, collection, object) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).deleteOne(object);

    await db.close();
    return result;
  }

  public static async delete_objs(database, collection, object) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).deleteMany(object);

    await db.close();
    return result;
  }

  public static async update_obj(database, collection, object, new_data) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).updateOne(object, new_data);

    await db.close();
    return result;
  }

  public static async replace_one(database, collection, object, new_data) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo
      .collection(collection)
      .replaceOne(object, new_data);

    await db.close();
    return result;
  }

  public static async select_one(database, collection, object) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).findOne(object);

    await db.close();
    return result;
  }

  public static async select_all(database, collection, object) {
    const db = await MongoClient.connect(DatabaseManager.dbUrl);
    let dbo = db.db(database);
    const result = await dbo.collection(collection).find(object).toArray();

    await db.close();
    return result;
  }
}
