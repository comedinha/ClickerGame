package click.myclick.dto.scene;

import click.myclick.dto.scene.lists.*;

import java.io.Serializable;
import java.util.List;

public class SceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private List<Coin> coins;
	private int coinsCount;
    private String completeDescription;
	private String id;
    private String image;
    private String name;
    private String smallDescription;
	private List<World> worlds;
	private String idCreator;

	public List<Coin> getCoins()
	{
		return this.coins;
	}

	public void setCoins(List<Coin> coins)
	{
		this.coins = coins;
	}

	public int getCoinscount()
	{
		return this.coinsCount;
	}

	public void setCoinscount(int coinsCount)
	{
		this.coinsCount = coinsCount;
	}

	public String getCompletedescription()
	{
		return this.completeDescription;
	}

	public void setCompletedescription(String completeDescription)
	{
		this.completeDescription = completeDescription;
	}

	public String getId()
	{
		return this.id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getSmalldescription()
	{
		return this.smallDescription;
	}

	public void setSmalldescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
	}

	public List<World> getWorlds()
	{
		return this.worlds;
	}

	public void setWorlds(List<World> worlds)
	{
		this.worlds = worlds;
	}

	public String getIdcreator()
	{
		return this.idCreator;
	}

	public void setIdcreator(String idCreator)
	{
		this.idCreator = idCreator;
	}
}
