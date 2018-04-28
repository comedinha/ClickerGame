package click.myclick.dao;

import com.mongodb.DB;
import com.mongodb.DBCollection;

public class Usuario {

	public static void conectar() throws Exception {
    DB database = Conectar.getDatabase();
    DBCollection collection = database.getCollection("users");
    
	}
}
