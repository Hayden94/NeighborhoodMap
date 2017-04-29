var whiteIcon = 'http://i.imgur.com/yY8lPe2.png';

var blueIcon = 'http://i.imgur.com/fEE8ZUy.png';

var mapCenter = {lat: 25.8070, lng: -80.1918};
var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "gamma": 0.5
            }
        ]
    }
];

var locations = [
    {
        title: 'Bazaar Mar',
        location: {lat: 25.761180, lng: -80.193582},
        description: 'SLS Hotel\'s sleek Philippe Starck designed ' +
                    'spot for inventive seafood fare from chef Jose Andres.',
        address: '1300 S Miami Ave, Miami, FL 33130',
        category: 'Seafood'
    },
    {
        title: 'Phuc Yea',
        location: {lat: 25.840503, lng: -80.184657},
        description: 'Pho & other Vietnamese staples served in a sultry, ' +
                    'industrial space, with indoor/outdoor seating.',
        address: '7100 Biscayne Blvd, Miami, FL 33138',
        category: 'Vietnamese'
    },
    {
        title: 'Big Easy Whine Bar & Grill',
        location: {lat: 25.767167, lng: -80.193087},
        description: 'An unpretentious yet sophisticated dining destination ' +
                    'hailing from the stunning Western Cape region of ' +
                    'South Africa – inspired by the lifestyle and spirit of ' +
                    'South Africa.',
        address: 'Brickell City Centre, 701 S Miami Ave #339a, ' +
                    'Miami, FL 33131',
        category: 'South African'
    },
    {
        title: 'Santorini by Georgios',
        location: {lat: 25.769685, lng: -80.132389},
        description: 'A unique place that offers something for ' +
                    'everyone providing fresh mediterranean cuisine ' +
                    'which embraces Greek cultures.',
        address: '101 Ocean Dr, Miami Beach, FL 33139',
        category: 'Greek'
    },
    {
        title: 'Crust',
        location: {lat: 25.778406, lng: -80.205942},
        description: 'Casual Italian spot specializing in pizzas ' +
                    'with gourmet toppings, plus imaginative main dishes.',
        address: '668 NW 5th St, Miami, FL 33128',
        category: 'Pizza, Italian'
    },
    {
        title: 'Zest Miami',
        location: {lat: 25.770810, lng: -80.189372},
        description: 'Inventive takes on island fare headline the menu ' +
                    'at this modern restaurant/market.',
        address: '200 South Biscayne Boulevard, Southeast Financial ' +
                    'Center, Miami, FL 33131',
        category: 'Caribbean'
    },
    {
        title: 'Coyo Taco',
        location: {lat: 25.799690, lng: -80.199316},
        description: 'Upbeat spot (with a hidden bar) for Mexican street ' +
                    'food & margaritas made with house-brand tequila.',
        address: '2300 NW 2nd Ave, Miami, FL 33127',
        category: 'Mexican'
    },
    {
        title: 'Mignonette',
        location: {lat: 25.793323, lng: -80.190472},
        description: 'Former 1930s gas station turned oyster ' +
                    'bar/seafood haven with luxurious and down-home ' +
                    'options.',
        address: '210 NE 18th St, Miami, FL 33132',
        category: 'Seafood'
    },
    {
        title: 'NaiYaRa',
        location: {lat: 25.794466, lng: -80.144041},
        description: 'Thai street food, sushi, Asian specialties & ' +
                    'cocktails served in a cool space with a Bangkok feel. ',
        address: '1854 Bay Rd, Miami Beach, FL 33139',
        category: 'Thai'
    },
    {
        title: 'Blue Collar Restaurant',
        location: {lat: 25.837844, lng: -80.184624},
        description: 'Comfort-food favorites are bumped up a notch at ' +
                    'this American restaurant with \'70s-inspired style.',
        address: '6730 Biscayne Blvd, Miami, FL 33138',
        category: 'BBQ, American'
    },
    {
        title: 'Macchialina Taverna Rustica',
        location: {lat: 25.778578, lng: -80.141224},
        description: 'Vibrant trattoria presenting rustic Italian recipes ' +
                    'in a stylish, brick-walled setting.',
        address: '820 Alton Rd, Miami Beach, FL 33139 ',
        category: 'BBQ, Italian'
    },
    {
        title: 'La Mar',
        location: {lat: 25.765296, lng: -80.185251},
        description: 'Chic waterfront find offering Peruvian & fusion ' +
                    'fare, plus bars for cocktails, ceviche & anticucho.',
        address: '500 Brickell Key Dr, Miami, FL 33131',
        category: 'Mandarin, Peruvian'
    },
    {
        title: 'Red, the Steakhouse',
        location: {lat: 25.770446, lng: -80.134703},
        description: 'Contemporary steakhouse tempts carnivores with ' +
                    'an extensive wine list, chic ambiance & smart decor. ',
        address: '119 Washington Ave, Miami Beach, FL 33139',
        category: 'BBQ, Steakhouse'
    },
    {
        title: 'Tonis, Sushi Bar',
        location: {lat: 25.783189, lng: -80.132584},
        description: 'Upscale destination luring locals with traditional ' +
                    '& contemporary Japanese cuisine & sushi.',
        address: '1208 Washington Ave, Miami Beach, FL 33139',
        category: 'Sushi'
    },
    {
        title: 'Yardbird Southarn Table & Bar',
        location: {lat: 25.789111, lng: -80.140227},
        description: 'Rustic outpost attracting foodies with inventive ' +
                    'farm-to-table Southern comfort food & bourbon bar.',
        address: '1600 Lenox Ave, Miami Beach, FL 33139',
        category: 'BBQ, Southern'
    },
    {
        title: 'Eating House',
        location: {lat: 25.764205, lng: -80.259476},
        description: 'Menu of eclectic, locally sourced dishes in a ' +
                    'low-key interior decked with graffiti art. ',
        address: '804 Ponce De Leon Blvd, Coral Gables, FL 33134',
        category: 'Brunch, American'
    },
    {
        title: 'Cibo Wine Bar',
        location: {lat: 25.767860, lng: -80.133633},
        description: 'Modern-rustic spot delivering classic Italian fare ' +
                    '& large roster of wines from whimsical wine wall. ',
        address: '45 Miracle Mile, Miami, FL 33134',
        category: 'Italian, Whine house'
    },
    {
        title: 'Katsuya',
        location: {lat: 25.792607, lng: -80.128684},
        description: 'Stylish choice for acclaimed sushi in a colorful, ' +
                    'butterfly-covered backdrop at the SLS Hotel. ',
        address: '1701 Collins Ave, Miami Beach, FL 33139',
        category: 'Sushi'
    },
    {
        title: 'A Fish Called Avalon',
        location: {lat: 25.776958, lng: -80.131709},
        description: 'Airy, upscale haunt featuring eclectic seafood ' +
                    'dishes & prime people-watching from sidewalk seats.',
        address: '700 Ocean Dr, Miami Beach, FL 33139',
        category: 'Seafood'
    },
    {
        title: 'Zuma',
        location: {lat: 25.770536, lng: -80.189611},
        description: 'Chic & minimalist Japanese hot spot overlooking ' +
                    'the Miami River, with shared dishes, sushi & more.',
        address: '270 Biscayne Blvd Way, Miami, FL 33131',
        category: 'Japanese, Sushi, Noodles'
    }
];

