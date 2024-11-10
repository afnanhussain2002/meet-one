import homeImage from '../public/icons/Home.svg'
import upcomingImage from '../public/icons/upcoming.svg'
import previousImage from '../public/icons/previous.svg'
import recordingsImage from '../public/icons/recordings.svg'
import personalRoomImage from '../public/icons/add-personal.svg'
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