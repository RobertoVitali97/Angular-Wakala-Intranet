import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home', loadChildren: './features/homepage/homepage.module#HomepageModule' },
  { path: 'Contacts', loadChildren: './features/contacts/contacts.module#ContactsModule' },
  { path: 'Personal/Absences', loadChildren: './features/absences/absences.module#AbsencesModule' },
  { path: 'Personal/PaySlips', loadChildren: './features/payslips/payslips.module#PayslipsModule' },
  { path: 'Documents/SharedDocuments', loadChildren: './features/shared-documents/shared-documents.module#SharedDocumentsModule' },
  { path: 'Documents/SeenDocuments', loadChildren: './features/seen-documents/seen-documents.module#SeenDocumentsModule' },
  { path: 'Documents/ToSignDocuments', loadChildren: './features/to-sign-documents/to-sign-documents.module#ToSignDocumentsModule' },
  { path: 'Documents/SignedDocuments', loadChildren: './features/signed-documents/signed-documents.module#SignedDocumentsModule' },
  { path: 'News', loadChildren: './features/news/news.module#NewsModule' },
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
