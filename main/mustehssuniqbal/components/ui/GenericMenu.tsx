import { useState } from "react";
import { Button, Menu } from "react-native-paper";

const GenericMenu = ({
    title,
    items,
    onSelect
}: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});

    const openMenu = () => setIsVisible(true);

    const closeMenu = () => setIsVisible(false);

    return (
        <Menu
            visible={isVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>{title}</Button>}
        >
            {items.map((item: any) => <Menu.Item 
                                        onPress={() => { 
                                            setSelectedItem(item); 
                                            onSelect(item);
                                            closeMenu();
                                        }} 
                                        title={item.value} />)}
        </Menu>
    );
};

export default GenericMenu;