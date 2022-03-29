import { createReducer } from 'typesafe-actions';
import { signInAsync, signOutAsync } from '../authRedux/actions';
import { exchangeTokenAsync } from './../authRedux/actions';
import { setCollapseSidebar, setShowSecondBurger, toggleSideMenu } from './actions';

export type ICommonState = Readonly<{
  showNavbar: boolean;
  showSecondBurger: boolean;
  showSidebar: boolean;
  collapseSidebar: boolean;
}>;

/* ------------- Initial State ------------- */
const initialState: ICommonState = {
  showNavbar: false,
  showSecondBurger: false,
  showSidebar: false,
  collapseSidebar: true,
};

export default createReducer(initialState)
  /* ------------- setCollapseSidebar ------------- */
  .handleAction(setCollapseSidebar, (state, action) => ({
    ...state,
    collapseSidebar: action.payload,
  }))
  /* ------------- setShowSecondBurger ------------- */
  .handleAction(setShowSecondBurger, (state, action) => ({
    ...state,
    showSecondBurger: action.payload,
  }))
  .handleAction(signInAsync.success, (state, action) => ({
    ...state,
    showNavbar: true,
    showSidebar: true,
  }))
  .handleAction(exchangeTokenAsync.success, (state, action) => ({
    ...state,
    showNavbar: true,
    showSidebar: true,
  }))
  .handleAction(signOutAsync.success, (state, action) => ({
    ...state,
    showNavbar: false,
    showSidebar: false,
  }))
  .handleAction(toggleSideMenu, state => ({
    ...state,
    collapseSidebar: !state.collapseSidebar,
  }));
