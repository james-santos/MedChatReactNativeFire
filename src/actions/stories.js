import { Firebase, FirebaseRef } from '../lib/firebase';
// Redux Actions
/**
  * Get this User's Favorite Stories
  */
export function getFavourites(dispatch) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  const ref = FirebaseRef.child(`favourites/${UID}`);

  return ref.on('value', (snapshot) => {
    const favs = snapshot.val() || [];

    return dispatch({
      type: 'FAVOURITES_REPLACE',
      data: favs,
    });
  });
}

/**
  * Reset a User's Favorite Stories in Redux
  */
export function resetFavourites(dispatch) {
  return dispatch({
    type: 'FAVOURITES_REPLACE',
    data: [],
  });
}

/**
  * Update My Favorite Stories
  */
export function replaceFavourites(newFavourites) {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  const UID = Firebase.auth().currentUser.uid;
  if (!UID) return false;

  return () => FirebaseRef.child(`favourites/${UID}`).set(newFavourites);
}

/**
  * Get Story
  */
export function getShift() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise((resolve, reject) => FirebaseRef
    .child('shift').once('value')
    .then((snapshot) => {
      const shift = snapshot.val() || [];

      return resolve(dispatch({
        type: 'SHIFT_REPLACE',
        data: shift,
      }));
    }).catch(reject)).catch(e => console.log(e));
}

/**
  * Set an Error Message
  */
export function setError(message) {
  return dispatch => new Promise(resolve => resolve(dispatch({
    type: 'STORIES_ERROR',
    data: message,
  })));
}

/**
  * Get Stories
  */
export function getStories() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  return dispatch => new Promise(resolve => FirebaseRef.child('stories')
    .on('value', (snapshot) => {
      const stories = snapshot.val() || [];

      return resolve(dispatch({
        type: 'STORIES_REPLACE',
        data: stories,
      }));
    })).catch(e => console.log(e));
}
