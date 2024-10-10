import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type BottomTabParamList = {
    'Recipe Book': undefined
    'Add Recipe': undefined
    Menu: {
        courses: { name: string; description: string }[]
        backgroundImage: number
    }
}

export type RecipeBookProps = BottomTabScreenProps<
    BottomTabParamList,
    'Recipe Book',
    'MyTabNavigator'
>
export type MenuProps = BottomTabScreenProps<BottomTabParamList, 'Menu', 'MyTabNavigator'>
