import { StyleSheet } from 'react-native'
import colors from '@/app/styles/colors'

const sharedStyles: StyleSheet.NamedStyles<{ textStyles: object }> = {
    textStyles: {
        fontSize: 20,
        color: colors.white,
        backgroundColor: colors.textBackground,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: colors.lighterAccent,
        width: '100%',
        padding: 15
    }
}

export const textInputStyles: StyleSheet.NamedStyles<{ textInput: object; textArea: object }> = {
    textInput: {
        ...sharedStyles.textStyles
    },
    textArea: {
        ...sharedStyles.textStyles,
        textAlignVertical: 'top' // Aligns text at the top in multiline input
    }
}
