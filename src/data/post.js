import { USERS } from "./dummy";

export const POSTS = [
    {
        imageURL: "https://picsum.photos/100",
        user: USERS[0].username,
        likes: 78,
        caption: 'non et occaecati deserunt quas accusantium unde odit nti dh odit nobis qui voluptatem\nquia voluptas consequuntur',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'taye',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque dolet qui rerum deleniti ut occaecati'
            },

            {
                user: 'segun',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            }
        ]
    },
    {
        imageURL: "https://picsum.photos/120",
        user: USERS[5].username,
        likes: 4809,
        caption: 'Nature at its best',
        profile_picture: USERS[5].image,
        comments: [
            {
                user: 'taye',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            },

            {
                user: 'segun',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            },
            {
                user: 'taye',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            },

            {
                user: 'segun',
                comment: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
            },
        ]
    },
    {
        imageURL: "https://picsum.photos/10",
        user: USERS[2].username,
        likes: 7809,
        caption: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'taye',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            },

            {
                user: 'segun',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            }
        ]
    },
    {
        imageURL: "https://picsum.photos/150",
        user: USERS[0].username,
        likes: 709,
        caption: 'Nature at its best',
        profile_picture: USERS[0].image,
        comments: [ ]
    },
    {
        imageURL: "https://picsum.photos/30",
        user: USERS[1].username,
        likes: 21,
        caption: 'Nature at its best',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'segun',
                comment: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
            }
        ]
    }
]