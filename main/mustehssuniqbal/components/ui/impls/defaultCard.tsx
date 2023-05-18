const { Text, Button } = require("react-native");

const DefaultCard = ({
    title, 
    onClick, 
    image,
    captionTitle,
    captionImage,
    captionDescription,
    captionFooter
}: any) => {
    return (
        <>
            <Button onPress={onClick}
            title={title} />
        </>
    );
};

export default DefaultCard;