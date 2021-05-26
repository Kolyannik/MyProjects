const bd = require('../bd')
const {Work, WorkInfo} = require('../models/models')

class workController {
    async create(req, res) {
        let {name, wInfo} = req.body
        const work = await Work.create({name})


        if (wInfo) {
            wInfo = JSON.parse(wInfo)
            wInfo.forEach(i =>
                WorkInfo.create({
                    title: i.title,
                    description: i.description,
                    workId: work.id
                })
            )
        }
        return res.json(work)
    }

    async getAll(req, res){
        const works = await bd.query(`SELECT * FROM works`)
        res.json(works.rows)
    }

    async delete(req, res){
        const id = req.params.id
        const work = await bd.query(`DELETE FROM works where id = $1`, [id])
        res.json(work.rows[0])
    }

    async getOne(req, res){
        const id = req.params.id
        const work = await bd.query(`SELECT * FROM works where id = $1`, [id])
        res.json(work.rows[0])
    }
}
module.exports = new workController()