package click.myclick.dto.scene.lists;

import click.myclick.dto.scene.lists.world;

import java.io.Serializable;
import java.util.List;

public class World implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
    private String ref;
    private int tabCount;
    private int gridCount;
    private List<GridButton> gridButtons;
    private List<GridContent> gridContent;
    private List<GridInformation> gridInformation;
	private List<Tabs> tabs;
	private List<Layout> layout;

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public int getTabCount()
	{
		return this.tabCount;
	}

	public void setTabCount(int tabCount)
	{
		this.tabCount = tabCount;
	}

	public int getGridCount()
	{
		return this.gridCount;
	}

	public void setGridCount(int gridCount)
	{
		this.gridCount = gridCount;
	}

	public List<GridButton> getGridButtons()
	{
		return this.gridButtons;
	}

	public void setGridButtons(List<GridButton> gridButtons)
	{
		this.gridButtons = gridButtons;
	}

	public List<GridContent> getGridContent()
	{
		return this.gridContent;
	}

	public void setGridContent(List<GridContent> gridContent)
	{
		this.gridContent = gridContent;
	}

	public List<GridInformation> getGridInformation()
	{
		return this.gridInformation;
	}

	public void setGridInformation(List<GridInformation> gridInformation)
	{
		this.gridInformation = gridInformation;
	}

	public List<Tabs> getTabs()
	{
		return this.tabs;
	}

	public void setTabs(List<Tabs> tabs)
	{
		this.tabs = tabs;
	}

}
