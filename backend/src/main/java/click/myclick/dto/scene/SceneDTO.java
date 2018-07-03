package click.myclick.dto.scene;

import click.myclick.dto.scene.lists.*;

import java.io.Serializable;
import java.util.List;

public class SceneDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String id;
	private String idCreator;
    private String name;
    private String smallDescription;
    private String completeDescription;
    private String image;
	private List<World> worlds;
	private List<Coin> coins;
	private int coinsCount;

	public SceneDTO() {
		this.id = null;
	}

	public String getId()
	{
		return this.id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getIdCreator()
	{
		return this.idCreator;
	}

	public void setIdCreator(String idCreator)
	{
		this.idCreator = idCreator;
    }
    public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
    }
    
    public String getSmallDescription()
	{
		return this.smallDescription;
	}

	public void setSmallDescription(String smallDescription)
	{
		this.smallDescription = smallDescription;
    }
    
    public String getCompleteDescription()
	{
		return this.completeDescription;
	}

	public void setCompleteDescription(String completeDescription)
	{
		this.completeDescription = completeDescription;
    }
    
    public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
	}
	
	public List<World> getWorlds()
	{
		return this.worlds;
	}

	public void setWorlds(List<World> worlds)
	{
		this.worlds = worlds;
	}

	public List<Coin> getCoins()
	{
		return this.coins;
	}

	public void setCoins(List<Coin> coins)
	{
		this.coins = coins;
	}

	public int getCoinsCount()
	{
		return this.coinsCount;
	}

	public void setCoinsCount(int coinsCount)
	{
		this.coinsCount = coinsCount;
	}
}
