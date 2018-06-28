package click.myclick.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Document
public class SaveGame extends BaseEntity implements Serializable {

    private static final long serialVersionUID = 8571261118900116242L;
    
    private String idPlayer;
	private String idGame;
	//Atributos relacionados ao save...

	public String getIdplayer()
	{
		return this.idPlayer;
	}

	public void setIdplayer(String idPlayer)
	{
		this.idPlayer = idPlayer;
	}

	public String getIdgame()
	{
		return this.idGame;
	}

	public void setIdgame(String idGame)
	{
		this.idGame = idGame;
	}
}
