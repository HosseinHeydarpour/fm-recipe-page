import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { APP_CONFIG } from '../../../core/config/app-config.token';
import {
	ForkifySearchResponse,
	ForkifySingleRecipeResponse,
} from '../models/forkifyResponse.model';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	app_config = inject(APP_CONFIG);
	http = inject(HttpClient);

	constructor() {}

	getRecipes(recipeName: string = 'pizza') {
		return this.http
			.get<ForkifySearchResponse>(
				`${this.app_config.apiUrl}?search=${recipeName}`
			)
			.pipe(
				map((response) => {
					return response.data.recipes;
				})
			);
	}

	getSingleRecipe(recipeId: string) {
		return this.http
			.get<ForkifySingleRecipeResponse>(`${this.app_config.apiUrl}/${recipeId}`)
			.pipe(
				map((response) => {
					return response.data.recipe;
				})
			);
	}
}
