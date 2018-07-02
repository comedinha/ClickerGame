package click.myclick.dto.scene.lists;

import java.io.Serializable;
import java.util.List;

public class Coin implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String symbol;
    private int used;
    private List<World> worlds;

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getSymbol()
	{
		return this.symbol;
	}

	public void setSymbol(String symbol)
	{
		this.symbol = symbol;
	}

	public int getUsed()
	{
		return this.used;
	}

	public void setUsed(int used)
	{
		this.used = used;
	}

	public List<World> getWorlds()
	{
		return this.worlds;
	}

	public void setWorlds(List<World> worlds)
	{
		this.worlds = worlds;
	}
}
