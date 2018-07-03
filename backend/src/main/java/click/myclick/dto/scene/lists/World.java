package click.myclick.dto.scene.lists;

import click.myclick.dto.scene.lists.world.GridButton;
import click.myclick.dto.scene.lists.world.GridContent;
import click.myclick.dto.scene.lists.world.GridInformation;
import click.myclick.dto.scene.lists.world.Tabs;
import click.myclick.dto.scene.lists.world.Layout;

import java.io.Serializable;
import java.util.List;

public class World implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private List<GridButton> gridButtons;
	private int gridButtonsCount;
    private List<GridContent> gridContent;
	private int gridCount;
    private List<GridInformation> gridInformation;
	private int gridInformationCount;
	private Layout layout;
    private String name;
	private String ref;
    private int tabCount;
	private List<Tabs> tabs;

	public World() {
		this.gridButtons = null;
		this.gridContent = null;
		this.gridInformation = null;
		this.layout = null;
		this.tabs = null;
	}

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

	public int getGridButtonsCount()
	{
		return this.gridButtonsCount;
	}

	public void setGridButtonsCount(int gridButtonsCount)
	{
		this.gridButtonsCount = gridButtonsCount;
	}

	public int getGridInformationCount()
	{
		return this.gridInformationCount;
	}

	public void setGridInformationCount(int gridInformationCount)
	{
		this.gridInformationCount = gridInformationCount;
	}

	public Layout getLayout()
	{
		return this.layout;
	}

	public void setLayout(Layout layout)
	{
		this.layout = layout;
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
