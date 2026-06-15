import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment.development';


export interface AppConfig {
  production: boolean;
  apiKey: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
  providedIn: 'root',
  factory: () => environment
});