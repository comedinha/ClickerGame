package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.tabs.Item;

import java.io.Serializable;
import java.util.List;

public class Tabs implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private List<Item> items;
    private int itemsCount;
    private String refItem;
    private String refTab;
    private String title;
	private String type;
	
	public Tabs() {
		this.items = null;
	}

	public List<Item> getItems()
	{
		return this.items;
	}

	public void setItems(List<Item> items)
	{
		this.items = items;
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
