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
const userComments = [
    {
        image: 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=996&t=st=1680701739~exp=1680702339~hmac=530be2005f6c5a9e062893118cd6a5b540adde7563538e43aed6597d5b39c17c',
        name: 'Jonh',
        evaluteStar: 5,
        evaluteTime: '10 mounth ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus illum saepe veniam nostrum officiis vel? Accusamus sint ut quasi deserunt excepturi, amet accusantium libero voluptate omnis doloremque quaerat velit.',
    },
    {
        image: 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=996&t=st=1680701739~exp=1680702339~hmac=530be2005f6c5a9e062893118cd6a5b540adde7563538e43aed6597d5b39c17c',
        name: 'Jonh',
        evaluteStar: 5,
        evaluteTime: '10 mounth ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus illum saepe veniam nostrum officiis vel? Accusamus sint ut quasi deserunt excepturi, amet accusantium libero voluptate omnis doloremque quaerat velit.',
    },
    {
        image: 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=996&t=st=1680701739~exp=1680702339~hmac=530be2005f6c5a9e062893118cd6a5b540adde7563538e43aed6597d5b39c17c',
        name: 'Jonh',
        evaluteStar: 5,
        evaluteTime: '10 mounth ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus illum saepe veniam nostrum officiis vel? Accusamus sint ut quasi deserunt excepturi, amet accusantium libero voluptate omnis doloremque quaerat velit.',
    },
    {
        image: 'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=996&t=st=1680701739~exp=1680702339~hmac=530be2005f6c5a9e062893118cd6a5b540adde7563538e43aed6597d5b39c17c',
        name: 'Jonh',
        evaluteStar: 5,
        evaluteTime: '10 mounth ago',
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatibus illum saepe veniam nostrum officiis vel? Accusamus sint ut quasi deserunt excepturi, amet accusantium libero voluptate omnis doloremque quaerat velit.',
    },
]
const bloglist = [
    {
        image: 'https://img.freepik.com/free-photo/portrait-pretty-young-hipster-woman-having-fun-city-with-camera_1150-4602.jpg?w=996&t=st=1680766864~exp=1680767464~hmac=507d25071f81d1241380a3be4ac842c6f20eac181c3ae789161b6e06f9f6bcc7',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
    {
        image: 'https://img.freepik.com/free-photo/beautiful-girl-walking-sun-moon-lake-taiwan_335224-597.jpg?w=996&t=st=1680766916~exp=1680767516~hmac=0b3a55871342e41887cd1b70063efea5db1f19d5b05b99e36a82020728fc0c64',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
    {
        image: 'https://img.freepik.com/free-photo/female-standing-hill-looking-jungle_181624-522.jpg?w=1060&t=st=1680767070~exp=1680767670~hmac=1e087e27468166e02eb337ef62bc782cb6bf4e66cbdc2c15ac9c90e2c67a22a4',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/nature-tourism-mountain-enjoying-rural-villagetravel-relax-holiday_36074-1184.jpg?w=996',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/lifestyle-dal-lake-man-drive-boat-middle-dal-lake-mountain-backgroun_35312-254.jpg?w=996',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
    {
        image: 'https://img.freepik.com/free-photo/canadian-women-hiking-dzukou-valley-nagaland_181624-46211.jpg?w=996&t=st=1680767117~exp=1680767717~hmac=8107b0c72e9ed6a0216c8fd8989a02c03f4b49f0311fa21d97c8fdbfc7acddfd',
        title: 'Things to know when coming to Nepal',
        date: 'July 1, 2022',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam accusamus distinctio unde sapiente voluptates excepturi veniam alias enim saepe temporibus nam dicta quisquam, soluta aut molestias quod a consectetur incidunt.',
    },
]
const tours = listtours.map((item,index)=>({...item,_id: `${index}`}))
const blogs = bloglist.map((item,index)=>({...item,_id: `${index}`}))
export {destination,tours,userRating,userComments,blogs}