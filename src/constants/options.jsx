export const SelectTravelesList = [
{
    id: 1,
    title: 'Just Me',
    desc: 'A solo traveler in exploration',
    people: '1',
    icon: '🧍'
},
{
    id: 2,
    title: 'Couple',
    desc: 'Traveling with a loved one',
    people: '2',
    icon: '💑'
},
{
    id: 3,
    title: 'Family',
    desc: 'Enjoying time together as a family',
    people: '3-5',
    icon: '👨‍👩‍👧‍👦'
},
{
    id: 4,
    title: 'Friends',
    desc: 'Adventures with your best pals',
    people: '3-8',
    icon: '🧑‍🤝‍🧑'
},
{
    id: 5,
    title: 'Group',
    desc: 'Exploring in a large group',
    people: '9+',
    icon: '👥'
}
];

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Economical',
        desc: 'Stay conscious of costs',
        icon: '💸'
    },
    
    {
        id: 2,
        title: 'Mid-Range',
        desc: 'Balance comfort and affordability',
        icon: '💵'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Enjoy the finer things in life',
        icon: '💎'
    },
    {
        id: 4,
        title: 'All-Inclusive',
        desc: 'Everything you need in one package',
        icon: '📦'
    },
    
];

export const AI_PROMPT = 'Generate Travel Plan for Loaction: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotel options list like hotel name, hotel address,price,hotel image url,geo coordinates,rating ,descriptions and suugest itineary with place name,place details,place image url,geo coordinates,ticket pricing,rating,time travle each of the location for {totalDays} days with each day plan with best time to visit in the JSON format'