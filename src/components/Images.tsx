import Image from "next/image";

function Images(props: {link: string}) {
    return (
        <>
            <Image
                src={props.link}
                width={1000}
                height={1000}
                alt="Picture Team"
                className="w-full h-auto object-cover rounded"
            ></Image>
        </>
    )
}

export default Images;
