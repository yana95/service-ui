import { ACCOUNT_ROLES_ENUM } from 'common/constants/accountRolesEnum';
import { PROJECT_ROLES } from 'common/constants/projectRoles';

const userSelector = state => state.user || {};
export const userInfoSelector = state => userSelector(state).info || {};
export const defaultProjectSelector = state => userInfoSelector(state).default_project || '';
export const activeProjectSelector = state => userSelector(state).activeProject || defaultProjectSelector(state) || '';
export const userIdSelector = state => userInfoSelector(state).userId;
export const settingsSelector = state => userSelector(state).settings;
export const startTimeFormatSelector = state => settingsSelector(state).startTimeFormat;
export const getAssignedProjectsSelector = state => userInfoSelector(state).assigned_projects || {};
export const getRoleForCurrentProjectSelector = state => getAssignedProjectsSelector(state)[activeProjectSelector(state)].projectRole || '';
export const isAdminSelector = state => (
  userInfoSelector(state).userRole === ACCOUNT_ROLES_ENUM.administrator
);
export const hasPermissionsSelector = (state, role) => {
  const project = getAssignedProjectsSelector(state)[activeProjectSelector(state)];
  if (isAdminSelector(state)) { return true; }
  if (!project) { return false; }
  const projectRole = project.projectRole;
  const incomingProjectRole = role || projectRole;
  const projectRoleIndex = PROJECT_ROLES.indexOf(projectRole);
  const incomingProjectRoleIndex = PROJECT_ROLES.indexOf(incomingProjectRole);
  let permission = false;
  if (projectRoleIndex > 2) {
    permission = projectRoleIndex >= incomingProjectRoleIndex;
  }
  return permission;
};
export const isAdminSelector = (state) => userInfoSelector(state).userRole === 'ADMINISTRATOR';
