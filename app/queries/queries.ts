import { gql } from '@apollo/client'

export const GET_MENUS = gql`
    query Menus {
        menus {
            courses {
                name
                description
            }
            backgroundImage
        }
    }
`
