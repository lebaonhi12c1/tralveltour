import {v4 as uuidv4} from 'uuid'
const destination = [
    {
        image: 'https://img.freepik.com/free-photo/beautiful-shot-assorted-color-buildings-hill-near-sea-manarola-italy_181624-18586.jpg?w=996&t=st=1680446608~exp=1680447208~hmac=2005d83da6c2d3cd89d7de37de12a3e4c514c8fe6652cf851fe9c57bbd51adc8',
        
        title: 'North Italy',
    },
    {
        image: 'https://img.freepik.com/free-photo/san-francisco-city-skyline-with-urban-architectures_649448-237.jpg?w=740&t=st=1680446554~exp=1680447154~hmac=a6fd59761256e330b16128301af5639ab4abf2e850a36c0811c0d2f07da05c7e',
        
        title: 'Fan Francisco',
    },
    {
        image: 'https://img.freepik.com/free-photo/beautiful-sun-shining-across-mountains_181624-59069.jpg?w=996&t=st=1680446506~exp=1680447106~hmac=95b7ae21dc18311c92de2e298c517b25880328da6fccf219b7f5c9d7cd5c5182',
        
        title: 'Nepal',
    },
    {
        image: 'https://img.freepik.com/free-photo/beautiful-sun-shining-across-mountains_181624-59069.jpg?w=996&t=st=1680446506~exp=1680447106~hmac=95b7ae21dc18311c92de2e298c517b25880328da6fccf219b7f5c9d7cd5c5182',
        
        title: 'Nepal',
    },
]
const listtours =[
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/young-woman-taking-photo-with-her-phone-beautiful-mountain-view_1258-84894.jpg?w=996&t=st=1680461090~exp=1680461690~hmac=b7dfb3e5cca454f9e57fa90bd8e0770fc3a1edf5b4219a7f0bc4a78dffe9ad04',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/beautiful-girl-making-drip-coffee-sunrise-viewpoint-pha-hi-village-chiang-rai-province-thailand_335224-1165.jpg?w=996&t=st=1680461351~exp=1680461951~hmac=4e82a8abe724cce2c80664611cbae53d4e7e3b72485000b61b4b6ca817d8f728',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7581.jpg?w=996&t=st=1680461368~exp=1680461968~hmac=32f51192d6f199ccaaa1e909ab3fd8fdc9cbca09f1a2f85c1572d74f6cbcb3f2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/tourist-taking-photos-nature-landscape-using-his-smartphone_346278-388.jpg?w=996&t=st=1680461385~exp=1680461985~hmac=16b8623eb5911f9684029f2d6b091450ff25423c6bb45186de7b24e12f6972e2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/tourist-taking-photos-nature-landscape-using-his-smartphone_346278-388.jpg?w=996&t=st=1680461385~exp=1680461985~hmac=16b8623eb5911f9684029f2d6b091450ff25423c6bb45186de7b24e12f6972e2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/tourist-taking-photos-nature-landscape-using-his-smartphone_346278-388.jpg?w=996&t=st=1680461385~exp=1680461985~hmac=16b8623eb5911f9684029f2d6b091450ff25423c6bb45186de7b24e12f6972e2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/young-woman-taking-photo-with-her-phone-beautiful-mountain-view_1258-84894.jpg?w=996&t=st=1680461090~exp=1680461690~hmac=b7dfb3e5cca454f9e57fa90bd8e0770fc3a1edf5b4219a7f0bc4a78dffe9ad04',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/beautiful-girl-making-drip-coffee-sunrise-viewpoint-pha-hi-village-chiang-rai-province-thailand_335224-1165.jpg?w=996&t=st=1680461351~exp=1680461951~hmac=4e82a8abe724cce2c80664611cbae53d4e7e3b72485000b61b4b6ca817d8f728',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
    {
        
        title: 'Nepal Tours',
        image: 'https://img.freepik.com/free-photo/female-tourists-hand-have-happy-travel-map_1150-7581.jpg?w=996&t=st=1680461368~exp=1680461968~hmac=32f51192d6f199ccaaa1e909ab3fd8fdc9cbca09f1a2f85c1572d74f6cbcb3f2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae optio amet? Aspernatur quae dolorem non, sequi consequatur magni minima sint dignissimos quam laborum amet corporis dolorum fugit atque rerum?',
        price: 950,
        rating: 10,
        numberOfDay: 9,
        age: 16,
        type: 'Adventure',

    },
]
const userRating = [
    {
        avatar :'https://img.freepik.com/free-photo/cheerful-beautiful-young-asian-woman-feeling-happy-smiling-camera-while-traveling-chinatown-beijing-china_7861-1341.jpg?w=1060&t=st=1680511818~exp=1680512418~hmac=ae7a4c2828e72ea596b33e20d02d868c81248e70528ea981b300f347f62c4236',
        name: 'Christine',
        rating: 10,
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio nesciunt at earum dolorem nam possimus optio expedita beatae, culpa quibusdam dolores ipsam incidunt quaerat dolor voluptates! Fugiat, repudiandae. Provident!',

    },
    {
        avatar :'https://img.freepik.com/free-photo/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background_658552-32.jpg?w=996&t=st=1680511931~exp=1680512531~hmac=4fdf5067af1f04fcb7f8ae141a51630a31af229aac2308beccce3b5d30fa853c',
        name: 'Anna',
        rating: 10,
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio nesciunt at earum dolorem nam possimus optio expedita beatae, culpa quibusdam dolores ipsam incidunt quaerat dolor voluptates! Fugiat, repudiandae. Provident!',

    },
    {
        avatar :'https://img.freepik.com/free-photo/portrait-successful-handsome-executive-businessman-smart-casual-wear-looking-camera-smiling-arms-crossed-modern-office-workplace-young-asia-guy-standing-contemporary-meeting-room_7861-2505.jpg?w=1060&t=st=1680511861~exp=1680512461~hmac=81f0317657c5941e7fe164726f275d3f0d6a28f5b5f6d0cac9f1116d574ef2fc',
        name: 'Petter',
        rating: 8,
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio nesciunt at earum dolorem nam possimus optio expedita beatae, culpa quibusdam dolores ipsam incidunt quaerat dolor voluptates! Fugiat, repudiandae. Provident!',

    },
    {
        avatar :'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1680511844~exp=1680512444~hmac=19e6470f1522597fa10efe19d237a6f8ddb6938cbc05da7b6d1dbeb8e2744f70',
        name: 'John Son',
        rating: 10,
        comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio nesciunt at earum dolorem nam possimus optio expedita beatae, culpa quibusdam dolores ipsam incidunt quaerat dolor voluptates! Fugiat, repudiandae. Provident!',

    },
]
const tours = listtours.map((item,index)=>({...item,_id: `${index}`}))
export {destination,tours,userRating}