const {Collection, CollectionInfo} = require('../models/models')
const bd = require('../bd')

class collectionController {
    async create(req, res) {
        let {name, cInfo} = req.body
        const collection = await Collection.create({name})


        if (cInfo) {
            cInfo = JSON.parse(cInfo)
            cInfo.forEach(i =>
                CollectionInfo.create({
                    title: i.title,
                    description: i.description,
                    collectionId: collection.id
                })
            )
        }

        return res.json(collection)
    }

    async getAll(req, res){
        const collections = await Collection.findAll()
        return res.json(collections)
    }

    async delete(req, res){
        const id = req.params.id
        const collection = await bd.query(`DELETE FROM collections where id = $1`, [id])
        res.json(collection.rows[0])
    }

    async getOne(req, res){
        const {id} = req.params
        const collection = await Collection.findOne(
            {
                where: {id},
                include: [{model: CollectionInfo, as: 'cInfo'}]
            },
        )
        return res.json(collection)
    }
}
module.exports = new collectionController()