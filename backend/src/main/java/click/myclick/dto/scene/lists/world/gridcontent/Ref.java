package click.myclick.dto.scene.lists.world.gridcontent;

import click.myclick.dto.scene.lists.world.gridbutton.Style;

import java.io.Serializable;

public class Ref implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private Style style;
    private int itemsCount;
    private String refItem;
    private String refTab;
    private String title;
    private String type;

	public Style getStyle()
	{
		return this.style;
	}

	public void setStyle(Style style)
	{
		this.style = style;
	}	

	public int getItemsCount()
	{
		return this.itemsCount;
	}

	public void setItemsCount(int itemsCount)
	{
		this.itemsCount = itemsCount;
	}

	public String getRefItem()
	{
		return this.refItem;
	}

	public void setRefItem(String refItem)
	{
		this.refItem = refItem;
	}

	public String getRefTab()
	{
		return this.refTab;
	}

	public void setRefTab(String refTab)
	{
		this.refTab = refTab;
	}

	public String getTitle()
	{
		return this.title;
	}

	public void setTitle(String title)
	{
		this.title = title;
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
