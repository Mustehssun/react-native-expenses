import { useState } from "react";
import { Button, Menu } from "react-native-paper";

const GenericMenu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const openMenu = () => setIsVisible(true);

    const closeMenu = () => setIsVisible(false);

    return (
        <Menu
            visible={isVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show Menu</Button>}
        >
            <Menu.Item onPress={() => {}} title="Item1" />
            <Menu.Item onPress={() => {}} title="Item2" />
        </Menu>
    );
};

export default GenericMenu;