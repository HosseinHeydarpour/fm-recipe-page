import { Recipe } from '../models/recipe.model';

export const MOCK_RECIPE: Recipe = {
	id: 'mock-omelette-123',
	title: 'Simple Omelette',
	publisher: 'Frontend Mentor',
	image_url: 'images/image-omelette.jpeg', // Maps to your local project asset
	source_url: 'https://www.frontendmentor.io',
	servings: 1,
	cooking_time: 10,
	description:
		'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
	ingredients: [
		{
			quantity: 2, // Supports numbers or null
			unit: 'large',
			description: 'eggs',
		},
		{
			quantity: null, // Handles "to taste" requirements gracefully without breaking logic
			unit: '',
			description: 'Salt, to taste',
		},
		{
			quantity: null,
			unit: '',
			description: 'Pepper, to taste',
		},
		{
			quantity: 1,
			unit: 'tbsp',
			description: 'butter or oil',
		},
		{
			quantity: null,
			unit: '',
			description:
				'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
		},
	],
};
