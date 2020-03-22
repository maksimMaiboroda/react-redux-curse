import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT
} from "./types";

export const createPost = post => ({ type: CREATE_POST, payload: post });
export const createPostAsync = post => ({ type: FETCH_POSTS, payload: post });
export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
// export const showAlert = text => ({ type: SHOW_ALERT, payload: text });
export const hideAlert = payload => ({ type: HIDE_ALERT, payload });

export const showAlert = text => {
  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const fetchedPosts = () => {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const json = await response.json();
      dispatch(createPostAsync(json));
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showAlert("Что то пошло не так!"));
      dispatch(hideLoader());
    }
  };
};
