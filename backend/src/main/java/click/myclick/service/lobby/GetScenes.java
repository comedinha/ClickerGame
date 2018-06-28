package click.myclick.service.lobby;

import click.myclick.service.dao.scene.SceneService;
import click.myclick.model.Scene;
import click.myclick.dto.lobby.scene.*;

import java.util.List;

import java.util.ArrayList;
import java.util.Collections;

public class GetScenes {
    
    public ArrayList<MySceneDTO> getMyScenes(SceneService service, String id, boolean isAdmin) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<MySceneDTO> myScenes = new ArrayList<MySceneDTO>();

        for(Scene scene : scenes)
            if(scene.getIdCreator().equals(id)) {
                myScenes.add(new MySceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getApproved(), scene.getDeleted(),scene.getSmallDescription(), scene.getImage()));
                myScenes.get(i).setCanApprove(isAdmin);
                myScenes.get(i).setCanResolve(isAdmin);
                myScenes.get(i).setCanDelete(true);
                myScenes.get(i).setCanEdit(true);
                myScenes.get(i).setLastGame(false); //precisa do save pra setar;
                
                i++;
            }
        
        return myScenes;
    }

    public ArrayList<PlayedSceneDTO> getPlayedGames(SceneService service, String id) {
        //precisa implementar o Save...
        return new ArrayList<PlayedSceneDTO>();
    }

    public ArrayList<SceneMostPlayedDTO> getMostPlayed(SceneService service, String idUser) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<SceneMostPlayedDTO> getMostPlayed = new ArrayList<SceneMostPlayedDTO>();
        ArrayList<SceneMostPlayedDTO> aux = new ArrayList<SceneMostPlayedDTO>();

        for(Scene scene : scenes) {
            if(scene.getComplete() && scene.getApproved()) {
                aux.add(new SceneMostPlayedDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getSmallDescription(), scene.getImage(), scene.getTotalplayed()));
                aux.get(i).setCanEdit(scene.getIdCreator().equals(idUser));
                aux.get(i).setLastGame(false); //precisa do save pra setar;
                i++;
            }
        }
        
        Collections.sort(aux);
        
        for(i = 0; i < 3 && i < aux.size(); i++)
            getMostPlayed.add(aux.get(i));

        return getMostPlayed;
    }

    public ArrayList<SceneBestRatedDTO> getBestRated(SceneService service, String idUser) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<SceneBestRatedDTO> getBestRated = new ArrayList<SceneBestRatedDTO>();
        ArrayList<SceneBestRatedDTO> aux = new ArrayList<SceneBestRatedDTO>();

        for(Scene scene : scenes) {
            if(scene.getComplete() && scene.getApproved()) {
                aux.add(new SceneBestRatedDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getSmallDescription(), scene.getImage(), scene.getRating()));
                aux.get(i).setCanEdit(scene.getIdCreator().equals(idUser));
                aux.get(i).setLastGame(false); //precisa do save pra setar;
                i++;
            }
        }

        Collections.sort(aux);
        
        for(i = 0; i < 3 && i < aux.size(); i++)
            getBestRated.add(aux.get(i));

        return getBestRated;
    }

    public ArrayList<SceneDTO> getAllGames(SceneService service, String idUser, boolean isAdmin) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> allGames = new ArrayList<SceneDTO>();

        for(Scene scene : scenes) {
            if(scene.getComplete() && scene.getApproved()) {
                allGames.add(new SceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getSmallDescription(), scene.getImage()));
                allGames.get(i).setCanApprove(isAdmin);
                allGames.get(i).setCanResolve(isAdmin);
                if(isAdmin || scene.getIdCreator().equals(idUser)) {
                    allGames.get(i).setCanDelete(true);
                    allGames.get(i).setCanEdit(true);
                } else {
                    allGames.get(i).setCanDelete(false);
                    allGames.get(i).setCanEdit(false);
                }
                allGames.get(i).setLastGame(false); //precisa do save pra setar;
                i++;
            }
        }

        return allGames;
    }

    public ArrayList<SceneDTO> getApproval(SceneService service) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> aproval = new ArrayList<SceneDTO>();

        for(Scene scene : scenes) {
            if(scene.getComplete() && !scene.getApproved()) {
                aproval.add(new SceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getSmallDescription(), scene.getImage()));
                aproval.get(i).setCanApprove(true);
                aproval.get(i).setCanResolve(true);
                aproval.get(i).setCanDelete(true);
                aproval.get(i).setCanEdit(true);
                aproval.get(i).setLastGame(false); //precisa do save pra setar;
                i++;
            }
        }

        return aproval;
    }

    public ArrayList<SceneDTO> getReport(SceneService service, String idUser, boolean isAdmin) {
        int i = 0;
        List<Scene> scenes = service.findAll();
        ArrayList<SceneDTO> allGames = new ArrayList<SceneDTO>();

        for(Scene scene : scenes) {
            if(scene.getComplete() && scene.getApproved()) {
                allGames.add(new SceneDTO(scene.getId(), scene.getName(), scene.getIdCreator(), scene.getSmallDescription(), scene.getImage()));
                allGames.get(i).setCanApprove(isAdmin);
                allGames.get(i).setCanResolve(isAdmin);
                if(isAdmin || scene.getIdCreator().equals(idUser)) {
                    allGames.get(i).setCanDelete(true);
                    allGames.get(i).setCanEdit(true);
                } else {
                    allGames.get(i).setCanDelete(false);
                    allGames.get(i).setCanEdit(false);
                }
                allGames.get(i).setLastGame(false); //precisa do save pra setar;
                i++;
            }
        }

        return allGames;
    }
}
