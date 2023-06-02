import { useState, useEffect } from "react";
import { Button, Menu, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor } from "../../uniformTheme/uniformTheme";

const GenericMenu = ({
    title,
    items,
    onSelect
}: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [buttonText, setButtonText] = useState(title);

    const openMenu = () => setIsVisible(true);

    const closeMenu = () => setIsVisible(false);

    const onPress = (item: any) => { 
        setSelectedItem(item);
        onSelect(item);
        setButtonText(`Reminder: ${item.value}`);
        setTimeout(closeMenu, 500);
    };

    const menuStyle = {
        backgroundColor: backgroundColor.primaryShades.light
    }

    const itemStyle = {
        backgroundColor: backgroundColor.primaryShades.light
    };

    const getItemTextWithSelectedIcon = (item: any) => 
        <Text>
            {item.value}
            {"\t"}
            {item.value == selectedItem.value?
                <Icon name="check" size={25} color={backgroundColor.primaryShades.darker} />
                : <></>}
        </Text>;

    return (
        <Menu style={menuStyle}
            visible={isVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>{buttonText}</Button>}
        >
            {items.map((item: any) => <Menu.Item 
                                            style={itemStyle}
                                            onPress={() => onPress(item)}
                                            title={getItemTextWithSelectedIcon(item)}
                                        />)}
        </Menu>
    );
};

export default GenericMenu;