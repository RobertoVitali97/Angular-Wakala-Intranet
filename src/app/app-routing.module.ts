import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousGuardService } from './auth/anonymous.guard';
import { AuthGuardService } from './auth/authenticated.guard';

const routes: Routes = [
  { path: 'Login', canActivate: [AnonymousGuardService], loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'Home', canActivate: [AuthGuardService], loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) },

  // { path: 'Contacts', canActivate: [AuthGuardService], loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) },
  // { path: 'Personal/Absences', canActivate: [AuthGuardService], loadChildren: () => import('./features/personal/absences/absences.module').then(m => m.AbsencesModule) },
  // { path: 'Personal/PaySlips', canActivate: [AuthGuardService], loadChildren: () => import('./features/personal/payslips/payslips.module').then(m => m.PayslipsModule) },
  // { path: 'Documents/SharedDocuments', canActivate: [AuthGuardService], loadChildren: () => import('./features/documents/shared-documents/shared-documents.module').then(m => m.SharedDocumentsModule) },
  // { path: 'Documents/SeenDocuments', canActivate: [AuthGuardService], loadChildren: () => import('./features/documents/seen-documents/seen-documents.module').then(m => m.SeenDocumentsModule) },
  // { path: 'Documents/ToSignDocuments', canActivate: [AuthGuardService], loadChildren: () => import('./features/documents/to-sign-documents/to-sign-documents.module').then(m => m.ToSignDocumentsModule) },
  // { path: 'Documents/SignedDocuments', canActivate: [AuthGuardService], loadChildren: () => import('./features/documents/signed-documents/signed-documents.module').then(m => m.SignedDocumentsModule) },
  // { path: 'News', canActivate: [AuthGuardService], loadChildren: () => import('./features/news/news.module').then(m => m.NewsModule) },
  { path: '', pathMatch: 'full', canActivate: [AuthGuardService], redirectTo: '/Home' },
  { path: '**', pathMatch: 'full', canActivate: [AuthGuardService], redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
