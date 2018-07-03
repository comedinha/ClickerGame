package click.myclick.dto.scene.lists.world.tabs;

import click.myclick.dto.scene.lists.world.tabs.item.Grid;

import java.io.Serializable;
import java.util.List;

public class Item implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String basePrice;
	private String coin;
	private String countPerSecond;
	private String description;
	private String divRef;
	private String formula;
	private List<Grid> grids;
	private String image;
	private String ref;
	private String startCount;
	private String title;
	private String item;
	private String price;
	private String tab;
	private String type;

	public String getBaseprice()
	{
		return this.basePrice;
	}

	public void setBaseprice(String basePrice)
	{
		this.basePrice = basePrice;
	}

	public String getCoin()
	{
		return this.coin;
	}

	public void setCoin(String coin)
	{
		this.coin = coin;
	}

	public String getCountpersecond()
	{
		return this.countPerSecond;
	}

	public void setCountpersecond(String countPerSecond)
	{
		this.countPerSecond = countPerSecond;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getDivref()
	{
		return this.divRef;
	}

	public void setDivref(String divRef)
	{
		this.divRef = divRef;
	}

	public String getFormula()
	{
		return this.formula;
	}

	public void setFormula(String formula)
	{
		this.formula = formula;
	}

	public List<Grid> getGrids()
	{
		return this.grids;
	}

	public void setGrids(List<Grid> grids)
	{
		this.grids = grids;
	}

	public String getImage()
	{
		return this.image;
	}

	public void setImage(String image)
	{
		this.image = image;
	}

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public String getStartcount()
	{
		return this.startCount;
	}

	public void setStartcount(String startCount)
	{
		this.startCount = startCount;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getItem()
	{
		return this.item;
	}

	public void setItem(String item)
	{
		this.item = item;
	}

	public String getPrice()
	{
		return this.price;
	}

	public void setPrice(String price)
	{
		this.price = price;
	}

	public String getTab()
	{
		return this.tab;
	}

	public void setTab(String tab)
	{
		this.tab = tab;
	}

	public String getType()
	{
		return this.type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

}