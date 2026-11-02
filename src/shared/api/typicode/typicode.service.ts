import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'shared/config';

import type { TaskDto } from './models';
const BASE_URL = '/todos';

export type GetTasksListParams = {
  userId?: number;
  completed?: boolean;
};

export type GetTaskByIdParams = {
  taskId: number;
  [key: string]: string | number;
};

@Injectable({
  providedIn: 'root',
})
export class TypicodeService {
  constructor(private readonly http: HttpClient) {}

  getTasksList(params?: GetTasksListParams): Observable<TaskDto[]> {
    return this.http.get<TaskDto[]>(`${environment.apiUrl}${BASE_URL}`, {
      params,
    });
  }

  getTaskById({ taskId, ...params }: GetTaskByIdParams): Observable<TaskDto> {
    return this.http.get<TaskDto>(
      `${environment.apiUrl}${BASE_URL}/${taskId}`,
      { params },
    );
  }
}
