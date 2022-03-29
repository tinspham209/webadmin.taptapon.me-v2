/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { KeyboardEvent } from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

import { IRootState } from 'src/redux/rootReducer';
import './styles.scss';
import { Icon, View } from '..';

const CustomDropdown: React.FC<Props> = ({ label, items, xPosition = 'right', yPosition = 'bottom' }) => {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(items.length);

  const handleKeyPress = (item: DropdownItem) => (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      item.onClick();
    }
  };

  const ItemsWithProps = () => (
    <React.Fragment>
      {items.map((item, idx) => (
        <a
          className={cn('cmp-dropdown__item', { 'cmp-dropdown__item--active': item.isActive })}
          onClick={item.onClick}
          onKeyPress={handleKeyPress(item)}
          {...itemProps[idx]}>
          <Icon className="cmp-dropdown__item-icon" name={item.icon} />
          {item.label}
        </a>
      ))}
    </React.Fragment>
  );

  return (
    <View className={cn('cmp-dropdown')}>
      <button className={cn('cmp-dropdown__button-wrap')} {...buttonProps}>
        {label}
      </button>
      <View
        className={cn(
          'cmp-dropdown__menu',
          `cmp-dropdown__menu--x-${xPosition}`,
          `cmp-dropdown__menu--y-${yPosition}`,
          { visible: isOpen, hidden: !isOpen },
        )}>
        <ItemsWithProps />
      </View>
    </View>
  );
};

export type DropdownItem = {
  label: string;
  onClick: (...args: any[]) => void;
  icon?: string;
  isActive?: boolean;
};

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    label: React.ReactNode;
    items: DropdownItem[];
    xPosition?: 'left' | 'right';
    yPosition?: 'top' | 'bottom';
  };

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDropdown);
