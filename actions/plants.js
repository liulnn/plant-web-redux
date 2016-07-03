export const GET_PLANTS = 'GET_PLANTS';

var _plants = [
    {
        pid: 1,
        img: 'http://lorempixel.com/600/337/nature/',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        pid: 2,
        img: 'http://lorempixel.com/600/338/nature/',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        pid: 3,
        img: 'http://lorempixel.com/600/339/nature/',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        pid: 4,
        img: 'http://lorempixel.com/600/336/nature/',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        pid: 5,
        img: 'http://lorempixel.com/600/335/nature/',
        title: 'Hats',
        author: 'Hans',
    },
    {
        pid: 6,
        img: 'http://lorempixel.com/600/334/nature/',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        pid: 7,
        img: 'http://lorempixel.com/600/333/nature/',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        pid: 8,
        img: 'http://lorempixel.com/600/332/nature/',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

export function getPlants(plants) {
    return {
        type: GET_PLANTS,
        plants: _plants
    }
}
