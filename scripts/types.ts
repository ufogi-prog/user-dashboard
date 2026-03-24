export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardSettings {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
  language: 'en' | 'es' | 'fr';
}

export interface UserDashboardState {
  user: User | null;
  settings: DashboardSettings;
  isLoading: boolean;
  error: string | null;
}

export type UpdateUserPayload = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;
export type UpdateSettingsPayload = Partial<DashboardSettings>;

export enum UserActionTypes {
  FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
  UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',
  UPDATE_SETTINGS_REQUEST = 'UPDATE_SETTINGS_REQUEST',
  UPDATE_SETTINGS_SUCCESS = 'UPDATE_SETTINGS_SUCCESS',
  UPDATE_SETTINGS_FAILURE = 'UPDATE_SETTINGS_FAILURE',
}

export interface FetchUserRequestAction {
  type: UserActionTypes.FETCH_USER_REQUEST;
}

export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}

export interface FetchUserFailureAction {
  type: UserActionTypes.FETCH_USER_FAILURE;
  payload: string;
}

export interface UpdateUserRequestAction {
  type: UserActionTypes.UPDATE_USER_REQUEST;
  payload: UpdateUserPayload;
}

export interface UpdateUserSuccessAction {
  type: UserActionTypes.UPDATE_USER_SUCCESS;
  payload: User;
}

export interface UpdateUserFailureAction {
  type: UserActionTypes.UPDATE_USER_FAILURE;
  payload: string;
}

export interface UpdateSettingsRequestAction {
  type: UserActionTypes.UPDATE_SETTINGS_REQUEST;
  payload: UpdateSettingsPayload;
}

export interface UpdateSettingsSuccessAction {
  type: UserActionTypes.UPDATE_SETTINGS_SUCCESS;
  payload: DashboardSettings;
}

export interface UpdateSettingsFailureAction {
  type: UserActionTypes.UPDATE_SETTINGS_FAILURE;
  payload: string;
}

export type UserActions =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction
  | UpdateUserRequestAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  | UpdateSettingsRequestAction
  | UpdateSettingsSuccessAction
  | UpdateSettingsFailureAction;