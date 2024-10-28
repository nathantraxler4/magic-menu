import { gql, TypedDocumentNode } from '@apollo/client'

interface Data {
    menus: {
        courses: Array<{ name: string; description: string }>
        backgroundImage: string
    }
}

export const GET_MENUS: TypedDocumentNode<Data> = gql`
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
