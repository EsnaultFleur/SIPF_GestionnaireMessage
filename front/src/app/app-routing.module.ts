import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './features/index/index.component';
import { MessageEditComponent } from './features/message-edit/message-edit.component';
import { MessagesComponent } from './features/messages/messages.component';
import { PATH_EDITION, PATH_MESSAGES } from './utils/router-constants';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/' + PATH_MESSAGES,
    pathMatch: 'full'
  },
  {
    path: '', component: IndexComponent, children: [
      { path: PATH_MESSAGES, component: MessagesComponent },
      { path: PATH_MESSAGES + '/new/' + PATH_EDITION, component: MessageEditComponent },
      { path: PATH_MESSAGES + '/:idMessage/' + PATH_EDITION, component: MessageEditComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
