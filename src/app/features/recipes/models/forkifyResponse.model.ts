import { Recipe } from './recipe.model';
import { RecipeSummary } from './recipeSummary.model';

// 3. Wrapper for your search results endpoint: ?search=pizza
export interface ForkifySearchResponse {
	status: string;
	results: number;
	data: {
		recipes: RecipeSummary[];
	};
}

// 4. Wrapper for your single recipe details endpoint: /recipes/:id
export interface ForkifySingleRecipeResponse {
	status: string;
	data: {
		recipe: Recipe;
	};
}
