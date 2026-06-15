import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
	{
		path: '',
		component: RecipeDetailComponent,
	},
	{
		path: '**',
		component: RecipeDetailComponent,
	},
];
