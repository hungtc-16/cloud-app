import { FC } from "react";

interface BoxImageProps {
    imageUrl: string;
}
const BoxImage: FC<BoxImageProps> = ({ imageUrl }) => {
    return (
        <div className="image">
            <img src={imageUrl} alt="" className="image__img" />
        </div>
    );
};

export default BoxImage;