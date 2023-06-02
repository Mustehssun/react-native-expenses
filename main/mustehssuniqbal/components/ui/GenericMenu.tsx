import { useState } from "react";
import { Button, Menu, Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor } from "../../uniformTheme/uniformTheme";

const GenericMenu = ({
    title,
    items,
    onSelect,
    defaultValue
}: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [buttonText, setButtonText] = useState(title);

    const openMenu = () => setIsVisible(true);

    const closeMenu = () => setIsVisible(false);

    const select = (item: any) => { 
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
                <Icon name="check" size={25} color={backgroundColor.primaryShades.darker} />: 
                <></>}
        </Text>;

    const renderItem = (item: any) => {
        if(defaultValue != null && defaultValue == item.value && selectedItem.value == null) {
            select(item);
        }
        return (
            <Menu.Item 
                style={itemStyle}
                onPress={() => select(item)}
                title={getItemTextWithSelectedIcon(item)}
            />
        );
    };

    return (
        <Menu style={menuStyle}
            visible={isVisible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>{buttonText}</Button>}
        >
            {items.map((item: any) => renderItem(item))}
        </Menu>
    );
};

export default GenericMenu;