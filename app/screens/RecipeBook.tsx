import React, { useState, useCallback } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Recipe from '../models/Recipe'
import { useQuery } from '@realm/react'
import colors from '../styles/colors'
import { RecipeSelectBox } from '../components/RecipeSelectBox'

export const RecipeBook = () => {
    const recipes: Realm.Results<Recipe> = useQuery(Recipe)
    const [selected, setSelected] = useState(new Set<string>())

    const toggleSelected = useCallback(
        (dishName) => {
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

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(recipe) => recipe.name}
                renderItem={({ item }) => (
                    <RecipeSelectBox
                        dishName={item.name}
                        selected={selected}
                        toggleSelected={toggleSelected}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        backgroundColor: colors.background
    }
})
