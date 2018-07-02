package click.myclick.dto.scene.lists.world;

import java.io.Serializable;

public class GridInformation implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String ref;
    private String text;

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}

	public String getText()
	{
		return this.text;
	}

	public void setText(String text)
	{
		this.text = text;
	}
}
