import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskFacade } from 'entities/task';

@Component({
  selector: 'fs-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailsPage implements OnInit {
  constructor(
    public readonly taskFacade: TaskFacade,
    public readonly location: Location,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.taskFacade.loadTaskIfNeeded(id);
    }
  }
}
