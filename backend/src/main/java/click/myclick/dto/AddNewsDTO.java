package click.myclick.dto;

import java.io.Serializable;


public class AddNewsDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String title;
    private String content;

    public AddNewsDTO() {
		System.out.printf("\n\nAddNewsDTO created\n\n");
    }

	public String getTitle() {
		return this.title;
	}

	public void setTitle(final String title) {
		System.out.printf("set: %s\n", title);
		this.title = title;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(final String content) {
		System.out.printf("set: %s\n", content);
		this.content = content;
	}
}
