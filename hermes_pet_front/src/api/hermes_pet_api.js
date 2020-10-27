const hermesPetApi = {
    async getPets() {
        return [
            {
                name: "Katyusha",
                photo: "https://i.insider.com/5484b33a6da8119577fbada9?width=700&format=jpeg&auto=webp"
            },
            {
                name: "Bismark",
                photo: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=700&format=jpeg&auto=webp"
            },
            {
                name: "Leonard",
                description: "Awesome dog",
                photo: "https://i.insider.com/5484e527ecad04de4324638b?width=700&format=jpeg&auto=webp"
            },
        ]
    },
    async getPet(id){
        return {
            name: "Katyusha",
            description: "Cute dog",
            age: 3,
            photo: "https://i.insider.com/5484b33a6da8119577fbada9?width=700&format=jpeg&auto=webp"
        }
    }
}