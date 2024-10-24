import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'

import Recipe from '@/app/models/Recipe'
import { useQuery } from '@realm/react'
import { buttonStyles } from '@/app/styles/button'
import { RecipeSelectBox } from '@/app/components/RecipeSelectBox'
import colors from '@/app/styles/colors'
import { commonStyles } from '@/app/styles/common'
import { groupBy } from 'lodash'
import { RecipeBookProps } from '@/app/types/props'

export const RecipeBook = ({ navigation }: RecipeBookProps) => {
    const recipes: Realm.Results<Recipe> = useQuery(Recipe)
    const [selected, setSelected] = useState(new Set<string>())

    const toggleSelected = useCallback(
        (name: string) => {
            if (selected.has(name)) {
                const selectedCopy = new Set<string>(selected)
                selectedCopy.delete(name)
                setSelected(selectedCopy)
            } else {
                setSelected(new Set([...selected, name]))
            }
        },
        [selected]
    )

    const generateMenuButtonHandler = useCallback(async () => {
        const recipeNamesToRecords: Map<string, Realm.Results<Recipe>[]> = groupBy(
            recipes,
            (recipe) => recipe.name
        )
        const selectedRecipes: Realm.Results<Recipe>[] = [...selected].map((name) => {
            return recipeNamesToRecords[name][0]
        })
        navigation.navigate('Menu', { selectedRecipes })
    }, [selected])

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                style={styles.flatlist}
                contentContainerStyle={styles.recipesContainer}
                keyExtractor={(recipe) => recipe.name}
                renderItem={({ item }) => (
                    <RecipeSelectBox
                        name={item.name}
                        selected={selected}
                        toggleSelected={toggleSelected}
                    />
                )}
            />
            <Pressable onPress={generateMenuButtonHandler} style={styles.submit}>
                <Text style={styles.icon}>Generate Image</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...commonStyles.screenContainerPadding,
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: colors.background
    },
    flatlist: {
        flexGrow: 20,
        width: '100%'
    },
    recipesContainer: {
        flexGrow: 1,
        gap: 15
    },
    submit: {
        ...buttonStyles.button,
        flexGrow: 1,
        width: '100%'
    },
    icon: {
        ...buttonStyles.text
    }
})
