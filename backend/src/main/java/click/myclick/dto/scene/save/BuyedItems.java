package click.myclick.dto.scene.save;

import java.io.Serializable;

public class BuyedItems implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private int count;
    private String ref;

	public int getCount()
	{
		return this.count;
	}

	public void setCount(int count)
	{
		this.count = count;
	}

	public String getRef()
	{
		return this.ref;
	}

	public void setRef(String ref)
	{
		this.ref = ref;
	}
}
