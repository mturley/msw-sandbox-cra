import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  Button,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSidebar,
  SkipToContent,
} from '@patternfly/react-core';

const AppLayout: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isMobileView, setIsMobileView] = React.useState(true);
  const [isNavOpenMobile, setIsNavOpenMobile] = React.useState(false);
  const onNavToggleMobile = () => {
    setIsNavOpenMobile(!isNavOpenMobile);
  };
  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  const pageId = 'primary-app-container';

  const header = (
    <PageHeader
      logo={
        <Button
          className="logo"
          variant="plain"
          onClick={() => {
            navigate('/');
          }}
        >
          Mock App!
        </Button>
      }
      logoComponent="span"
      showNavToggle
      isNavOpen={isNavOpen}
      onNavToggle={isMobileView ? onNavToggleMobile : onNavToggle}
    />
  );

  /*
  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem key={`${route.label}-${index}`} id={`${route.label}-${index}`}>
      <NavLink exact={route.exact} to={route.path} activeClassName="pf-m-current">
        {route.label}
      </NavLink>
    </NavItem>
  );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map((route, idx) => route.label && renderNavItem(route, idx))}
    </NavExpandable>
  );
  */

  const sidebar = (
    <PageSidebar
      theme="dark"
      nav={
        <Nav id="nav-primary-simple" theme="dark">
          <NavList id="nav-list-simple">
            <NavItem id="nav-item-todo">
              <NavLink
                end={true}
                to="/todo"
                className={({ isActive }) => (isActive ? 'pf-m-current' : '')}
              >
                TODO
              </NavLink>
            </NavItem>
            {/* see patternfly-react-seed -- generate these from console-extensions.json? */}
            {/*routes.map(
          (route, idx) =>
            route.label &&
            (!route.routes
              ? renderNavItem(route, idx)
              : renderNavGroup(route, idx))
            )*/}
          </NavList>
        </Nav>
      }
      isNavOpen={isMobileView ? isNavOpenMobile : isNavOpen}
    />
  );

  return (
    <Page
      mainContainerId={pageId}
      header={header}
      sidebar={sidebar}
      onPageResize={onPageResize}
      skipToContent={
        <SkipToContent
          onClick={(event) => {
            event.preventDefault();
            document.getElementById(pageId)?.focus();
          }}
          href={`#${pageId}`}
        >
          Skip to Content
        </SkipToContent>
      }
    >
      {children}
    </Page>
  );
};

export default AppLayout;
