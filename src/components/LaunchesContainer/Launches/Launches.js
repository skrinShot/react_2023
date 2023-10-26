import {useEffect, useState} from "react";
import {launchService} from "../../../servises/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [Launches, setLaunches] = useState([])

    useEffect(() => {
        launchService.getAll().then(({data})=>{
            const filtered = data.filter(item=>item.launch_year!=="2020")
            setLaunches(filtered)
        })
    }, []);

    return (
        <div>
            {Launches.map(launch=><Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export {Launches};