import {
  coinbase,
  facebook,
  featOne,
  featThree,
  featTwo,
  linkedin,
  metamask,
  phantom,
  twitter,
  walletconnect,
} from "@/assets";

export default {
  NAVLINKS: [
    { name: "Home", link: "/" },
    { name: "View campaigns", link: "/campaigns" },
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
  WALLETS: [
    { icon: metamask, name: "Metamask" },
    { icon: phantom, name: "Phantom" },
    { icon: coinbase, name: "Coinbase" },
    { icon: walletconnect, name: "WalletConnect" },
  ],
};
