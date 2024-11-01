import React, { useState, useCallback, Suspense } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import lodash from 'lodash'

import { buttonStyles } from '@/app/styles/button'
import { RecipeSelectBox } from '@/app/components/RecipeSelectBox'
import colors from '@/app/styles/colors'
import { commonStyles } from '@/app/styles/common'
import { RecipeBookProps } from '@/app/types/props'
import { RecipeInput } from '@/app/__generated__/graphql'
import { useSuspenseQuery } from '@apollo/client'
import RecipeBookFallback from '@/app/screens/fallback/RecipeBook'
import { GET_RECIPES } from '@/app/queries/queries'

const RecipeBookContent = ({ navigation }: RecipeBookProps) => {
    const { error, data } = useSuspenseQuery(GET_RECIPES)
    const [selected, setSelected] = useState(new Set<string>())

    if (error) return <Text>There was an error!</Text>

    const recipes = data.recipes

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
        const recipeNamesToRecords = lodash.groupBy(recipes, (recipe) => recipe.name)

        const selectedRecipes: RecipeInput[] = [...selected].map((name) => {
            return lodash.pick(recipeNamesToRecords[name][0], ['name', 'ingredients', 'directions'])
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

const RecipeBook = ({ route, navigation }: RecipeBookProps) => {
    return (
        <Suspense fallback={<RecipeBookFallback />}>
            <RecipeBookContent route={route} navigation={navigation} />
        </Suspense>
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

export default RecipeBook
