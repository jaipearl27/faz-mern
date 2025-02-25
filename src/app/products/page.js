// import ProductsPage from "@/components/home/Products";
import Products from "@/components/Products";


const data = [
    {
        category: "Office Furniture",
        banner: "/officeFurniture.jpg",
        products: [
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                img: "/officeFurniture/L-ShapedDeskWorkStationWithGlass.png",
            },
            {
                title: "Electric height adjustable standing desk",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Straight desk with modesty panels & Fabric Partition",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
        ]
    },

    {
        category: "Networking Products",
        banner: "/officeFurniture.jpg",
        products: [
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                img: "/officeFurniture/L-ShapedDeskWorkStationWithGlass.png",
            },
            {
                title: "Electric height adjustable standing desk",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Straight desk with modesty panels & Fabric Partition",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                img: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
        ]
    },
    {
        category: "HVAC",
        banner: "/"
    }
];

export default function page() {
    return (<>
        <Products data={data} />
    </>)
}