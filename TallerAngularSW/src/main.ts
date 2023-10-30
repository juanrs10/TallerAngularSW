// Angular core imports
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Application-specific imports
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable production mode if in a production environment
if (environment.production) {
  enableProdMode();
}

// Bootstrap the application using the main app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
