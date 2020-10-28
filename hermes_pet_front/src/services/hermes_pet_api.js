const BASE_URL = "https://europe-west1-hermes-pet-20e9b.cloudfunctions.net/hermesPet";

export const petApi = {
    async getPets() {
        const response = await fetch(BASE_URL);
        const data = await response.json();

        return data.pets;
    },
    async getPet(id){
        const response = await fetch(`${BASE_URL}/${id}`);
        const data = await response.json();
        
        return data.pet;
    }
}