import React from 'react'
import {useAppDispatch} from "./hooks";
import {nanoid} from "@reduxjs/toolkit";
import {Post, postAdded} from "./postSlice";

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddPostFormFields extends HTMLFormControlsCollection {
    postTitle: HTMLInputElement
    postContent: HTMLTextAreaElement
}
interface AddPostFormElements extends HTMLFormElement {
    readonly elements: AddPostFormFields
}

const dispatch = useAppDispatch()

export const AddPostForm = () => {
    const handleSubmit = (e: React.FormEvent<AddPostFormElements>) => {
        // Prevent server submission
        e.preventDefault()

        const { elements } = e.currentTarget
        const title = elements.postTitle.value
        const content = elements.postContent.value

        // Create the post object and dispatch the `postAdded` action
        const newPost: { note: string; id: number } = {
            id: nanoid(),
            note
        }
        dispatch(postAdded(newPost))

        console.log('Values: ', { title, content })

        e.currentTarget.reset()
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    defaultValue=""
                    required
                />
                <button>Save Post</button>
            </form>
        </section>
    )
}