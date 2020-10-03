import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Home', loadChildren: './features/homepage/homepage.module#HomepageModule' },
  { path: 'Contacts', loadChildren: './features/contacts/contacts.module#ContactsModule' },
  { path: 'Documents/SharedDocuments', loadChildren: './features/shared-documents/shared-documents.module#SharedDocumentsModule' },
  { path: 'News', loadChildren: './features/news/news.module#NewsModule' },
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
