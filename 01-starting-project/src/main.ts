// this is what actually get's executed when the app starts.

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { TaskComponent } from './app/task/task.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

