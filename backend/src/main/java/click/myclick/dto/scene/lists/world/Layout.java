package click.myclick.dto.scene.lists.world;

import click.myclick.dto.scene.lists.world.layout.Grid;
import click.myclick.dto.scene.lists.world.layout.Tab;
import click.myclick.dto.scene.lists.world.layout.Toolbar;

import java.io.Serializable;

public class Layout implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;
    
    private Grid grid;
    private Tab tab;
    private Toolbar toolbar;

	public Grid getGrid()
	{
		return this.grid;
	}

	public void setGrid(Grid grid)
	{
		this.grid = grid;
	}

	public Tab getTab()
	{
		return this.tab;
	}

	public void setTab(Tab tab)
	{
		this.tab = tab;
	}

	public Toolbar getToolbar()
	{
		return this.toolbar;
	}

	public void setToolbar(Toolbar toolbar)
	{
		this.toolbar = toolbar;
	}

}
