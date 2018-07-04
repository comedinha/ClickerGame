package click.myclick.dto.scene.save;

import java.io.Serializable;

public class BuyedUpgrades implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String item;
    private String tab;

	public String getItem()
	{
		return this.item;
	}

	public void setItem(String item)
	{
		this.item = item;
	}

	public String getTab()
	{
		return this.tab;
	}

	public void setTab(String tab)
	{
		this.tab = tab;
	}
}
