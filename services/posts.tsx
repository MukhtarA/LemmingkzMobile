import { ActionCreators } from '../redux/postsReducer';
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44384/posts',
})

export const GetPost = async (dispatch: (arg0: any) => void) => {
    try {
        // @ts-ignore
        const { data } = await axiosInstance.get();
        dispatch(ActionCreators.setPost(data));
    } catch {
        console.log('Error!');
    }
}

export const DeletePost = async (dispatch: (arg0: any) => void, post: { id: any; }) => {
    try {
        await axiosInstance.delete(`/${post.id}`);
        dispatch(ActionCreators.deletePost(post));
    } catch {
        console.log('Error!');
    }
}

export const NewPost = async (dispatch: (arg0: any) => void, post: any) => {
    try {
        const { data } = await axiosInstance.post('', post)
        dispatch(ActionCreators.newPost(data));
    } catch {
        console.log('Error!');
    }
}

export const EditPost = async (dispatch: (arg0: any) => void, post: any) => {
    try {
        // api call
        await axiosInstance.put('', post);
        dispatch(ActionCreators.editPost(post));
    } catch {
        console.log('Error!');
    }
}
