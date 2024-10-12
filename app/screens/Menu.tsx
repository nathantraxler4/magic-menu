import React /* useEffect, useState */ from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import { MenuProps } from '@app/types/props'
import colors from '@app/styles/colors'

const Menu = ({ route /*, navigation*/ }: MenuProps) => {
    console.log(route.params.courses)

    return (
        <ImageBackground
            source={route.params.backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.listContainer}>
                <FlatList
                    data={route.params.courses}
                    contentContainerStyle={styles.container}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text style={styles.courseName}>{item.name}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    )}
                />
            </View>
            {/* <Button onPress={() => handleAddRecipe()} title="Add / Clear Recipes" /> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    listContainer: {
        flex: 0.5
    },
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    menuItem: {
        backgroundColor: colors.textBackdrop,
        padding: 15
    },
    courseName: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.white
    },
    description: {
        fontSize: 16,
        color: colors.white
    }
})

export default Menu
