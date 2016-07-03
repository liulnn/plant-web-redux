export const GET_MOMENTS = 'GET_MOMENTS';
export const ADD_MOMENTS = 'ADD_MOMENTS';


var _moments = [
    {
        mid: '1',
        author: 'jack',
        avatar: 'http://lorempixel.com/600/337/nature/',
        content: 'Today is a nice day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/330/nature/'
            }
        ],
        address: 'Beijing'
    },
    {
        mid: '2',
        author: 'lucy',
        avatar: 'http://lorempixel.com/600/338/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/331/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/332/nature/'
            }
        ],
        address: 'shanghai'
    },
    {
        mid: '3',
        author: 'lily',
        avatar: 'http://lorempixel.com/600/339/nature/',
        content: 'Today is a bad day!',
        images: [
            {
                'source': 'http://lorempixel.com/600/333/nature/'
            },
            {
                'source': 'http://lorempixel.com/600/334/nature/'
            }
        ],
        address: 'zhengzhou'
    }
];

export function getMoments(moments) {
    return {
        type: GET_MOMENTS,
        moments: _moments
    }
}

export function addMoment(moment) {
    console.log('addMoment', moment);
    return {
        type: ADD_MOMENTS,
        moment: moment
    }
}
