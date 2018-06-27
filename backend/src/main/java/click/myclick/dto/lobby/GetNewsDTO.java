package click.myclick.dto.lobby;

import java.io.Serializable;

public class GetNewsDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

	private String title;
	private String content;
	
	public GetNewsDTO() {
	}

    public GetNewsDTO(String title, String content) {
		this.title = title;
		this.content = content;
    } 

    public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
