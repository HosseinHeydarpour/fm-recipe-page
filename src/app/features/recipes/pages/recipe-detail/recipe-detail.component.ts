import { Component, inject, OnInit } from '@angular/core';
import { RecipeService } from '../../data-access/recipe.service';
import { RecipeSummary } from '../../models/recipeSummary.model';

@Component({
	selector: 'app-recipe-detail',
	standalone: true,
	imports: [],
	templateUrl: './recipe-detail.component.html',
	styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
	recipeService = inject(RecipeService);
	recipes: RecipeSummary[] = [];

	ngOnInit(): void {
		this.recipeService.getRecipes().subscribe({
			next: (data) => {
				this.recipes = data;
				if (this.recipes.length > 0) {
					this.selectARandomRecipe();
				}
			},
			error: (err) => console.error('HTTP Error:', err),
		});
	}

	selectARandomRecipe(): void {
		// generate a random number based on array length
		if (this.recipes.length > 0) {
			const randomIndex = Math.floor(Math.random() * this.recipes.length);
			const selectedRecipe = this.recipes[randomIndex];
			this.recipeService.getSingleRecipe(selectedRecipe.id).subscribe({
				next: (data) => {
					console.log(data);
				},
				error: (err) => console.error('HTTP Error:', err),
			});
			console.log('Randomly selected recipe:', selectedRecipe);
		}
	}
}
