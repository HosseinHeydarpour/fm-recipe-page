import { Component, input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-section',
	standalone: true,
	imports: [],
	templateUrl: './recipe-section.component.html',
	styleUrl: './recipe-section.component.scss',
})
export class RecipeSectionComponent {
	recipe = input<Recipe>();
}
