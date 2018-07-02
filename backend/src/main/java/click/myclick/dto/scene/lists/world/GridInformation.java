package click.myclick.dto.scene.lists.world;

import java.io.Serializable;
import java.util.List;

public class GridInformation implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    String text;

	public String getText()
	{
		return this.text;
	}

	public void setText(String text)
	{
		this.text = text;
	}
}
