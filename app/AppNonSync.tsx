import React from 'react'
import Menu from './screens/Menu'

import { RecipeBook } from './screens/RecipeBook'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()


export const AppNonSync = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Recipe"
                    component={RecipeBook}
                />
                <Tab.Screen name="Menu" component={Menu} />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}
