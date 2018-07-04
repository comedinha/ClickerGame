package click.myclick.dto.scene;

import click.myclick.dto.scene.save.*;

import java.io.Serializable;
import java.util.List;

public class SaveDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String idSave;
    private String idScene;
    private String idPlayer;
    private List<BuyedItems> buyedItems;
    private List<BuyedUpgrades> buyedUpgrades;
    private String clickCount;
    private List<Coin> coins;

    public SaveDTO() {
        this.buyedItems = null;
        this.buyedItems = null;
		this.coins = null;
		this.idSave = "";
		this.idScene = "";
		this.idPlayer = "";
		this.clickCount = "";
    }

	public String getIdsave()
	{
		return this.idSave;
	}

	public void setIdsave(String idSave)
	{
		this.idSave = idSave;
	}

	public String getIdscene()
	{
		return this.idScene;
	}

	public void setIdscene(String idScene)
	{
		this.idScene = idScene;
	}

	public String getIdplayer()
	{
		return this.idPlayer;
	}

	public void setIdplayer(String idPlayer)
	{
		this.idPlayer = idPlayer;
	}

	public List<BuyedItems> getBuyeditems()
	{
		return this.buyedItems;
	}

	public void setBuyeditems(List<BuyedItems> buyedItems)
	{
		this.buyedItems = buyedItems;
	}

	public List<BuyedUpgrades> getBuyedupgrades()
	{
		return this.buyedUpgrades;
	}

	public void setBuyedupgrades(List<BuyedUpgrades> buyedUpgrades)
	{
		this.buyedUpgrades = buyedUpgrades;
	}

	public String getClickcount()
	{
		return this.clickCount;
	}

	public void setClickcount(String clickCount)
	{
		this.clickCount = clickCount;
	}

	public List<Coin> getCoins()
	{
		return this.coins;
	}

	public void setCoins(List<Coin> coins)
	{
		this.coins = coins;
    }
}
