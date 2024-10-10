import React from 'react'
import Menu from './screens/Menu'

import { AddRecipe } from './screens/AddRecipe'
import { RecipeBook } from './screens/RecipeBook'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from './types/props'
import courses from './assets/json/courses'

const Tab = createBottomTabNavigator<BottomTabParamList>()

export const AppNonSync = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Recipe Book"
                    component={RecipeBook}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Add Recipe"
                    component={AddRecipe}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{ headerShown: false }}
                    initialParams={{
                        courses: courses,
                        backgroundImage: 1
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
