package click.myclick.dto;

import click.myclick.model.Authority;

import java.util.List;
import java.io.Serializable;

public class InfoLobbyDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
	private boolean news;
	private String authorities;

    public InfoLobbyDTO() {
    }

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getNews() {
		return this.news;
	}

	public void setNews(boolean news) {
		this.news = news;
	}

	public String getAuthorities() {
		return this.authorities;
	}

	public void setAuthorities(String authorities) {
        this.authorities = authorities;
	}
}
