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
	private ArrayList<PlayedSceneDTO> playedGames;
	private ArrayList<SceneMostPlayedDTO> mostPlayed;
	private ArrayList<SceneBestRatedDTO> bestRated;
	private ArrayList<SceneDTO> allGames;

	private ArrayList<GetUserDTO> allUsers;
	private ArrayList<SceneDTO> approval;
	private ArrayList<SceneDTO> report;

	public InfoLobbyDTO() {
		this.allUsers = null;
		this.approval = null;
		this.report = null;
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

	public ArrayList<SceneDTO> getAllGames() {
		return this.allGames;
	}

	public void setAllGames(ArrayList<SceneDTO> allGames) {
		this.allGames = allGames;
	}

	public ArrayList<GetUserDTO> getAllUsers()
	{
		return this.allUsers;
	}

	public void setAllUsers(ArrayList<GetUserDTO> allUsers)
	{
		this.allUsers = allUsers;
	}

	public ArrayList<SceneDTO> getApproval()
	{
		return this.approval;
	}

	public void setApproval(ArrayList<SceneDTO> approval)
	{
		this.approval = approval;
	}

	public ArrayList<SceneDTO> getReport()
	{
		return this.report;
	}

	public void setReport(ArrayList<SceneDTO> report)
	{
		this.report = report;
	}
}
