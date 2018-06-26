package click.myclick.dto;

import java.io.Serializable;

public class GetNewsDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String id;
	private String title;
	
	public GetNewsDTO() {
	}

    public GetNewsDTO(String id, String title) {
		this.id = id;
		this.title = title;
    }

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}   

    public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
