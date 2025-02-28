import Services from "@/components/home/Services";


const services = [
    {
        title: "Aluminium Tents",
        banner: "/services/aluminiumTents.png",
        description: "Supply and lease of Aluminum Tents with Lights, Air Conditioners, Bunk Beds, Floor, Doors, Fire Extinguishers and Charging points.",
    },
    {
        title: "BOX TRUCKS / BUSES TRANSPORTATION",
        banner: "/services/boxTrucks.png",
        description: "We offer trucks for transporting passenger’s luggage and buses for moving passengers between different points.",
    },
    {
        title: "Construction Vehicles",
        banner: "/services/constructionVehicles.png",
        description: "Short / Long term lease of Construction Vehicles (Boom Loaders Compactors, Forklift, Scissor lifts, Manlifts etc.)",
    },
    {
        title: "Dumpster",
        banner: "/services/dumpster.png",
        description: "Supply and lease of Dumpsters 7,14 & 20 Cubic yards with cleaning facilities.",
    },

    {
        title: "Portable Toilets",
        banner: "/services/portableToilets.png",
        description: "Supply and lease of Portable / Container Toilets with Fresh water supply and grey water removal.",
    },
    {
        title: "SUV’s, PICK UP TRUCKS &amp; PASSENGER VANS",
        banner: "/services/suvPickups.png",
        description: "We provide rental of SUV’s (Dodge RAM, Ford 150, Toyota Hi-Ace and many other 4 x 4 Vehicles on rental with / without Fuel Cards)",
    }
]

export default function page() {
    return (
        <>
            <Services data={services} />
        </>
    )
}
