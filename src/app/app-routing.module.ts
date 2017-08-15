import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from './components/auth/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuard} from './guards/auth-guard.guard';
import {MainComponent} from './components/main/main.component';
import {BooksListComponent} from './components/books-list/books-list.component';
import {ListComponent} from './components/list/list.component';
import {BookComponent} from './components/book/book.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'content', pathMatch: 'full'},
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: '404', component: NotFoundComponent},
            {path: '**', redirectTo: '/404'}
        ]
    },
    {
        path: 'content',
        // canActivate: [AuthGuard],
        component: MainComponent,
        children: [
            {
                path: 'books',
                component: BooksListComponent,
                children: [
                    {path: 'list', component: ListComponent},
                    {path: 'book', component: BookComponent},
                    {path: 'book/:id', component: BookComponent},
                    {path: '', redirectTo: 'list', pathMatch: 'full'}
                ]
            }
        ]
    }
];

export const routing = RouterModule.forRoot(routes, {enableTracing: false});
