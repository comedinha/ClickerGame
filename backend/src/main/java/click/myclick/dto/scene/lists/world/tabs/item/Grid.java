package click.myclick.dto.scene.lists.world.tabs.item;

import click.myclick.dto.scene.lists.world.layout.grid.BackgroundColor;

import java.io.Serializable;

public class Grid implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;    

    private BackgroundColor backgroundColor;
	private String backgroundImage;
	
	public Grid() {
		this.backgroundColor = null;
	}

	public BackgroundColor getBackgroundcolor()
	{
		return this.backgroundColor;
	}

	public void setBackgroundcolor(BackgroundColor backgroundColor)
	{
		this.backgroundColor = backgroundColor;
	}

	public String getBackgroundimage()
	{
		return this.backgroundImage;
	}

	public void setBackgroundimage(String backgroundImage)
	{
		this.backgroundImage = backgroundImage;
	}    
}