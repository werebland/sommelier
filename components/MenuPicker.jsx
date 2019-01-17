import React from 'react';
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

const PosedMenuPickerContainer = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
  preEnter: {
    opacity: 0,
    y: -16,
  }
})

const MenuPickerContainer = styled(PosedMenuPickerContainer)`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
`;

const PosedMenuOptions = posed.ul({
  enter: {
    staggerChildren: 300
  }
})

const MenuOptions = styled(PosedMenuOptions)`
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const PosedMenuOption = posed.li({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
  preEnter: {
    opacity: 0,
    y: -16,
  }
})

const MenuOption = styled(PosedMenuOption)`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuPicker = ({menus, handleMenuSelect}) => (
  <MenuPickerContainer>
    <MenuOptions>
        <PoseGroup>
          {menus.map((menu) =>(
            <MenuOption key={menu.name} onClick={() => handleMenuSelect(menu)}>
              {menu.name}
            </MenuOption>
          ))}
        </PoseGroup>
    </MenuOptions>
  </MenuPickerContainer>
);

export default MenuPicker;
