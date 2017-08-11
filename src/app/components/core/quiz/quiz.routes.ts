import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent }     from './quiz.component';
import { QuestionComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
    { path: 'quiz', component: QuizComponent, children:
    [{ path: 'questions/:id', component: QuestionComponent },
  { path: 'result', component: ResultComponent }] },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class QuizRouting { }
