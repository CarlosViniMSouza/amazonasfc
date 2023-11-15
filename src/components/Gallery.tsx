import Images from "./Images";

function Gallery() {
    return (
        <>
            <Images link="/images/img04.jpg" w={1000} h={1000}/>
            <Images link="/images/img03.jpg" w={1000} h={1000}/>
            <Images link="/images/img02.jpg" w={1000} h={1000}/>
            <Images link="/images/img01.jpg" w={1000} h={1000}/>
        </>
    )
}

export default Gallery;
