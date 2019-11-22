import _get from 'lodash/get';
import cx from 'classnames';
import React, { useCallback } from 'react';
import {
  Link,
  matchPath,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import {
  DashboardIcon,
  LayerOutlineIcon,
  JobIcon,
  HelpIcon,
} from 'components/ui/icons';

import NDataLogoSVG from 'assets/img/ndata-logo-white.svg';
import UserAvatarPNG from 'assets/img/user-avatar.png';
import 'assets/css/header.css';

interface Props extends RouteComponentProps {}

export const Header: React.FC<Props> = ({ location }) => {
  const { user } = useAuth();
  const isMatch = useCallback(
    (path: string, isExact: boolean = false) => {
      const match = matchPath(location.pathname, path);
      return isExact ? match && match.isExact : match;
    },
    [location.pathname]
  );

  return (
    <div id="header">
      <div className="header-inner">
        <div className="flex_row">
          <div className="header-left">
            <div id="logo">
              <Link to="/">
                <img src={NDataLogoSVG} alt="nData" />
              </Link>
            </div>

            <ul className="g-icons-list text-left">
              <li className={cx({ active: isMatch('/', true) })}>
                <DashboardIcon />
                <Link to="/">Dashboard</Link>
              </li>

              <li className={cx({ active: isMatch('/source') })}>
                <LayerOutlineIcon />
                <Link to="/source">Source NavigatorNavLink</Link>
              </li>

              <li className={cx({ active: isMatch('/job-list') })}>
                <JobIcon />
                <Link to="/jobs">Job List</Link>
              </li>
            </ul>
          </div>

          <div className="header-right">
            <ul className="g-icons-list text-left">
              <li>
                <HelpIcon />
                <Link to="/">Help</Link>
              </li>
            </ul>

            <div className="nav_dropdown user-dropdown">
              <ul className="g-icons-list text-right">
                <li className="g-dropdown">
                  <a
                    id="profile-dropdown"
                    className="header-right-block account_dropdown dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                    type="button"
                  >
                    <div className="user-icon-container">
                      <img
                        alt="user-avatar"
                        src={UserAvatarPNG}
                        style={{ width: 'inherit' }}
                      />
                    </div>
                    <div className="user-name">
                      {_get(user, 'attributes.email')}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
