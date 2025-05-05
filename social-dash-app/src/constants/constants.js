import { IoLogoFacebook } from "react-icons/io";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import instagramLogo from "../assets/instagram.svg";
import youtubeLogo from "../assets/icon-youtube.svg";

const contentLarge = [
  {
    border: "border-t-blue-500",
    icon: <IoLogoFacebook className="mr-2 size-6 text-blue-500" />,
    user: "@nathanf",
    followers: "1987",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "12 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-sky-500",
    icon: <FaTwitter className="mr-2 size-6 text-sky-500" />,
    user: "@nathanf",
    followers: "1044",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "99 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-pink-500",
    icon: <img src={youtubeLogo} alt="youtube" className="mr-2 size-6" />,
    user: "@realnathanf",
    followers: "11k",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    number: "1099 Today",
    arrow: "text-green-500",
  },
  {
    border: "border-t-red-500",
    icon: <img src={instagramLogo} alt="instagram" className="mr-2 size-6" />,
    user: "Nathan F.",
    followers: "8234",
    status: <TiArrowSortedDown className="mr-1 text-red-500" />,
    number: "144 Today",
    arrow: "text-red-500",
  },
];

const contentSmall = [
  {
    text: "Page Views",
    icon: <IoLogoFacebook className="size-6 text-blue-500" />,
    number: "87",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "3%",
    arrow: "text-green-500",
  },
  {
    text: "Likes",
    icon: <IoLogoFacebook className="size-6 text-blue-500" />,
    number: "52",
    status: <TiArrowSortedDown className="mr-1 text-red-500" />,
    precent: "2%",
    arrow: "text-red-500",
  },
  {
    text: "Likes",
    icon: <img src={instagramLogo} alt="instagram" className="size-6" />,
    number: "5462",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "2257%",
    arrow: "text-green-500",
  },
  {
    text: "Profile Views",
    icon: <img src={instagramLogo} alt="instagram" className="size-6" />,
    number: "52k",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "1375%",
    arrow: "text-green-500",
  },
  {
    text: "Retweets",
    icon: <FaTwitter className=" size-6 text-sky-500" />,
    number: "117",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "303%",
    arrow: "text-green-500",
  },
  {
    text: "Likes",
    icon: <FaTwitter className=" size-6 text-sky-500" />,
    number: "507",
    status: <TiArrowSortedUp className="mr-1 text-green-500" />,
    precent: "553%",
    arrow: "text-green-500",
  },
  {
    text: "Likes",
    icon: <img src={youtubeLogo} alt="youtube" className="size-6" />,
    number: "107",
    status: <TiArrowSortedDown className="mr-1 text-red-500" />,
    precent: "19%",
    arrow: "text-red-500",
  },
  {
    text: "Total Views",
    icon: <img src={youtubeLogo} alt="youtube" className="size-6" />,
    number: "1407",
    status: <TiArrowSortedUp className="mr-1 text-red-500" />,
    precent: "12%",
    arrow: "text-red-500",
  },
];

export { contentLarge, contentSmall };
