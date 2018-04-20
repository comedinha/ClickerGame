package click.myclick.dao;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class Usuario {

	public static void conectar() throws Exception {
    DB database = Conectar.getDatabase();
    DBCollection collection = database.getCollection("users");
    
	}
}
