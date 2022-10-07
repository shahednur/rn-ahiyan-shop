import { createReducer } from "@reduxjs/toolkit";;

const initialState = {
    stories:[
        {
            id:1,
            name: 'What is it all about?',
            claps: 699,
            route: 'https://levelup.gitconnected.com/typescript-what-is-it-all-about-4c9dea82cd32'
        }
    ]
};

const reducer = createReducer(initialState, {});
export default reducer;