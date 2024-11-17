import React, { useState, useCallback } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

import { buttonStyles } from '@/app/styles/button'
import { textInputStyles } from '@/app/styles/textInput'
import { commonStyles } from '@/app/styles/common'
import colors from '@/app/styles/colors'
import { ADD_RECIPES } from '@/app/api/mutations'
import { useMutation } from '@apollo/client'

export const AddRecipe = () => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')
    const [addRecipes, { loading, error }] = useMutation(ADD_RECIPES)

    const handleAddRecipe = useCallback(
        (name: string, ingredients: string, directions: string): void => {
            if (!ingredients || !name || !directions) {
                console.log('Must provide name, ingredients, and directions.')
                return
            }

            addRecipes({ variables: { recipes: [{ name, ingredients, directions }] } })
        },
        []
    )

    const handleSubmit = () => {
        handleAddRecipe(name, ingredients, directions)
        setName('')
        setIngredients('')
        setDirections('')
    }

    if (loading) return <Text>Submitting...</Text>
    if (error) return <Text>{`Submission error! ${error.message}`}.</Text>

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
        ...commonStyles.screenContainerPadding,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 5,
        flexGrow: 5,
        gap: 15,
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
        width: '100%'
    },
    icon: {
        ...buttonStyles.text
    }
})
