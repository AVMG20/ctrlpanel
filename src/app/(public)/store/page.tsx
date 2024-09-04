import Link from "next/link";

const services = [{
    id: 1,
    name: 'Minecraft',
    image: 'https://elixirnode.com/assets/images/minecraft-g.jpg',
    url: '/minecraft-hosting/',
    price: '0.85',
    priceDescription: 'Per Month'
}, {
    id: 2,
    name: 'Counter Strike: Global Offensive',
    image: 'https://elixirnode.com/assets/images/csgo-g.jpg',
    url: '/csgo-hosting',
    price: '0.35',
    priceDescription: 'Per Month'
}, {
    id: 3,
    name: 'Ark Survival',
    image: 'https://elixirnode.com/assets/images/arki.webp',
    url: '/ark-hosting',
    price: '2.00',
    priceDescription: 'Per Month'
}, {
    id: 4,
    name: 'Discord Bot',
    image: 'https://elixirnode.com/assets/images/disc.webp',
    url: '/bot-hosting',
    price: '2.50',
    priceDescription: 'Per Month'
}, {
    id: 5,
    name: 'Hytale',
    image: 'https://elixirnode.com/assets/images/hytale.webp',
    url: '/hytale',
    price: '?',
    priceDescription: 'Per Month'
}, {
    id: 6,
    name: 'Valheim',
    image: 'https://elixirnode.com/assets/images/valheim.webp',
    url: '/valheim-hosting',
    price: '2.00',
    priceDescription: 'Per Month'
}, {
    id: 7,
    name: 'Garry\'s Mod',
    image: 'https://elixirnode.com/assets/images/gmod.webp',
    url: '/garrysmod-hosting',
    price: '5.00',
    priceDescription: 'Per Month'
}, {
    id: 8,
    name: 'Rust',
    image: 'https://elixirnode.com/assets/images/rustbox.webp',
    url: '/rust-hosting',
    price: '1.50',
    priceDescription: 'Per Month'
}, {
    id: 9,
    name: 'Terraria',
    image: 'https://elixirnode.com/assets/images/terraria.webp',
    url: '/terraria-hosting',
    price: '8.00',
    priceDescription: 'Per Month'
}, {
    id: 10,
    name: 'FiveM/GTA',
    image: 'https://elixirnode.com/assets/images/fivembox.webp',
    url: '/fivem-hosting',
    price: '0.20',
    priceDescription: 'Per Month'
}, {
    id: 11,
    name: 'Unturned',
    image: 'https://elixirnode.com/assets/images/unturned.webp',
    url: '/unturned-hosting',
    price: '1.50',
    priceDescription: 'Per Month'
}];


export default async function Store() {
    return (
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
               {services.map((service) => (
                   <Link key={service.id}
                         href={`/store/service/${service.id}`}
                         className="block card bordered w-full h-64 cursor-pointer hover:shadow-2xl hover:text-primary relative">
                       <div className="absolute card inset-0 bg-no-repeat bg-cover"
                            style={{backgroundImage: `url(${service.image})`}}
                            aria-hidden="true"></div>
                       <div className="relative p-4 flex flex-col justify-end h-full">
                           <h2 className="card-title text-2xl">{service.name}</h2>
                           <div className="mt-2">
                               <p className="text-lg">{`from $${service.price} / ${service.priceDescription}`}</p>
                           </div>
                       </div>
                   </Link>
               ))}
           </div>

    );
}
