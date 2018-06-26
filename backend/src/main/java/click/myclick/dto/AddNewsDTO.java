package click.myclick.dto;

import java.io.Serializable;


public class AddNewsDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String title;
    private String content;

    public AddNewsDTO() {
    }

	public String getTitle() {
		return this.title;
	}

	public void setTitle(final String title) {
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(final String content) {
		this.content = content;
	}
}
