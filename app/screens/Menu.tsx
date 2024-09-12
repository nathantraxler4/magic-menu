import React /* useEffect, useState */ from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList,
    /* ActivityIndicator,*/ Button
} from 'react-native'
import { useRealm, useQuery } from '@realm/react'
import Recipe from '../models/Recipe'
import MenuModel from '../models/Menu'
import * as recipeRepo from '../repositories/recipe'
import recipesJson from '../assets/json/recipes.json'
import localImage from '../assets/images/dinnerMenuBright.webp'

const Menu = () => {
    // const [dinnerMenu, setDinnerMenu] = useState(null)
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    const realm = useRealm()
    const recipes = useQuery(Recipe)
    const menus = useQuery(MenuModel)
    console.log(menus)
    const menu = menus[0]

    const handleAddRecipe = () => {
        if (recipes.length < 3) {
            const record = { userId: 'Nathan', ...recipesJson[recipes.length] }
            console.log(record)
            recipeRepo.insertRecipes(realm, [record])
        } else {
            recipeRepo.deleteRecipes(realm, recipes)
        }
    }

    // const fetchData = async () => {
    //   try {
    //     const data = await fetchDinnerMenu()
    //     setDinnerMenu(data)
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error)
    //     setError(error.message);
    //     setLoading(false);
    //   }
    // }

    // useEffect(() => {
    //   fetchData()
    // }, [])

    // if (loading) {
    //   console.log("LOADING...")
    //   return <ActivityIndicator size="large" />;
    // }

    return (
        <ImageBackground source={menu.backgroundImage} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <FlatList
                    data={menu.courses}
                    keyExtractor={(item) => item.dishName}
                    renderItem={({ item }) => (
                        <View style={styles.menuItem}>
                            <Text style={styles.title}>{item.dishName}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    )}
                />
            </View>
            <Button onPress={() => handleAddRecipe()} title="Add / Clear Recipes" />
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
