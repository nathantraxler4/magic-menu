import { StyleSheet } from 'react-native'
import colors from '@/app/styles/colors'

export const buttonStyles: StyleSheet.NamedStyles<{ button: object; text: object }> = {
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.accent
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    }
}
