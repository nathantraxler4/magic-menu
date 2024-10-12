import React, { useState, useCallback } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import { buttonStyles } from '@app/styles/button'
import { useRealm } from '@realm/react'
import * as recipeRepo from '@app/repositories/recipe'
import { textInputStyles } from '../styles/textInput'
import colors from '@app/styles/colors'

export const AddRecipe = () => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')
    const realm = useRealm()

    const handleAddRecipe = useCallback(
        (name: string, ingredients: string, directions: string): void => {
            if (!ingredients || !name || !directions) {
                console.log('[handleAddRecipe] Must provide name, ingredients, and directions.')
                return
            }

            // Everything in the function passed to "realm.write" is a transaction and will
            // hence succeed or fail together. A transcation is the smallest unit of transfer
            // in Realm so we want to be mindful of how much we put into one single transaction
            // and split them up if appropriate (more commonly seen server side). Since clients
            // may occasionally be online during short time spans we want to increase the probability
            // of sync participants to successfully sync everything in the transaction, otherwise
            // no changes propagate and the transaction needs to start over when connectivity allows.
            recipeRepo.insertRecipes(realm, [
                {
                    name,
                    ingredients: ingredients,
                    directions: directions,
                    userId: 'Nathan'
                }
            ])
        },
        [realm]
    )

    const handleSubmit = () => {
        handleAddRecipe(name, ingredients, directions)
        setName('')
        setIngredients('')
        setDirections('')
    }

    return (
        <View style={styles.form}>
            <TextInput
                value={name}
                placeholder="Enter recipe name"
                placeholderTextColor={colors.lightGray}
                onChangeText={setName}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
            />
            <TextInput
                value={ingredients}
                placeholder="Enter recipe ingredients"
                placeholderTextColor={colors.lightGray}
                onChangeText={setIngredients}
                autoCorrect={false}
                autoCapitalize="none"
                multiline={true}
                style={styles.textArea}
            />
            <TextInput
                value={directions}
                placeholder="Enter recipe directions"
                placeholderTextColor={colors.lightGray}
                onChangeText={setDirections}
                autoCorrect={false}
                autoCapitalize="none"
                multiline={true}
                style={styles.textArea}
            />
            <Pressable onPress={handleSubmit} style={styles.submit}>
                <Text style={styles.icon}>＋</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 5,
        flexGrow: 5,
        gap: 10,
        backgroundColor: colors.background
    },
    textInput: {
        ...textInputStyles.textInput,
        flex: 1
    },
    textArea: {
        ...textInputStyles.textArea,
        flex: 10 // Makes the directions input larger
    },
    submit: {
        ...buttonStyles.button,
        flex: 1,
        flexGrow: 1,
        width: '80%'
    },
    icon: {
        ...buttonStyles.text
    }
})
