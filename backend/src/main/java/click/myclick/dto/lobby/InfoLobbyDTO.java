package click.myclick.dto.lobby;

import click.myclick.dto.lobby.scene.*;

import java.io.Serializable;
import java.util.ArrayList;

public class InfoLobbyDTO implements Serializable {

    private static final long serialVersionUID = -4159366809929151486L;

    private String name;
	private String authorities;
	private int news;
	private int numApproval;
	private int numReport;

	private ArrayList<MySceneDTO> myScenes;
	private ArrayList<PlayedSceneDTO> playedGames;
	private ArrayList<SceneMostPlayedDTO> mostPlayed;
	private ArrayList<SceneBestRatedDTO> bestRated;

	public InfoLobbyDTO() {
		numApproval = 0;
		numReport = 0;
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

	public ArrayList<PlayedSceneDTO> getPlayedGames() {
		return this.playedGames;
	}

	public void setPlayedGames(ArrayList<PlayedSceneDTO> playedGames) {
		this.playedGames = playedGames;
	}

	public ArrayList<SceneMostPlayedDTO> getMostPlayed() {
		return this.mostPlayed;
	}

	public void setMostPlayed(ArrayList<SceneMostPlayedDTO> mostPlayed) {
		this.mostPlayed = mostPlayed;
	}

	public ArrayList<SceneBestRatedDTO> getBestRated() {
		return this.bestRated;
	}

	public void setBestRated(ArrayList<SceneBestRatedDTO> bestRated) {
		this.bestRated = bestRated;
	}

	public int getNumApproval() {
		return this.numApproval;
	}

	public void setNumApproval(int numApproval) {
		this.numApproval = numApproval;
	}

	public int getNumReport() {
		return this.numReport;
	}

	public void setNumReport(int numReport) {
		this.numReport = numReport;
	}
}
