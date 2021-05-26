const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const UserServices = sequelize.define('user_services', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Collection = sequelize.define('collection', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Services = sequelize.define('services', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Work = sequelize.define('work', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const CollectionInfo = sequelize.define('collection_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const WorkInfo = sequelize.define('work_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(UserServices)
UserServices.belongsTo(User)

UserServices.hasMany(Services)
Services.belongsTo(UserServices)

Services.hasOne(Collection)
Collection.belongsTo(Services)

Collection.hasMany(CollectionInfo, {as: 'cInfo'})
CollectionInfo.belongsTo(Collection)

Services.hasOne(Work)
Work.belongsTo(Services)

Work.hasMany(WorkInfo, {as: 'wInfo'})
WorkInfo.belongsTo(Work)

module.exports = {
    User,
    UserServices,
    Collection,
    CollectionInfo,
    Work,
    WorkInfo,
    Services
}