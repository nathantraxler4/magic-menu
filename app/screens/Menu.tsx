import React, { Suspense /* useEffect, useState */ } from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
// import { MenuProps } from '@/app/types/props'
import colors from '@/app/styles/colors'
import { GET_MENUS } from '../queries/queries'
import { useSuspenseQuery } from '@apollo/client'
import MenuFallback from '@/app/screens/fallback/Menu'

const IMAGE_URI = '/Users/nathantraxler/Projects/magic-menu/app/assets/images/dinnerMenuBright.webp'

const MenuContent = (/*{ route, navigation}: MenuProps*/) => {
    const { error, data } = useSuspenseQuery(GET_MENUS)

    if (error) return <Text>Error! {error.message}</Text>

    const menu = data.menus[0]

    return (
        <ImageBackground source={{ uri: IMAGE_URI }} style={styles.background} resizeMode="cover">
            <View style={styles.listContainer}>
                <FlatList
                    data={menu.courses}
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

const Menu = (/*{ route, navigation}: MenuProps*/) => {
    return (
        <Suspense fallback={<MenuFallback />}>
            <MenuContent />
        </Suspense>
    )
}

export default Menu
