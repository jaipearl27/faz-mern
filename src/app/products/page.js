// import ProductsPage from "@/components/home/Products";
import Products from "@/components/Products";


const data = [
    {
        title: "Office Furniture",
        slug: "office-furniture",
        banner: "/officeFurniture.jpg",
        products: [
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                banner: "/officeFurniture/L-ShapedDeskWorkStationWithGlass.png",
            },
            {
                title: "Electric height adjustable standing desk",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Straight desk with modesty panels & Fabric Partition",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
        ]
    },

];

export default function page() {
    return (<>
        <Products data={data} />
    </>)
}