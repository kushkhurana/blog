import Image from "next/image";

export const metadata = {
    title: "About Us",
    description: "We provide marketing, IT & software solution services.",
};

const page = async () => {
    const bannerUrl = "/banners/about.jpg";
    // console.log(data);
    return (
        <div className="page-body">
            <h3 className="page-title">About Page</h3>
            <div className="banner-image">
                <Image src={bannerUrl} width={1199} height={487} />
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident quas harum accusantium ratione rerum. Repellat qui, reprehenderit recusandae eligendi distinctio ut doloribus iure voluptatum quidem. Rerum dolore eligendi vitae ad!</p>
        </div>
    )
}

export default page