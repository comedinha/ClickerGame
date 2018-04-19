package click.myclick.dao;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class Conectar {
	private static MongoClient mongoClient;
	private static DB database;

	public static void conecta() throws Exception {
		if (mongoClient == null) {
			mongoClient = new MongoClient(new MongoClientURI("mongodb://myproject:lsI8f8ZX41WVuUB9738n26TDWUMJpNZtA5StMrnEt0e0aHTy2dDhQFAN30pKa6esHDMy4eejxXff01BKsdISIg==@myproject.documents.azure.com:10255/?ssl=true&replicaSet=globaldb"));
			database = mongoClient.getDB("myclick");
			//saveTest();
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
