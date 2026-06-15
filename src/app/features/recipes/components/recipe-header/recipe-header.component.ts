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
	imageSrc = signal<string>('');

	handleImageError() {
		// Fallback to a local asset placeholder if Heroku fails
		this.imageSrc.set('images/fallback.png');

		// Force the loading state to true so the skeleton hides and shows the fallback
		this.isImageLoaded.set(true);
	}
}
