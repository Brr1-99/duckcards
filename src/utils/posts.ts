import { writable, derived } from 'svelte/store'

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([])

/** Data transformation.
Here, we'll create a derived store to hold the drink names.
**/
export const posts = derived(apiData, $apiData => $apiData)
