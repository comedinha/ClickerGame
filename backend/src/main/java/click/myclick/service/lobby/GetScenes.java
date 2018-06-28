package click.myclick.service.lobby;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.model.Scene;
import click.myclick.dto.lobby.scene.*;

import java.util.List;

import org.springframework.http.converter.support.AllEncompassingFormHttpMessageConverter;

import java.util.ArrayList;
import java.util.Collections;

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

    public ArrayList<SceneMostPlayedDTO> getMostPlayed(SceneService service) {
        List<Scene> scenes = service.findAll();
        ArrayList<SceneMostPlayedDTO> getMostPlayed = new ArrayList<SceneMostPlayedDTO>();
        ArrayList<SceneMostPlayedDTO> aux = new ArrayList<SceneMostPlayedDTO>();

        for(Scene scene : scenes)
            aux.add(new SceneMostPlayedDTO(scene.getId(), scene.getName(), scene.getIdCreator(), 
                                          scene.getSmallDescription(), scene.getImage(), scene.getTotalplayed()));
        
        Collections.sort(aux);
        
        for(int i = 0; i < 3; i++)
            getMostPlayed.add(aux.get(i));

        return getMostPlayed;
    }

    public ArrayList<SceneBestRatedDTO> getBestRated(SceneService service) {
        List<Scene> scenes = service.findAll();
        ArrayList<SceneBestRatedDTO> getBestRated = new ArrayList<SceneBestRatedDTO>();
        ArrayList<SceneBestRatedDTO> aux = new ArrayList<SceneBestRatedDTO>();

        for(Scene scene : scenes)
            aux.add(new SceneBestRatedDTO(scene.getId(), scene.getName(), scene.getIdCreator(), 
                                          scene.getSmallDescription(), scene.getImage(), scene.getRating()));
        
        Collections.sort(aux);
        
        for(int i = 0; i < 3; i++)
            getBestRated.add(aux.get(i));

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
