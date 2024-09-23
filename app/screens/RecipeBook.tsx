import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'

import Recipe from '../models/Recipe'
import { useQuery } from '@realm/react'
import { buttonStyles } from '../styles/button'
import { RecipeSelectBox } from '../components/RecipeSelectBox'
import colors from '../styles/colors'

export const RecipeBook = () => {
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

    const generateMenu = useCallback(() => {
        console.log(selected)
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
