package click.myclick.dto.scene.lists.world.tabs;

import click.myclick.dto.scene.lists.world.tabs.item.Grid;

import java.io.Serializable;
import java.util.List;

public class Item implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String countPerSecond;
	private String description;
	private String divRef;
	private String formula;
    private List<Grid> grids;
    private String image;
	private String ref;
	private String startCount;
	private String startPrice;
	private String title;
	
	public Item() {
		this.grids = null;
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

	public String getStartprice()
	{
		return this.startPrice;
	}

	public void setStartprice(String startPrice)
	{
		this.startPrice = startPrice;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

}