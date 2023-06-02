import { writable } from 'svelte/store';

export const currentProductId = writable(1);
export const currentDesignId = writable(1);
export const currentColorId = writable(1);
export const currentBackgroundId = writable(1);

export const productIndex = writable(0);
export const designIndex = writable(0);
export const colorIndex = writable(1);
export const backgroundIndex = writable(0);
export const favList = writable(['0']);
