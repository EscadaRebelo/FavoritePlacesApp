import PLaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
    function createPlaceHandler(place) {
        navigation.navigate('AllPlaces', {
            place: place
        });
    }

    return (
        <PLaceForm onCreatePlace={createPlaceHandler} />
    );
}

export default AddPlace;