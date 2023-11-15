import Image from "next/image";

function Images(props: {link: string, w: number, h: number}) {
    return (
        <>
            <Image
                src={props.link}
                width={props.w}
                height={props.h}
                alt="Picture"
                className="w-full h-auto object-cover rounded"
            ></Image>
        </>
    )
}

export default Images;
