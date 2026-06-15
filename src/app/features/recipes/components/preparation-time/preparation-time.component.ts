import { Component, input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-preparation-time',
	standalone: true,
	imports: [],
	templateUrl: './preparation-time.component.html',
	styleUrl: './preparation-time.component.scss',
})
export class PreparationTimeComponent {
	recipe = input.required<Recipe>();
}
