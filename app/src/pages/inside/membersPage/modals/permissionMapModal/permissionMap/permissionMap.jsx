import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl, intlShape } from 'react-intl';
import styles from './permissionMap.scss';

const cx = classNames.bind(styles);
const messages = defineMessages({
  role: {
    id: 'PermissionMap.role',
    defaultMessage: 'Action/Project role',
  },
  admin: {
    id: 'PermissionMap.admin',
    defaultMessage: 'Admin',
  },
  manager: {
    id: 'PermissionMap.manager',
    defaultMessage: 'Manager',
  },
  member: {
    id: 'PermissionMap.member',
    defaultMessage: 'Member',
  },
  owner: {
    id: 'PermissionMap.owner',
    defaultMessage: 'Owner',
  },
  notOwner: {
    id: 'PermissionMap.notOwner',
    defaultMessage: 'Not owner',
  },
  operator: {
    id: 'PermissionMap.operator',
    defaultMessage: 'Operator',
  },
  customer: {
    id: 'PermissionMap.customer',
    defaultMessage: 'Customer',
  },
  accessToManagementSystem: {
    id: 'PermissionMap.accessToManagementSystem',
    defaultMessage: 'Have access to management system',
  },
  createProject: {
    id: 'PermissionMap.createProject',
    defaultMessage: 'Create project',
  },
  deleteProject: {
    id: 'PermissionMap.deleteProject',
    defaultMessage: 'Delete project',
  },
  updateSettings: {
    id: 'PermissionMap.updateSettings',
    defaultMessage: 'Update project settings',
  },
  seeSettings: {
    id: 'PermissionMap.seeSettings',
    defaultMessage: 'See project settings',
  },
  createInternalUser: {
    id: 'PermissionMap.createInternalUser',
    defaultMessage: 'Create internal user',
  },
  inviteInternalUser: {
    id: 'PermissionMap.inviteInternalUser',
    defaultMessage: 'Invite internal user',
  },
  unSlashAssignInternalUser: {
    id: 'PermissionMap.unSlashAssignInternalUser',
    defaultMessage: 'Un/Assign internal user to/from the project',
  },
  changeUserRole: {
    id: 'PermissionMap.changeUserRole',
    defaultMessage: 'Change users role on a project\t',
  },
  delUser: {
    id: 'PermissionMap.delUser',
    defaultMessage: 'Delete internal user',
  },
  seeMembers: {
    id: 'PermissionMap.seeMembers',
    defaultMessage: 'See list of project members',
  },
  editOwnAccount1: {
    id: 'PermissionMap.editOwnAccount1',
    defaultMessage: 'Edit own account',
  },
  deleteLaunch: {
    id: 'PermissionMap.deleteLaunch',
    defaultMessage: 'Delete launch',
  },
  forceFinishLaunch: {
    id: 'PermissionMap.forceFinishLaunch',
    defaultMessage: 'Force finish launch',
  },
  startAnalysis: {
    id: 'PermissionMap.startAnalysis',
    defaultMessage: 'Start analysis manually\t',
  },
  deleteTestItem: {
    id: 'PermissionMap.deleteTestItem',
    defaultMessage: 'Delete test item and log',
  },
  moveToDebug: {
    id: 'PermissionMap.moveToDebug',
    defaultMessage: 'Move launch to debug/default mode',
  },
  mergeLaunches: {
    id: 'PermissionMap.mergeLaunches',
    defaultMessage: 'Merge launches',
  },
  workWithFiltersEtc: {
    id: 'PermissionMap.workWithFiltersEtc',
    defaultMessage: 'Work with filters, widgets, dashboards (create, edit, delete, share)\t',
  },
  readData: {
    id: 'PermissionMap.readData',
    defaultMessage: 'Read data',
  },
  oneAttention: {
    id: 'PermissionMap.oneAttention',
    defaultMessage: 'Action can be done for a internal user.',
  },
});

@injectIntl
export class PermissionMap extends Component {
  static propTypes = {
    data: PropTypes.object,
    intl: intlShape,
  };
  static defaultProps = {
    data: null,
    intl: {},
  };
  okClickHandler = (closeModal) => {
    setTimeout(() => closeModal(), 1000);
  };
  render() {
    return (
      <div className={cx('container')}>
        <table className="table-permissions">
          <thead>
            <tr>
              <th rowSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.role)}</th>
              <th rowSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.admin)}</th>
              <th rowSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.manager)}</th>
              <th colSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.member)}</th>
              <th rowSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.operator)}</th>
              <th colSpan="2" className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.customer)}</th>
            </tr>
            <tr>
              <th className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.owner)}</th>
              <th className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.notOwner)}</th>
              <th className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.owner)}</th>
              <th className={cx('th', 'roles-th')}>{this.props.intl.formatMessage(messages.notOwner)}</th>
            </tr>
          </thead>
          <tbody>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.accessToManagementSystem)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.createProject)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.deleteProject)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.updateSettings)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.seeSettings)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}><i className={cx('rp-icons', 'rp-icons-check')} /></td>
              <td className={cx('td', 'has-permission')}><i className={cx('rp-icons', 'rp-icons-check')} /></td>
              <td className={cx('td', 'has-permission')}><i className={cx('rp-icons', 'rp-icons-check')} /></td>
              <td className={cx('td', 'has-permission')}><i className={cx('rp-icons', 'rp-icons-check')} /></td>
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.createInternalUser)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')}/>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.inviteInternalUser)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.unSlashAssignInternalUser)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.changeUserRole)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.delUser)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.seeMembers)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.editOwnAccount1)}<span className={cx('attention')}>*</span></td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.deleteLaunch)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')}/>
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.forceFinishLaunch)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.startAnalysis)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.deleteTestItem)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')}/>
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.moveToDebug)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
              <td className={cx('td')} />
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.mergeLaunches)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')}/>
              <td className={cx('td')}/>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td')} />
            </tr>
            <tr className={cx('tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.workWithFiltersEtc)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
            </tr>
            <tr className={cx('even', 'tr')}>
              <td className={cx('td', 'horizontal-header')}>{this.props.intl.formatMessage(messages.readData)}</td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
              <td className={cx('td', 'has-permission')}>
                <i className={cx('rp-icons', 'rp-icons-check')} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={cx('permission-attention')}>
          <span class="attention">*</span>
          <span>{this.props.intl.formatMessage(messages.oneAttention)}</span>
        </div>
      </div>
    );
  }
}
