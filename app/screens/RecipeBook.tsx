import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'

import Recipe from '@app/models/Recipe'
import { useQuery } from '@realm/react'
import { buttonStyles } from '@app/styles/button'
import { RecipeSelectBox } from '@app/components/RecipeSelectBox'
import colors from '@app/styles/colors'
import { generateCompletion } from '@app/services/index'
import { groupBy } from 'lodash'
import { RecipeBookProps } from '@app/types/props'

export const RecipeBook = ({ navigation }: RecipeBookProps) => {
    const recipes: Realm.Results<Recipe> = useQuery(Recipe)
    const [selected, setSelected] = useState(new Set<string>())

    const toggleSelected = useCallback(
        (dishName: string) => {
            if (selected.has(dishName)) {
                const selectedCopy = new Set<string>(selected)
                selectedCopy.delete(dishName)
                setSelected(selectedCopy)
            } else {
                setSelected(new Set([...selected, dishName]))
            }
        },
        [selected]
    )

    const generateMenu = useCallback(async () => {
        const recipeNamesToRecords = groupBy(recipes, (recipe) => recipe.name)
        const selectedRecipes = [...selected].map((name) => {
            return recipeNamesToRecords[name][0]
        })

        const result = await generateCompletion(selectedRecipes)
        console.log(`
========Result of Generating Menu======
${result}
=======================================
`)
        navigation.navigate('Menu', {
            courses: [{ name: 'Course 1', description: 'This is course 1.' }],
            backgroundImage: 1
        })
    }, [selected])

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                style={styles.recipesContainer}
                keyExtractor={(recipe) => recipe.name}
                renderItem={({ item }) => (
                    <RecipeSelectBox
                        dishName={item.name}
                        selected={selected}
                        toggleSelected={toggleSelected}
                    />
                )}
            />
            <Pressable onPress={generateMenu} style={styles.submit}>
                <Text style={styles.icon}>Generate Image</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    recipesContainer: {
        width: '100%'
    },
    submit: {
        ...buttonStyles.button,
        width: '40%',
        height: '10%',
        margin: '1%'
    },
    icon: {
        ...buttonStyles.text
    }
})
