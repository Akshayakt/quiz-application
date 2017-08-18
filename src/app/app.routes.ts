import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/core/home/home.component';
import { QuizComponent } from './components/core/quiz/quiz.component';

import { QuizResolver } from './components/shared/services/quiz-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect URL
  { path: 'home', component: HomeComponent },
  { path: 'quiz/:id',
    component: QuizComponent,
    resolve: {
      quizData: QuizResolver
    }
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      QuizResolver
    ]
})

export class AppRouting { }
