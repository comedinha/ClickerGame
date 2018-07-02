package click.myclick.dto.scene.lists.world.layout;

import click.myclick.dto.scene.lists.world.layout.tab.*;

import java.io.Serializable;

public class Tab implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;
    
    private BackgroundColor backgroundColor;
	private BtnColor btnColor;
    private BtnTextColor btnTextColor;
	private boolean left;
	private TextColor textColor;

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

	public boolean getLeft()
	{
		return this.left;
	}

	public void setLeft(boolean left)
	{
		this.left = left;
	}

	public TextColor getTextcolor()
	{
		return this.textColor;
	}

	public void setTextcolor(TextColor textColor)
	{
		this.textColor = textColor;
	}
}
