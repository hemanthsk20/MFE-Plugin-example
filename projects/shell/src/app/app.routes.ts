import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:
    //default generated code
    // {
    //   path: 'flights',
    //   loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    // },

    {
      path: 'flights',
      loadChildren: () =>
          loadRemoteModule({
              // remoteEntry: 'http://localhost:3000/remoteEntry.js',
              remoteName: 'mfe1',
              exposedModule: './Module'
          })
          .then(m => m.FlightsModule)
  },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

