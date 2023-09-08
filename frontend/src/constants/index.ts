import {
  facebook,
  featOne,
  featThree,
  featTwo,
  linkedin,
  twitter,
} from "@/assets";

export default {
  NAVLINKS: [
    { name: "Home", link: "/" },
    { name: "App", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Contact", link: "/" },
  ],
  FEATURES: [
    {
      icon: featOne,
      mainText: "Multisig Wallet Address",
      subText: "EVM Compatible",
      link: "",
    },
    {
      icon: featTwo,
      mainText: "Transparent Auditing",
      subText: "Track performance of donation",
      link: "",
    },
    {
      icon: featThree,
      mainText: "Market Intelligence",
      subText: "Blogs, Updates, News",
      link: "",
    },
  ],
  SOCIAL: [
    { name: "twitter", icon: twitter },
    { name: "facebook", icon: facebook },
    { name: "linkedin", icon: linkedin },
  ],
};
