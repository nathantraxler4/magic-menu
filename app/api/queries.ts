import { gql } from '@/app/__generated__/gql'

export const GET_RECIPES = gql(`
    query Recipes {
        recipes {
            name
            ingredients
            directions
        }
    }
`)

export const GET_MENUS = gql(`
    query Menus {
        menus {
            courses {
                name
                description
            }
            backgroundImage
        }
    }
`)

export const GENERATE_MENU = gql(`
    query GenerateMenu($recipes: [RecipeInput!]!) {
        generateMenu(recipes: $recipes) {
            courses {
                name
                description
            }
            backgroundImage
        }
    }
`)
