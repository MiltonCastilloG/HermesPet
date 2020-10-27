const pets = [
    {
        id: 0,
        name: "Katyusha",
        photo: "https://i.insider.com/5484b33a6da8119577fbada9?width=700&format=jpeg&auto=webp"
    },
    {
        id: 1,
        name: "Bismark",
        photo: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=700&format=jpeg&auto=webp"
    },
    {
        id: 2,
        name: "Leonard",
        description: "Awesome dog",
        photo: "https://i.insider.com/5484e527ecad04de4324638b?width=700&format=jpeg&auto=webp"
    },
]

export default {
    async getPets() {
            return pets;
    },
    async getPet(id){
        return pets[id];
    }
}