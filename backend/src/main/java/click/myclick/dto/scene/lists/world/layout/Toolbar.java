package click.myclick.dto.scene.lists.world.layout;

import click.myclick.dto.scene.lists.world.layout.tab.BackgroundColor;
import click.myclick.dto.scene.lists.world.layout.tab.BtnColor;
import click.myclick.dto.scene.lists.world.layout.tab.BtnTextColor;

import java.io.Serializable;

public class Toolbar implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;
    
    private BackgroundColor backgroundColor;
    private BtnColor btnColor;
	private BtnTextColor btnTextColor;
	
	public Toolbar() {
		this.backgroundColor = null;
		this.btnColor = null;
		this.btnTextColor = null;
	}

	public BackgroundColor getBackgroundcolor()
	{
		return this.backgroundColor;
	}

	public void setBackgroundcolor(BackgroundColor backgroundColor)
	{
		this.backgroundColor = backgroundColor;
	}

	public BtnColor getBtncolor()
	{
		return this.btnColor;
	}

	public void setBtncolor(BtnColor btnColor)
	{
		this.btnColor = btnColor;
	}

	public BtnTextColor getBtntextcolor()
	{
		return this.btnTextColor;
	}

	public void setBtntextcolor(BtnTextColor btnTextColor)
	{
		this.btnTextColor = btnTextColor;
	}
}
