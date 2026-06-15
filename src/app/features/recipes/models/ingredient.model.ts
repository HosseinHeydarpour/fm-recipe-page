export interface Ingredient {
	quantity: number | null; // API can send null for things like "to taste"
	unit: string;
	description: string;
}
