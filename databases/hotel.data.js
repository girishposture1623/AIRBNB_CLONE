
const hotels = [

    // {
    //     id: "101",
    //     title: "The White Port Luxe Apt Nearby Airport / Symbiosis",
    //     location: "Pune City, Maharashtra, India",
    //     rating: 5.0,
    //     reviews: 38,
    //     guests: 4,
    //     bedrooms: 1,
    //     beds: 1,
    //     bathrooms: 1,
    //     host: {
    //         name: "Dhanraj",
    //         isSuperhost: true
    //     },
    //     pricePerNight: 2899,
    //     images: [
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif'
    //     ],
    //     amenities: [
    //         "Wifi",
    //         "Kitchen",
    //         "Free parking",
    //         "Dedicated workspace",
    //         "TV"
    //     ],
    //     description:
    //         "Luxuriously refined apartment near airport and Symbiosis with premium interiors and comfort."
    // },

    // {
    //     id: 101,
    //     category: 'pune',
    //     title: 'Popular Homes in Pune',
    //     // image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1546818182897128740/original/fce41797-865f-4e43-9e10-e64f994b4775.jpeg?im_w=1200",
    //     // image: './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //     images: [

    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
    //         './images/fce41797-865f-4e43-9e10-e64f994b4775.avif'
    //     ],
    //     favourite: "Guest favourite",
    //     desc: "Flat in Pune City",
    //     price: 5720,
    //     nights: 2,
    //     rating: 5.0,
    //     Meet_host: {
    //         name: ' Madhumitha',
    //         durationInMonths: 1,
    //         photo: '',
    //         Reviews: 11,
    //         rating: 5.0,
    //         details: {
    //             born: '90s',
    //             Fun_fact: 'Fun fact: I gave up coffee for my anxiety',
    //             dic: `I once swam with sharks in the Maldives, ate breakfast with giraffes in Nairobi, slept in a cave under the stars in Jordan, released lanterns with strangers in Chiang Mai, went on a 30-day overland adventure across South Africa and oh, I also gave up coffee for my anxiety. Iam an only child and am very close to my parents. I married my long-term boyfriend in 2024, we're each dog parents.we are working towards our shared goal of early retirement!`,
    //             Host_details: 'Response rate: 100% Responds within an hour'
    //         }

    //     },
    //     home: {
    //         top: 'Top 5% of homes',
    //         dic: 'This home is highly ranked based on ratings, reviews and reliability.',
    //         check: 'Self check-in',
    //         check_dic: 'Check yourself in with the lockbox.',
    //         location: 'Unbeatable location',
    //         location_dic: '100% of guests in the past year gave this location a 5-star rating.'
    //     },
    //     About_space: {
    //         "title": "A quiet escape in a lovely Palolem neighborhood",

    //         "shortDescription": "A homey, sunlit studio with leafy palm views near Palolem beach.",

    //         "fullDescription": "Our studio offers a homey, sunlit stay with plenty of ventilation and peaceful leafy palm views. It's the perfect place to unwind, create, work or simply watch the vervet monkeys wander by.",

    //         location: {
    //             "area": "Palolem",
    //             "city": "Canacona",
    //             "state": "Goa",
    //             "country": "India"
    //         },

    //         nearbyPlaces: [
    //             "Palolem Beach",
    //             "Patnem Beach",
    //             "Talpona Beach",
    //             "Agonda Beach",
    //             "Chaudi Market"
    //         ],

    //         spaceDetails: "The studio features an open-plan layout with a kitchenette, lounge, dining area, king bed, bathroom with shower, and an open balcony.",

    //         facilities: [
    //             "High speed internet",
    //             "Air conditioner",
    //             "HDTV with Netflix",
    //             "Stove",
    //             "Full size fridge",
    //             "Washing machine",
    //             "Balcony",
    //             "Covered parking"
    //         ],

    //         includedInPrice: [
    //             "Filtered RO drinking water",
    //             "Detergent",
    //             "Tea & coffee",
    //             "Secure parking"
    //         ],

    //         paidExtras: [
    //             "Laundry service",
    //             "Airport pickup & drop-off",
    //             "Motorbike rental",
    //             "Bicycle rental"
    //         ],

    //         guestAccess: "Full house access with number lock.",

    //         notes: "Suitable for solo travelers and families. Private entrance and secure gated complex."
    //     },
    //     place_offers: {
    //         Beach: 'Beach access',
    //         Kitchen: 'Kitchen',
    //         Wifi: 'Wifi',
    //         Dedicated_workspace: 'Dedicated workspace',
    //         Free_parking: 'Free parking on premises',
    //         Carbon_alarm: 'Carbon monoxide alarm',
    //         Smoke_alarm: 'Smoke alarm'
    //     },
    //     Reviews: {

    //     }

    // },
    {
        id: 102,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1547590235904763344/original/68b5090c-0cd3-460c-aeb9-0836a7ee22eb.jpeg?im_w=960",
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,
        id: 103,
        category: 'pune',
        title: 'Popular Homes in Pune',
        image: './images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
        images: [
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/7add4597-e00e-4068-b37c-29a36b892762.avif',
        ],
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 5720,
        nights: 2,
        rating: 5.0,
    },
    {
        id: 103,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1521689726553698811/original/73e5b2d1-6c6f-4a9c-a9c0-79f266c6a8e5.jpeg?im_w=960",
        images: [
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/fce41797-865f-4e43-9e10-e64f994b4775.avif',
            '../images/7add4597-e00e-4068-b37c-29a36b892762.avif',
        ],
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 104,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1549345259394156772/original/550df4e1-816e-4d6f-8ccd-ef0f1c48298d.jpeg?im_w=1200",
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 105,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1468233508737718306/original/e4dfd07a-e29d-4b2b-a1b8-f44be15d141e.jpeg?im_w=1200",
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 106,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1537484063185169189/original/9a300954-a774-4895-a0ff-c79cb88594c6.jpeg?im_w=1200",
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 107,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1558737648249786592/original/98114ea2-1f86-4bf3-af68-7f74adf8ff1a.jpeg?im_w=960",
        favourite: "Guest favourite",
        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 108,
        category: 'pune',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1543557212010525723/original/6dc47fb3-7429-4f59-85bc-890b5a308ada.jpeg?im_w=1200",
        favourite: "Guest favourite",

        desc: "Flat in Pune City",
        price: 3720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 109,
        category: 'raigad',
        title: 'Popular Homes in Raigad',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1361353971494467553/original/f7d9c46f-e255-45a0-9b3d-82fbb18797c3.jpeg?im_w=960",
        favourite: "Guest favourite",
        desc: "Apartment in Pimpri-Chinchwad",
        price: 7605,
        nights: 2,
        rating: 4.93,
    },
    {
        id: 110,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-592534982498584276/original/95af5f8d-e971-46ad-acc5-030900f26946.jpeg?im_w=1200",
        favourite: "Guest favourite",
        desc: "Tiny home in Kamshet",
        price: 9758,
        nights: 2,
        rating: 4.87,

    },
    {
        id: 111,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1309471658215432504/original/a78b4687-ca97-4c33-aa8d-1b9dc53df350.jpeg?im_w=1200",
        favourite: "Guest favourite",

        desc: "Cabin in Lavasa Lake City",
        price: 15358,
        nights: 2,
        rating: 5.0,

    },
    {
        id: 112,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-985240485996289865/original/105850c8-e5b8-4be4-86fa-18c331443201.jpeg?im_w=960",
        favourite: "Guest favourite",

        desc: "Home in Raigad district",
        price: 37650,
        nights: 2,
        rating: 5.0,

    },
    {
        id: 113,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-47413773/original/6243fd89-ce42-4abb-a2a3-eaa20e4c53ac.jpeg?im_w=1200",
        favourite: "Guest favourite",

        desc: " Boutique hotel in Awas",
        price: 16440,
        nights: 2,
        rating: 48.8,
    },
    {
        id: 114,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-775755744436357395/original/7bb6978b-5159-4ffc-9858-b9cd709155e8.jpeg?im_w=960",
        favourite: "Guest favourite",

        desc: "Flat in Pune City",
        price: 8720,
        nights: 2,
        rating: 4.45,

    },
    {
        id: 115,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/1f097376-b871-4565-ac0b-825e7f348c6f.jpg?im_w=960",
        favourite: "Guest favourite",

        desc: "Apartment in Dhokshet",
        price: 8720,
        nights: 2,
        rating: 4.45,
    },
    {

        id: 116,
        category: 'raigad',
        image: "https://a0.muscache.com/im/pictures/6ac4ad48-3c67-48b1-8651-2fd94881c739.jpg?im_w=1200",
        favourite: "Guest favourite",

        desc: "Room in Kamshet",
        price: 8620,
        nights: 2,
        rating: 4.45,

    },

];

module.exports = hotels