const iniState = {
    posts : [
        { id : '1', title : 'Squirtle Laid a Egg', body : 'Lorem Ipsum Dolor amet' },
        { id : '2', title : 'Charmander Lain a Egg', body : 'Lorem Ipsum Dolor Amet' },
        { id : '3', title : 'a Helix Fossil was Found', body : 'Lorem Ipsum Dolor Amet' }
    ]
}

const rootReducer = (state = iniState, action : any) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts : [
                    ...state.posts,
                    {
                        id : action.id,
                        title : action.title,
                        body : action.body
                    }
                ]
            }
            console.log(state)
            break
        
        case 'EDIT_POST':
            const afterEditData = state.posts.filter(post => post.id !== action.id)
            console.log(afterEditData)
            return {
                ...state,
                posts : state.posts.map(post => post.id === action.id ? { ...post, title : action.title, body : action.body } : post
                )
            }
        case 'DELETE_POST':
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                ...state,
                posts : [
                    ...newPost
                ]
            }
        default:
            return state
            break
    }
}

export default rootReducer