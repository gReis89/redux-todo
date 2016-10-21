/**
 * Retrieve current state from store
 * @return {Object}   state from local storage
 */
export function loadState() {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

/**
 * Persist current state to local storage
 * @param  {Object} state current state from store
 */
export function saveState(state){
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore errors
  }
}
