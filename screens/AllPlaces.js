import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PLacesList from "../components/Places/PlacesList";


function AllPlaces({ route }) {
    const [loadedPlaces, setLoadedPlaces] = useState();

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && route.params) {
            setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
        }
    }, [isFocused, route]);

    return (
        <PLacesList places={loadedPlaces} />
    );
}

export default AllPlaces;