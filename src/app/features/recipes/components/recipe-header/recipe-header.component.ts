import { Component, input, signal } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-header',
	standalone: true,
	imports: [],
	templateUrl: './recipe-header.component.html',
	styleUrl: './recipe-header.component.scss',
})
export class RecipeHeaderComponent {
	recipe = input.required<Recipe>();
	isImageLoaded = signal(false);
}
