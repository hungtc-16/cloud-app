import { useMemo } from "react";
import HeaderPage from "~/components/base/HeaderPage/HeaderPage";
import '../styles/imageStyles.scss';
import BoxImage from "./components/BoxImage";

const Images = () => {

    const data = useMemo(() => {
        const data = [];
        return data;

    }, []);

    const authHandler = (err, data) => {
        console.log(err, data);
    };

    return (
        <div className="wrapper">
            <div className="images-header">
                <HeaderPage title={"Images List"}>
                </HeaderPage>

            </div>
            <div className="container">
                <div className="images__container">
                    {
                        data.map(imageUrl => (
                            <BoxImage key={imageUrl} imageUrl={imageUrl} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Images;