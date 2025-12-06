// Svelte 5 runes-based state management for Product Card
// Using a class-based pattern for proper reactivity

class ReactiveState {
	value = $state();
	
	constructor(initialValue) {
		this.value = initialValue;
	}
}

// Current product ID
export const currentProductId = new ReactiveState(1);

// Current design ID
export const currentDesignId = new ReactiveState(1);

// Current color ID
export const currentColorId = new ReactiveState(1);

// Current background ID
export const currentBackgroundId = new ReactiveState(6);

// Product index
export const productIndex = new ReactiveState(0);

// Design index
export const designIndex = new ReactiveState(0);

// Color index
export const colorIndex = new ReactiveState(1);

// Background index
export const backgroundIndex = new ReactiveState(4);

// Favorites list
export const favList = new ReactiveState(['0']);
