import Recipe from '../models/Recipe'

export function deleteRecipes(realm, recipes: Realm.Results<Recipe>) {
    realm.write(() => {
        realm.delete(recipes)
    })
}

export function insertRecipes(realm, recipes: {
  name: string,
  directions: string[],
  ingredients: string[],
  userId: string
}[]) {
    realm.write(() => {
        return recipes.map(recipe => {
            realm.create(Recipe, recipe )
        })
    })
}
