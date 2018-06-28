package click.myclick.dto.lobby;

import click.myclick.dto.lobby.scene.*;

import java.io.Serializable;
import java.util.ArrayList;

public class InfoLobbyDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
	private int news;
	private String authorities;

	private ArrayList<MySceneDTO> myScenes;
	private ArrayList<PlayedScene> playedGames;
	private ArrayList<SceneDTO> mostPlayed;
	private ArrayList<SceneDTO> bestRated;
	private ArrayList<SceneDTO> allGames;

	public InfoLobbyDTO() {
    }

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNews() {
		return this.news;
	}

	public void setNews(int news) {
		this.news = news;
	}

	public String getAuthorities() {
		return this.authorities;
	}

	public void setAuthorities(String authorities) {
        this.authorities = authorities;
	}

	public ArrayList<MySceneDTO> getMyScenes() {
		return this.myScenes;
	}

	public void setMyScenes(ArrayList<MySceneDTO> myScenes) {
		this.myScenes = myScenes;
	}

	public ArrayList<SceneDTO> getPlayedGames() {
		return this.playedGames;
	}

	public void setPlayedGames(ArrayList<SceneDTO> playedGames) {
		this.playedGames = playedGames;
	}

	public ArrayList<SceneDTO> getMostPlayed() {
		return this.mostPlayed;
	}

	public void setMostPlayed(ArrayList<SceneDTO> mostPlayed) {
		this.mostPlayed = mostPlayed;
	}

	public ArrayList<SceneDTO> getBestRated() {
		return this.bestRated;
	}

	public void setBestRated(ArrayList<SceneDTO> bestRated) {
		this.bestRated = bestRated;
	}

	public ArrayList<SceneDTO> getAllGames() {
		return this.allGames;
	}

	public void setAllGames(ArrayList<SceneDTO> allGames) {
		this.allGames = allGames;
	}
}
