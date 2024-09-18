import Menu from '../models/Menu'

/**
 * @param {Realm} realm realm instance
 * @param {Realm} realm realm instance
 */
export function deleteMenu(realm, menus: Realm.Results<Menu>) {
    realm.write(() => {
        realm.delete(menus)
    })
}

/**
 *
 */
export function insertMenu(
    realm,
    menu: {
        backgroundImage: number
        courses: Array<{ dishName: string; description: string; userId: string }>
        userId: string
    }
) {
    realm.write(() => {
        return realm.create('Menu', menu)
    })
}