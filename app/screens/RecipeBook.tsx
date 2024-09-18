import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Recipe from '../models/Recipe'
import { useQuery } from '@realm/react'
import colors from '../styles/colors'
import { RecipeSelectBox } from '../components/RecipeSelectBox'

export const RecipeBook = () => {
    const recipes: Realm.Results<Recipe> = useQuery(Recipe)

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                keyExtractor={(recipe) => recipe.name}
                renderItem={({ item }) => <RecipeSelectBox dishName={item.name} />}
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
