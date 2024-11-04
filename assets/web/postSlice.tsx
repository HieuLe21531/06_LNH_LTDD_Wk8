import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Define a TS type for the data we'll be using
export interface Post {
    id: number
    note: string
}

// Create an initial state value for the reducer, with that type
const initialState: Post[] = [
    {id: 1, note: "To check email"},
    {id: 2, note: "UI task web page"},
    {id: 3, note: "Learn JS basic"},
    {id: 4, note: "Learn HTML advance"},
    {id: 5, note: "Medical App UI"},
    {id: 6, note: "Learn Java"}
]

// Create the slice and pass in the initial state
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // Declare a "case reducer" named `postAdded`.
        // The type of `action.payload` will be a `Post` object.
        postAdded(state, action: PayloadAction<Post>) {
            // "Mutate" the existing state array, which is
            // safe to do here because `createSlice` uses Immer inside.
            state.push(action.payload)
        }
    }
})

// Export the auto-generated action creator with the same name
export const { postAdded } = postSlice.actions

// Export the generated reducer function
export default postSlice.reducer