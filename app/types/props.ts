import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import Recipe from '../models/Recipe'

export type BottomTabParamList = {
    'Recipe Book': undefined
    'Add Recipe': undefined
    Menu: {
        selectedRecipes: Realm.Results<Recipe>[]
    }
}

export type RecipeBookProps = BottomTabScreenProps<
    BottomTabParamList,
    'Recipe Book',
    'MyTabNavigator'
>
export type MenuProps = BottomTabScreenProps<BottomTabParamList, 'Menu', 'MyTabNavigator'>
