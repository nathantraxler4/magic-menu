import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '@/app/styles/colors'

// Currently the same as MenuFallback but created to eventually be improved.
const RecipeBookFallback = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.textBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 28
    }
})

export default RecipeBookFallback
