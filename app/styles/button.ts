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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    }
}
