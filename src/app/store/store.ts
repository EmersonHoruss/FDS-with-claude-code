import { InjectionToken } from '@angular/core';
import * as FromRouter from '@ngrx/router-store';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'shared/config';

/**
 * Root state only holds app-wide slices (router). Entities and features
 * register their own slices through their `*StoreModule` (forFeature).
 */
export interface State {
  router: FromRouter.RouterState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
    router: FromRouter.routerReducer,
  }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
