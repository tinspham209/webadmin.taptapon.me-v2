import { Avatar, Grid } from '@material-ui/core';
import cn from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PATHS } from 'src/appConfig/paths';
import { SidebarMenu } from 'src/appConfig/sidebar';
import { signOutAsync } from 'src/redux/authRedux/actions';
import { IRootState } from 'src/redux/rootReducer';
import { Navigator } from 'src/services';
import { Text, View } from '../common';
import BurgerButton from './BurgerButton';
import './styles.scss';

const Navbar: React.FC<Props> = ({ showNavbar, user, collapseSidebar, isAuthenticated, onSignOut }) => {
  const [toggleNavbar, setToggleNavbar] = React.useState(false);
  const navbarRef = React.useRef<HTMLElement>(null);
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  const pathname = location.pathname;

  const getTitle = (pathname: string) => {
    const sidebarItem = SidebarMenu.find(menu => pathname.includes(menu.href));
    return sidebarItem?.title || '';
  };

  React.useEffect(() => {
    if (pathname) {
      setTitle(getTitle(pathname));
    }
  }, [pathname]);

  if (!showNavbar) return null;

  const getUserName = () => {
    if (!user?.email) return 'Anonymous';
    return user.displayName || user.email;
  };

  const getAvatarName = () => {
    const username = `${user.displayName} `;
    return username.match(/\b(\w)/g) || user.email;
  };

  return (
    <nav
      className={cn('cmp-navbar navbar jump-down', { 'is-collapse-sidebar': collapseSidebar })}
      ref={navbarRef}
      role="navigation"
      aria-label="main navigation">
      <View className="cmp-navbar__container">
        <View className={`cmp-navbar__start`}>
          {
            <Text size={24} className="fw-bold">
              {title}
            </Text>
          }
        </View>
        <View isRow flexGrow={1} className={cn('cmp-navbar__branch', 'navbar-brand')}>
          <BurgerButton
            className="cmp-navbar__burger"
            target="navigation-menu"
            isActive={toggleNavbar}
            onClick={() => setToggleNavbar(!toggleNavbar)}
          />
        </View>

        <View
          renderIf={true}
          id="navigation-menu"
          className={cn('navbar-menu', {
            'is-active': toggleNavbar === true,
          })}
          flexGrow={1}>
          <View isRow className={cn('navbar-end cmp-navbar__end')}>
            <View
              className={`cmp-navbar__end--item`}
              onClick={() => {
                Navigator.navigate(PATHS.myProfile);
              }}>
              <Grid container spacing={1} alignItems="center" style={{ borderLeft: '2px solid #f5f5f5' }}>
                <Grid item xs={4} container justify="flex-end">
                  <Avatar className="cmp-navbar__end--item--avatar">{getAvatarName()}</Avatar>
                </Grid>
                <Grid item xs={8}>
                  <Text size={16} className="fw-bold">
                    {getUserName()}
                  </Text>
                </Grid>
              </Grid>
            </View>
          </View>
        </View>
      </View>
    </nav>
  );
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const mapStateToProps = (state: IRootState) => ({
  showNavbar: state.common.showNavbar,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  collapseSidebar: state.common.collapseSidebar,
  showSecondBurger: state.common.showSecondBurger,
});

const mapDispatchToProps = {
  onSignOut: signOutAsync.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
