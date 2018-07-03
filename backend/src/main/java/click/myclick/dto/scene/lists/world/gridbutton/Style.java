package click.myclick.dto.scene.lists.world.gridbutton;

import click.myclick.dto.scene.lists.world.layout.grid.BackgroundColor;

import java.io.Serializable;

public class Style implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private BackgroundColor backgroundColor;
	private String borderRadius;
	
	public Style() {
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

	public String getBorderRadius()
	{
		return this.borderRadius;
	}

	public void setBorderRadius(String borderRadius)
	{
		this.borderRadius = borderRadius;
	}

}
