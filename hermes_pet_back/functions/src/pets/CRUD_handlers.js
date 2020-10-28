module.exports = dbRef => ({
    async get(req, res) {
        const snapshot = await dbRef.get();
        const data = [];
        snapshot.forEach( elem => data.push( elem.data() ) )

        res.json({pets: data});
    },
    async getById(req, res) {
        const doc = dbRef.doc(req.params.id);
        const snapshot = await doc.get();
    
        res.json({ pet: snapshot.data() });
    },
    async post(req, res) {
        //...implement
    
        res.json({pet: `Soon...`});
    },
    async put(req, res) {
        //...implement
    
        res.json({pet: `Soon...`});
    },
    async delete(req, res) {
        //...implement
    
        res.json({pet: `Soon...`});
    }
});