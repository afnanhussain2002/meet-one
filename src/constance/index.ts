import homeImage from '../public/icons/Home.svg'
import upcomingImage from '../public/icons/upcoming.svg'
import previousImage from '../public/icons/previous.svg'
import recordingsImage from '../public/icons/recordings.svg'
import personalRoomImage from '../public/icons/add-personal.svg'
/* import avatar1 from '../public/images/avatar-1.jpeg'
import avatar2 from '../public/images/avatar-2.jpeg'
import avatar3 from '../public/images/avatar-3.jpeg'
import avatar4 from '../public/images/avatar-4.jpeg'
import avatar5 from '../public/images/avatar-5.jpeg' */
export const sidebarLinks = [
    {
        label: "Home",
        route: "/",
        imgUrl: homeImage,
    },
    {
        label: "Upcoming",
        route: "/upcoming",
        imgUrl: upcomingImage,
    },
    {
        label: "Previous",
        route: "/previous",
        imgUrl: previousImage,
    },
    {
        label: "Recordings",
        route: "/recordings",
        imgUrl: recordingsImage,
    },
    {
        label: "Personal Room",
        route: "/personal-room",
        imgUrl: personalRoomImage,
    },
]

/* export const avatarImages = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    
  ]; */
  export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    '/images/avatar-3.png',
    '/images/avatar-4.png',
    '/images/avatar-5.png',
  ];