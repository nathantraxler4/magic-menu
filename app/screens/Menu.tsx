import React /* useEffect, useState */ from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import { MenuProps } from '@app/types/props'

const Menu = ({ route /*, navigation*/ }: MenuProps) => {
    console.log(route.params.courses)

    return (
        <ImageBackground
            source={route.params.backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <FlatList
                    data={route.params.courses}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text style={styles.title}>{item.name}</Text>
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
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    menuItem: {
        marginBottom: 15
    },
    dish: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    description: {
        fontSize: 16,
        color: 'white'
    }
})

export default Menu
