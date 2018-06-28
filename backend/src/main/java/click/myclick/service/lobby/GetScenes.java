package click.myclick.service.lobby;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.model.Scene;
import click.myclick.dto.lobby.scene.*;

import java.util.List;

import org.springframework.http.converter.support.AllEncompassingFormHttpMessageConverter;

import java.util.ArrayList;

public class GetScenes {
    
    public ArrayList<MySceneDTO> getMyScenes(SceneService service, String id) {
        List<Scene> scenes = service.findAll();
        ArrayList<MySceneDTO> myScenes = new ArrayList<MySceneDTO>();

        for(Scene scene : scenes)
            if(scene.getIdCreator().equals(id))
                myScenes.add(new MySceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(),
                                            scene.getApproved(), scene.getSmallDescription(), scene.getImage()));
        
        return myScenes;
    }

    public ArrayList<PlayedSceneDTO> getPlayedGames(SceneService service, String id) {
        //precisa implementar o Save...
        return new ArrayList<PlayedSceneDTO>();
    }

    public ArrayList<SceneDTO> getMostPlayed(SceneService service) {
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> getMostPlayed = new ArrayList<SceneDTO>();
        ArrayList<SceneDTO> aux = new ArrayList<SceneDTO>();



        return getMostPlayed;
    }

    public ArrayList<SceneDTO> getBestRated(SceneService service) {
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> getBestRated = new ArrayList<SceneDTO>();
        ArrayList<SceneDTO> aux = new ArrayList<SceneDTO>();



        return getBestRated;
    }

    public ArrayList<SceneDTO> getAllGames(SceneService service) {
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> allGames = new ArrayList<SceneDTO>();

        for(Scene scene : scenes)
            allGames.add(new SceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(), 
                                      scene.getSmallDescription(), scene.getImage()));

        return allGames;
    }
}
