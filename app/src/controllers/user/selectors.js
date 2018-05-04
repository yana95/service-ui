import { ACCOUNT_ROLES_ADMIN } from 'common/constants/accountRoles';

const userSelector = (state) => state.user || {};
export const userInfoSelector = (state) => userSelector(state).info || {};
export const defaultProjectSelector = (state) => userInfoSelector(state).default_project || '';
export const activeProjectSelector = (state) =>
  userSelector(state).activeProject || defaultProjectSelector(state) || '';
export const userIdSelector = (state) => userInfoSelector(state).userId;
export const settingsSelector = (state) => userSelector(state).settings;
export const startTimeFormatSelector = (state) => settingsSelector(state).startTimeFormat;
export const getAssignedProjectsSelector = (state) =>
  userInfoSelector(state).assigned_projects || {};
export const getRoleForCurrentProjectSelector = (state) =>
  getAssignedProjectsSelector(state)[activeProjectSelector(state)].projectRole || '';
export const isAdminSelector = (state) => userInfoSelector(state).userRole === ACCOUNT_ROLES_ADMIN;
