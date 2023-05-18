import { Card, Icon } from "@rneui/base";

const { Text, Button } = require("react-native");

const GenericCard = ({
    title, 
    onClick, 
    image,
    captionImage,
    captionDescription,
    captionFooter
}: any) => {
    return (
        <>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                    uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                    }}
                />
                <Text style={{ marginBottom: 10 }}>
                    {captionDescription == null? "": captionDescription}
                </Text>
                <Button
                    icon={
                    <Icon
                        name="code"
                        color="#ffffff"
                        iconStyle={{ marginRight: 10 }}
                    />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title={title}
                    onPress={onClick}
                />
            </Card>
        </>
    );
};

export default GenericCard;