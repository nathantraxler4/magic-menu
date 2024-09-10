import {StyleSheet, Platform} from 'react-native'
import colors from './colors'

export const textInputStyles: StyleSheet.NamedStyles<{textInput: object}> = {
    textInput: {
        color: colors.white,
        borderRadius: 20,
        backgroundColor: colors.textBackground,
        fontSize: 20,
        borderWidth: 5,
        borderColor: colors.lighterAccent, // Optional, gives the input fields a border
        width: '80%',
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        margin: 5
    }
}