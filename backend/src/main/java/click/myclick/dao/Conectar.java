package click.myclick.dao;

import com.mongodb.*;

public class Conectar {
	private static MongoClient mongoClient;
	private static DB database;

	public static void conecta() throws Exception {
		if (mongoClient == null) {
			mongoClient = new MongoClient();
			database = mongoClient.getDB("myclick");
			saveTest();
		}
	}

	public static DB getDatabase() throws Exception {
		return database;
	}

	public static void saveTest() throws Exception {
		DBObject test = new BasicDBObject("_id", "1")
						.append("message", "Hello");
		DBCollection collection = database.getCollection("test");

		collection.insert(test);
	}

	public static String getTest() throws Exception {
		DBCollection collection = database.getCollection("test");
		DBCursor cursor = collection.find(new BasicDBObject("_id", "1"));
		return (String) cursor.one().get("message");
	}
}
