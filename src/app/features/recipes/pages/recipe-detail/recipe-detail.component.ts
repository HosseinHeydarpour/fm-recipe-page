import { Component, inject, OnInit } from '@angular/core';
import { RecipeHeaderComponent } from '../../components/recipe-header/recipe-header.component';
import { RecipeService } from '../../data-access/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { RecipeSummary } from '../../models/recipeSummary.model';
import { switchMap } from 'rxjs';
import { PreparationTimeComponent } from '../../components/preparation-time/preparation-time.component';
import { RecipeSectionComponent } from '../../components/recipe-section/recipe-section.component';
import { NutritionTableComponent } from '../../components/nutrition-table/nutrition-table.component';

@Component({
	selector: 'app-recipe-detail',
	standalone: true,
	imports: [
		RecipeHeaderComponent,
		PreparationTimeComponent,
		RecipeSectionComponent,
		NutritionTableComponent,
	],
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
	recipeService = inject(RecipeService);
	recipes: RecipeSummary[] = [];
	recipe!: Recipe;

	ngOnInit(): void {
		this.recipeService
			.getRecipes()
			.pipe(
				switchMap((recipesArray) => {
					if (!recipesArray || recipesArray.length === 0) {
						throw new Error('No recipes found');
					}
					// 1. Pick a random index
					const randomIndex = Math.floor(Math.random() * recipesArray.length);
					const selectedId = recipesArray[randomIndex].id;

					// 2. Switch instantly to the single recipe retrieval stream
					return this.recipeService.getSingleRecipe(selectedId);
				})
			)
			.subscribe({
				next: (fullRecipeDetail) => {
					this.recipe = fullRecipeDetail; // Loaded asynchronously!
					console.log('Recipe loaded securely:', this.recipe);
				},
				error: (err) => console.error('Stream Pipeline Error:', err),
			});
	}
}
