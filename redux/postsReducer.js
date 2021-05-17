const initialState = {
    posts: [],
}

export const ActionTypes = {
    SET_POST: 'SET_POST',
    DELETE_POST: 'DELETE_POST',
    NEW_POST: 'NEW_POST',
    EDIT_POST: 'EDIT_POST',
}

export const ActionCreators = {
    setPost: payload => ({ type: ActionTypes.SET_POST, payload }),
    deletePost: payload => ({ type: ActionTypes.DELETE_POST, payload }),
    newPost: payload => ({ type: ActionTypes.NEW_POST, payload }),
    editPost: payload => ({ type: ActionTypes.EDIT_POST, payload }),
}

export default function PostsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_POST:
            return { ...state, posts: [...action.payload] };
        case ActionTypes.DELETE_POST:
            return {
                ...state, posts: [...state.posts.filter(post =>
                    post.id !== action.payload.id)]
            }
        case ActionTypes.NEW_POST:
            return { ...state, posts: [...state.posts, action.payload] }
        case ActionTypes.EDIT_POST:
            let posts = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    post = action.payload
                }
                return post;
            })
            return { ...state, posts: [...posts] }
        default:
            return state;
    }
}
