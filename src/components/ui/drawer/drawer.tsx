import cx from 'classnames';
import _omit from 'lodash/omit';

import React, { Suspense } from 'react';
import RcDrawer from 'rc-drawer';
import { IDrawerProps } from 'rc-drawer/lib/IDrawerPropTypes';
import { CloseIcon } from 'components/ui/icons';
import { Code } from 'react-content-loader';
import 'rc-drawer/assets/index.css';
import './drawer.css';

interface DrawerProps extends IDrawerProps {
  closable?: boolean;
  drawerStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

class Drawer extends React.Component<DrawerProps> {
  static defaultProps = {
    closable: true,
    placement: 'right',
    width: '600px',
    level: null,
  };

  renderHeader() {
    const { title, closable, headerStyle } = this.props;
    if (!title && !closable) {
      return null;
    }

    return (
      <div className="header" style={headerStyle}>
        {title && <h4>{title}</h4>}
        {closable && this.renderCloseIcon()}
      </div>
    );
  }

  renderCloseIcon() {
    return (
      <a
        className="close-nd-slidePop"
        onClick={this.props.onClose}
        aria-label="Close"
        role="button"
      >
        <i className="nd-svgIcon">
          <CloseIcon />
        </i>
      </a>
    );
  }

  renderBody() {
    if (!this.props.open) return null;

    return (
      <div className="nd-slidePopWrap">
        {this.renderHeader()}
        <div className="body" style={this.props.bodyStyle}>
          <Suspense fallback={<Code />}>{this.props.children}</Suspense>
        </div>
      </div>
    );
  }

  render() {
    const { open, className, ...rest } = this.props;

    return (
      <RcDrawer
        open={open}
        handler={false}
        {..._omit(rest, [
          'zIndex',
          'style',
          'closable',
          'drawerStyle',
          'headerStyle',
          'bodyStyle',
          'title',
          'pageHeader',
          'autoInsertSpaceInButton',
        ])}
        className={cx(className, 'nd-slidePop show')}
      >
        {this.renderBody()}
      </RcDrawer>
    );
  }
}

export default Drawer;
