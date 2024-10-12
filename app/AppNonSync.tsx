import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Menu from '@/app/screens/Menu'
import { AddRecipe } from '@/app/screens/AddRecipe'
import { RecipeBook } from '@/app/screens/RecipeBook'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '@/app/types/props'
import courses from '@/app/assets/json/courses'
import colors from '@/app/styles/colors'
import localImage from '@/app/assets/images/dinnerMenuBright.webp'

const Tab = createBottomTabNavigator<BottomTabParamList>()

export const AppNonSync = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Recipe Book"
                    component={RecipeBook}
                    options={{
                        headerShown: false,
                        tabBarItemStyle: styles.tabBarItemStyle,
                        tabBarActiveTintColor: colors.accent,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="book-open-outline"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Add Recipe"
                    component={AddRecipe}
                    options={{
                        headerShown: false,
                        tabBarItemStyle: styles.tabBarItemStyle,
                        tabBarActiveTintColor: colors.accent,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="pencil-plus-outline"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        headerShown: false,
                        tabBarItemStyle: styles.tabBarItemStyle,
                        tabBarActiveTintColor: colors.accent,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="silverware-variant"
                                color={color}
                                size={size}
                            />
                        )
                    }}
                    initialParams={{
                        courses: courses,
                        backgroundImage: localImage
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBarItemStyle: {
        backgroundColor: colors.background
    },
    tabBarLabelStyle: {
        color: colors.accent
    }
})
