import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => 
            import('./home/home.component').then((m) => m.HomeComponent)

    },
    {
        path: 'about', 
        loadComponent: () => 
            import('./about/about.component').then((m) => m.AboutComponent)
    },
    {
        path: 'projects', 
        loadComponent: () => 
            import('./projects/projects.component').then((m) => m.ProjectsComponent)
    }  
];


