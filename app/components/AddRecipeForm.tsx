import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native'

import {buttonStyles} from '../styles/button'
// import {shadows} from '../styles/shadows'
import {textInputStyles} from '../styles/textInput'
import colors from '../styles/colors'

type AddRecipeFormProps = {
  onSubmit: (name: string, ingredients: string, directions: string) => void
}

export const AddRecipeForm: React.FC<AddRecipeFormProps> = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')

    const handleSubmit = () => {
        onSubmit(name, ingredients, directions)
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
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'row',
        backgroundColor: colors.background,
    },
    form: {
        flex: 5,
        flexGrow: 5,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.background,
        // ...shadows,
    },
    textInput: {
        ...textInputStyles.textInput,
        flex: 1,
    },
    textArea: {
        ...textInputStyles.textInput,
        flex: 5, // Makes the directions input larger
        textAlignVertical: 'top', // Aligns text at the top in multiline input
    },
    submit: {
        ...buttonStyles.button,
        width: '40%',
        flex: 1,
        flexGrow: 1,
        margin: '1%'
    },
    icon: {
        ...buttonStyles.text,
    },
})
