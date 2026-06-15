import { Ingredient } from './ingredient.model';

export interface Recipe {
	id: string;
	title: string;
	publisher: string;
	image_url: string;
	source_url: string;
	servings: number;
	cooking_time: number;
	ingredients: Ingredient[];
}
