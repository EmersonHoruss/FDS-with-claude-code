import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskDto, TypicodeService } from 'shared/api';

import type { Task } from '../model';

const mapTask = (dto: TaskDto): Task => ({
  id: dto.id,
  title: dto.title,
  userId: dto.userId,
  completed: dto.completed,
});

@Injectable({ providedIn: 'root' })
export class TaskApi {
  constructor(private readonly typicodeApi: TypicodeService) {}

  getTasks(): Observable<Task[]> {
    return this.typicodeApi
      .getTasksList()
      .pipe(map((tasks) => tasks.map(mapTask)));
  }

  getTask(id: number): Observable<Task> {
    return this.typicodeApi.getTaskById({ taskId: id }).pipe(map(mapTask));
  }
}
