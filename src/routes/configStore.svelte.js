// Svelte 5 runes-based state management
// Using a class-based pattern for proper reactivity

class ReactiveState {
	value = $state();
	
	constructor(initialValue) {
		this.value = initialValue;
	}
}

// Language state
export const lang = new ReactiveState('ES');

// Theme state
export const theme = new ReactiveState('');

// Current label ID state
export const currentLabelId = new ReactiveState(100121);

// Mobile menu open state
export const open = new ReactiveState(false);

// Current section state
export const section = new ReactiveState('aboutme');
