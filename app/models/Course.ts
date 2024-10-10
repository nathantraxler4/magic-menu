import Realm, { BSON } from 'realm'

export default class Course extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId()
    name!: string
    description!: string

    static primaryKey = '_id'
}
