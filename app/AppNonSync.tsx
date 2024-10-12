import React from 'react'
import Menu from '@/app/screens/Menu'

import { AddRecipe } from '@/app/screens/AddRecipe'
import { RecipeBook } from '@/app/screens/RecipeBook'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '@/app/types/props'
import courses from '@/app/assets/json/courses'
import localImage from '@/app/assets/images/dinnerMenuBright.webp'

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
                        backgroundImage: localImage
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
