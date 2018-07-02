package click.myclick.dto.scene.lists.world.gridbutton;

import java.io.Serializable;

public class Style implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String borderRadius;

	public String getBorderRadius()
	{
		return this.borderRadius;
	}

	public void setBorderRadius(String borderRadius)
	{
		this.borderRadius = borderRadius;
    }
}
