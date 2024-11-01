import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { RecipeInput } from '@/app/__generated__/graphql'

export type BottomTabParamList = {
    'Recipe Book': undefined
    'Add Recipe': undefined
    Menu: {
        selectedRecipes: RecipeInput[]
    }
}

export type RecipeBookProps = BottomTabScreenProps<
    BottomTabParamList,
    'Recipe Book',
    'MyTabNavigator'
>
export type MenuProps = BottomTabScreenProps<BottomTabParamList, 'Menu', 'MyTabNavigator'>
