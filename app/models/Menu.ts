import Realm, { BSON } from 'realm'
import Course from './Course'

export default class Menu extends Realm.Object {
    _id: BSON.ObjectId = new BSON.ObjectId()
    backgroundImage!: number
    courses: Realm.List<Course>
    createdAt: Date = new Date()
    userId: string

    static primaryKey = '_id'
}
