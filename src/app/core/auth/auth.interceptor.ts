import { HttpInterceptorFn } from '@angular/common/http';
import { APP_CONFIG } from '../config/app-config.token';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const config = inject(APP_CONFIG);
	const token = config.apiKey; // Retrieve the API key from the configuration

	// Clone the request to attach the Authorization header immutably
	const authReq = token ? req.clone({ setParams: { key: token } }) : req;

	return next(authReq);
};
