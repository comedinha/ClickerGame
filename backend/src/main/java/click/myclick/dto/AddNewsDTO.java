package click.myclick.dto;

import java.io.Serializable;


public class AddNewsDTO implements Serializable {

    private static final long serialVersionUID = 6710061358371752955L;

    private String title;
    private String content;

    public AddNewsDTO() {
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
