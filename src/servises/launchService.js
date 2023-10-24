import {spaceXService} from "./spaceXService";
import {urls} from "../constants/urls";

const launchService = {
    getAll: function() {
        return spaceXService.get(urls.launches);
    }
}
export {
    launchService
}