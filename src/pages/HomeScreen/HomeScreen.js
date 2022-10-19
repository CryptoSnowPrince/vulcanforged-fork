import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  FaTwitter,
  FaDiscord,
  FaTelegramPlane, FaBeer,
  FaCoins
} from "react-icons/fa";

import { FiUser } from "react-icons/fi";
import { BsMedium, BsQuestionLg, BsSearch } from "react-icons/bs";
import { RiUserFollowLine } from "react-icons/ri";

export default function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(1);
  const [tabClicked, setTabClicked] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const tabToggle = (index) => {
    setTabClicked(index);
  };
  const responsive = {
    xxl: {
      breakpoint: { max: 4000, min: 1400 },
      items: 1,
      partialVisibilityGutter: 20,
    },
    xl: {
      breakpoint: { max: 1399, min: 1200 },
      items: 1,
      partialVisibilityGutter: 110,
    },
    lg: {
      breakpoint: { max: 1199, min: 992 },
      items: 1,
      partialVisibilityGutter: 20,
    },
    md: {
      breakpoint: { max: 991, min: 768 },
      items: 1,
      partialVisibilityGutter: 130,
    },
    sm: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    }
  };

  return (
    <>
      <div class="btn-group-vertical z-index-3 FixedScreenButton" role="group">
        <div class="">
          <div class="BorderBottom pb-2 mb-2">
            <a target="_blank" without rel="noreferrer" href="https://discord.com/invite/ZyjTvFM" class="btn Dicord shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
              <FaDiscord size={25} />
            </a>
            <a target="_blank" without rel="noreferrer" href="https://twitter.com/VulcanForged" class="btn Twiiter shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
              <FaTwitter size={20} />
            </a>
            <a target="_blank" without rel="noreferrer" href="https://t.me/VeriArti" class="btn Telegram shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
              <FaTelegramPlane size={20} />
            </a>
            <a target="_blank" without rel="noreferrer" href="https://vulcanforgedco.medium.com/" class="btn Medium shadow-none rounded-1 Fsize_14 d-flex justify-content-center align-items-center p-0">
              <BsMedium size={20} />
            </a>
          </div>
          <a href="https://vulcanforged.com/helpcenter/index" class="btn shadow-none rounded-1 Fsize_20 d-flex justify-content-center align-items-center p-0 BgGradient mb-2">
            <BsQuestionLg size={20} />
          </a>
          <button id="chat-support" type="button" class="btn shadow-none rounded-1 Fsize_20 d-flex justify-content-center align-items-center p-0 BgGradient">
            <FaBeer />
          </button>
        </div>
        <div class="d-md-none">
          <div class="collapse" id="SocialButtonMob">
            <div class="BorderBottom pb-2 mb-2">
              <a target="_blank" without rel="noreferrer" href="https://discord.com/invite/ZyjTvFM" class="btn Dicord shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
                <i class="icon-discord"></i>
              </a>
              <a target="_blank" without rel="noreferrer" href="https://twitter.com/VulcanForged" class="btn Twiiter shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
                <i class="icon-twitter"></i>
              </a>
              <a target="_blank" without rel="noreferrer" href="https://t.me/VeriArti" class="btn Telegram shadow-none rounded-1 d-flex justify-content-center align-items-center p-0 mb-2">
                <i class="icon-telegram"></i>
              </a>
              <a target="_blank" without rel="noreferrer" href="https://vulcanforgedco.medium.com/" class="btn Medium shadow-none rounded-1 Fsize_14 d-flex justify-content-center align-items-center p-0">
                <i class="icon-medium"></i>
              </a>
            </div>
            <a href="https://vulcanforged.com/helpcenter/index" class="btn shadow-none rounded-1 Fsize_20 d-flex justify-content-center align-items-center p-0 BgGradient mb-2">
              <i class="icon-question-mark"></i>
            </a>
            <button id="chat-support" type="button" class="btn shadow-none rounded-1 Fsize_20 d-flex justify-content-center align-items-center p-0 BgGradient">
              <i class="icon-widget"></i>
            </button>
          </div>
          {/* <button id="ShowSocialBtns" class="btn mt-2 shadow-none rounded-1 Fsize_20 d-flex justify-content-center align-items-center p-0 BgGradient collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#SocialButtonMob" aria-expanded="false" aria-controls="SocialButtonMob">
            <i class="icon-question-mark"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path id="Union_180" data-name="Union 180" d="M10,12.857,2.858,20,0,17.143,7.143,10,0,2.857,2.857,0,10,7.143,17.143,0,20,2.857,12.857,10,20,17.143,17.143,20Z" fill="#fff"></path>
            </svg>
          </button> */}
        </div>
      </div>
      <header id="header" class="w-100 z-index-3">
        <nav class="navbar navbar-dark navbar-expand-xl py-1">
          <div class="container justify-content-start justify-content-lg-between position-relative">
            <button class="navbar-toggler border-0 p-0 shadow-none me-4 order-1 order-xl-1" type="button" data-bs-toggle="collapse" data-bs-target="#MenuForMobile" aria-controls="MenuForMobile" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(true)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand d-flex align-items-center py-0 order-2 order-xl-2" href="https://vulcanforged.com/">
              <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="33.557" height="28.234" viewBox="0 0 33.557 28.234">
                <defs>
                  <linearGradient id="linear-gradient-marketplace" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#7d0753"></stop>
                    <stop offset="1" stop-color="#f55d0e"></stop>
                  </linearGradient>
                </defs>
                <path id="Path_2416" data-name="Path 2416" d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                <path id="Path_2417" data-name="Path 2417" d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
              </svg>
              <span class="d-none d-xl-inline">VulcanForged</span>
            </a>
            <div class="order-4 order-xl-3 w-100">
              <div class="navbar-collapse collapse">
                <ul class="navbar-nav mb-2 mb-lg-0 TruenoReg">
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase active" href="https://vulcanforged.com/">
                      Home
                    </a>
                    <div class="dropdown-menu rounded-0 py-0 w-160" aria-labelledby="navbarDropdownPyr">
                      <div class="d-flex">
                        <div class="nav flex-column nav-pills w-100" role="tablist" aria-orientation="vertical">
                          <a href="https://vulcanforged.com/#SocialCommunity" class="nav-link text-start">News</a>
                          <div class="dropdown">
                            <a id="AboutDropDownSubMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="https://docs.vulcanforged.com/" class="nav-link d-flex justify-content-between align-items-center dropdown-toggle">About</a>
                            <div class="dropdown-menu rounded-0 py-0 w-160 start-100 top-0" aria-labelledby="AboutDropDownSubMenu">
                              <a href="https://vulcanforged.com/Team/Index" class="nav-link bg-transparent text-start">Team</a>
                              <a href="https://docs.vulcanforged.com/" class="nav-link bg-transparent text-start">Vulcan's' Wiki</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown position-relative">
                    <a class="nav-link text-uppercase" href="https://vulcanforged.com/#OurGameSection">
                      GAMES
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://market.vulcanforged.com/">
                      MARKETPLACE
                    </a>
                    <div id="dropdownIntroOne" data-step="1" data-position="right" data-title="Marketplaces" data-intro="Our 3 different marketplaces now located at single place. You can explore them individually but their activities are now more synchronized than before." class="dropdown-menu rounded-0 py-0" aria-labelledby="navbarDropdownPyr">
                      <div class="p-2 GreyColor">
                        <div class="row mb-4">
                          <div class="col-md-4">
                            <a href="https://Market.VulcanForged.com/MarketPlace"><img src={require('../../assets/header-vulcanmart.webp')} class="img-fluid rounded border mb-2" data-xblocker="passed" alt="" /> </a>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-uppercase OpenSansReg mb-1">VULCANMARKET</h6>
                            <p class="Elipsis WithSpace Twoline mb-2">An advanced multi-feature NFT marketplace on Polygon, BSC and VeChain, allowing quick auctions, batch sales and NFT trades for all</p>
                            <div class="d-flex">
                              <a class="BtnBorder py-2 px-3 text-white me-2" href="https://market.vulcanforged.com/Marketplace/Explore">
                                Explore
                              </a>
                              <a class="BtnBorder py-2 px-3 text-white me-2" href="https://market.vulcanforged.com/Statistics">
                                Statistics
                              </a>
                              <a class="BtnBorder py-2 px-3 text-white me-2" href="https://market.vulcanforged.com/MarketActivity">
                                Activity
                              </a>
                              <a class="BtnBorder py-2 px-3 text-white me-2" href="https://myforge.vulcanforged.com/MyAuctions">
                                My Auctions
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-4">
                            <a href="https://Agora.VulcanForged.com"><img src={require('../../assets/header-agora.webp')} class="img-fluid rounded border mb-2" data-xblocker="passed" alt="" /> </a>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-uppercase OpenSansReg mb-1">AGORA</h6>
                            <p class="Elipsis WithSpace Twoline mb-2">Agora is a digital art platform with no hidden fees. Join the amazing community of artists, and create your first NFTs.</p>
                            <div class="d-flex">
                              <a class="BtnBorder py-2 px-3 text-white me-2" href=" https://agora.vulcanforged.com/Artwork/Explore">
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-4">
                            <a href=" https://myforge.vulcanforged.com/CedalionProgram/Index"><img src={require('../../assets/header-cedalion.webp')} class="img-fluid rounded border mb-2" data-xblocker="passed" alt="" /> </a>
                          </div>
                          <div class="col-md-8">
                            <h6 class="text-uppercase OpenSansReg mb-1">CEDALION</h6>
                            <p class="Elipsis WithSpace Twoline mb-2">Become a Cedalion, rent or borrow NFTs to kick-start your journey in the Vulcan Forged gaming ecosystem.</p>
                            <div class="d-flex">
                              <a class="BtnBorder py-2 px-3 text-white me-2" href=" https://myforge.vulcanforged.com/cedalionprogram/explore
">
                                Explore
                              </a>
                              <a class="BtnBorder py-2 px-3 text-white me-2" href="https://myforge.vulcanforged.com/cedalionprogram/chooseplan">
                                Plans
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://vulcandex.vulcanforged.com/#/">
                      VULCANDEX
                    </a>
                    <div class="dropdown-menu rounded-0 py-0 w-160" aria-labelledby="navbarDropdownPyr">
                      <div class="d-flex">
                        <div class="nav flex-column nav-pills w-100" role="tablist" aria-orientation="vertical">
                          <a href="https://vulcandex.vulcanforged.com/swap#/swap" class="nav-link text-start">Trade</a>
                          <a href="https://vulcandex.vulcanforged.com/#/Farm" class="nav-link text-start">Farms</a>
                          <a href="https://vulcandex.vulcanforged.com/#/add" class="nav-link text-start">Staking</a>
                          <a href="https://wallet.polygon.technology/login/" class="nav-link text-start">Bridge</a>
                          <a href="https://github.com/VaivalGithub/VulcanDex" class="nav-link text-start">Doc</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://myforge.vulcanforged.com"> MY FORGE </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://www.coingecko.com/en/coins/vulcan-forged">
                      PYR
                    </a>
                    <div class="dropdown-menu rounded-0 py-0 w-160" aria-labelledby="navbarDropdownPyr">
                      <div class="d-flex">
                        <div class="nav flex-column nav-pills w-100" role="tablist" aria-orientation="vertical">
                          <a href="https://docs.vulcanforged.com/thepyrtoken" class="nav-link text-start">White Paper</a>
                          <a href="https://wallet.polygon.technology/login/" class="nav-link text-start">Bridge</a>
                          <a href="https://myforge.vulcanforged.com/buyviafiat" class="nav-link text-start">Buy PYR</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://myforge.vulcanforged.com/vulcanvault/index">
                      VulcanVault
                    </a>
                    <div class="dropdown-menu rounded-0 py-0 w-160" aria-labelledby="navbarDropdownPyr">
                      <div class="d-flex">
                        <div class="nav flex-column nav-pills w-100" role="tablist" aria-orientation="vertical">
                          <a href="https://myforge.vulcanforged.com/vulcanvault/myvaultdetail" class="nav-link text-start">My Vault Detail</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="https://myforge.vulcanforged.com/lavabank">

                      LAVA BANK
                    </a>
                  </li>
                </ul>
              </div>
              <div class="d-xl-none">
                <div id="MenuForMobile" class={`navbar-collapse collapse overflow-visible z-index-2 ${isOpen? "collapse show" : ""}`}>
                  <div class="MobileMenuHeader position-relative px-3 py-2">
                    <button class="navbar-toggler shadow-none border-0 py-2 px-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#MenuForMobile" aria-controls="MenuForMobile" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.357" height="19.357" viewBox="0 0 19.357 19.357">
                        <path id="close" d="M24.973,84.781l8.5-8.5a.688.688,0,1,0-.972-.973L24,83.808l-8.5-8.5a.688.688,0,0,0-.973.973l8.505,8.5-8.505,8.5a.688.688,0,0,0,.973.973l8.5-8.5,8.505,8.5a.688.688,0,1,0,.972-.973Z" transform="translate(-14.322 -75.102)" fill="#fff"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="d-flex mb-2 px-3 subNavigationMain">
                    <label class="backToHome TruenoBold DarkGreyColor text-uppercase Fsize_12 pe-2" onclick="BackToHome(2)"> Main</label>
                  </div>
                  <div class="MobileMenuBody overflow-auto">
                    <ul class="navbar-nav mb-0 TruenoReg">
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link DropDownItems dropdown-toggle text-uppercase py-2 px-3" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">Home</a>
                        <ul class="SubMenuDropdown dropdown-duplication dropdown-menu shadow-none bg-transparent align-items-center p-0 border-0 mt-0">
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="/" class="nav-link-child text-uppercase py-2 px-3">News</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://docs.vulcanforged.com/" class="nav-link-child text-uppercase py-2 px-3">About</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="/Team/Index" class="nav-link-child text-uppercase py-2 px-3">Team</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://docs.vulcanforged.com/" class="nav-link-child text-uppercase py-2 px-3">Vulcan's' Wiki</a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://vulcanforged.com/#OurGames">Games</a>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link DropDownItems dropdown-toggle text-uppercase py-2 px-3" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">MARKETPLACE</a>
                        <ul class="SubMenuDropdown dropdown-duplication dropdown-menu shadow-none bg-transparent align-items-center p-0 border-0 mt-0">
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a class="nav-link-child DropDownItems ChildMenu py-2 px-3 cursor-pointer" href="/">VulcanMarket</a>
                            <div class="dropdown-menu SubMenuDropdown dropdown-duplication shadow-none bg-transparent border-0 p-0">
                              <div class="LatestNew px-3 py-2 mb-3">
                                <ul class="list-unstyled">
                                  <li class="mb-3"><a href="https://market.vulcanforged.com/Marketplace/Explore" class="text-uppercase text-white">Explore</a></li>
                                  <li class="mb-3"><a href="https://market.vulcanforged.com/Statistics" class="text-uppercase text-white">Statistics</a></li>
                                  <li class="mb-3"><a href="https://market.vulcanforged.com/MarketActivity" class="text-uppercase text-white">Activity</a></li>
                                  <li class="mb-3"><a href="https://myforge.vulcanforged.com/MyAuctions" class="text-uppercase text-white">My Auctions</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://agora.vulcanforged.com/Artwork/Explore" class="nav-link-child text-uppercase py-2 px-3">Agora</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a class="nav-link-child DropDownItems ChildMenu py-2 px-3 cursor-pointer" href="/">Cedalion</a>
                            <div class="dropdown-menu SubMenuDropdown dropdown-duplication shadow-none bg-transparent border-0 p-0 mt-0">
                              <div class="LatestNew px-3 py-2 mb-3">
                                <ul class="list-unstyled">
                                  <li class="mb-3"><a href="https://myforge.vulcanforged.com/cedalionprogram/explore" class="text-uppercase text-white">Explore</a></li>
                                  <li class="mb-3"><a href="https://myforge.vulcanforged.com/cedalionprogram/chooseplan" class="text-uppercase text-white">Plans</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link DropDownItems dropdown-toggle text-uppercase py-2 px-3" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">VULCANDEX</a>
                        <ul class="SubMenuDropdown dropdown-duplication dropdown-menu shadow-none bg-transparent align-items-center p-0 border-0 mt-0">
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://vulcandex.vulcanforged.com/swap#/swap" class="nav-link-child text-uppercase py-2 px-3">Trade</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://vulcandex.vulcanforged.com/#/Farm" class="nav-link-child text-uppercase py-2 px-3">Farms</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://vulcandex.vulcanforged.com/#/add" class="nav-link-child text-uppercase py-2 px-3">Staking</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://wallet.polygon.technology/login/" class="nav-link-child text-uppercase py-2 px-3">Bridge</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://github.com/VaivalGithub/VulcanDex" class="nav-link-child text-uppercase py-2 px-3">Doc</a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://myforge.vulcanforged.com">My Forge</a>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link DropDownItems dropdown-toggle text-uppercase py-2 px-3" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/">PYR</a>
                        <ul class="SubMenuDropdown dropdown-duplication dropdown-menu shadow-none bg-transparent align-items-center p-0 border-0 mt-0">
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://docs.vulcanforged.com/thepyrtoken" class="nav-link-child text-uppercase py-2 px-3">White Paper</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://wallet.polygon.technology/login/" class="nav-link-child text-uppercase py-2 px-3">Bridge</a>
                          </li>
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://myforge.vulcanforged.com/buyviafiat" class="nav-link-child text-uppercase py-2 px-3">Buy PYR</a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://myforge.vulcanforged.com/vulcanvault/index">VULCANVAULT</a>
                        <ul class="SubMenuDropdown dropdown-duplication dropdown-menu shadow-none bg-transparent align-items-center p-0 border-0 mt-0">
                          <li class="dropdown-submenu nav-item-ForCommonHeader">
                            <a href="https://myforge.vulcanforged.com/vulcanvault/myvaultdetail" class="nav-link-child text-uppercase py-2 px-3">My Vault Detail</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <label class="text-uppercase Fsize_12 MenuCLass DarkGreyColor mx-3 mb-2 pt-2">Other</label>
                    <ul class="navbar-nav mb-lg-0 TruenoReg">
                      <li class="NotLogged nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://auth.vulcanforged.com/">LOG IN</a>
                      </li>
                      <li class="NotLogged nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://auth.vulcanforged.com/?isRegister=true">Register</a>
                      </li>
                      <li class="nav-item-ForCommonHeader">
                        <a class="nav-link text-uppercase py-2 px-3" href="https://vulcanforged.com/helpcenter/index">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="NotLogged ms-auto order-3 order-xl-4">

              <ul class="list-unstyled d-inline-flex align-items-center mb-0 TruenoSemiBold">
                <li class="me-4"><a class="BtnBorder py-2 px-2 d-inline-block" href="https://auth.vulcanforged.com/?isRegister=true">Register</a></li>
                <li><a class="text-white Fsize_14 white-space-nowrap" href="https://auth.vulcanforged.com">Log In</a></li>
              </ul>
            </div>
            <div class="logged ms-auto order-3 order-xl-4 d-none">

              <ul class="list-unstyled d-inline-flex align-items-center mb-0">

                <li>
                  <div class="CustomDropDown dropdown Profile position-relative">
                    <button class="bg-transparent shadow-none border-0 dropdown-toggle text-white p-0" type="button" id="ProfileDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/profile.svg" onerror="this.src='/images/profile.png'" alt="user" id="ProfileImage" class="ProfileImage rounded-circle" />

                    </button>
                    <ul data-step="2" data-position="left" data-title="User Menu" data-intro="New user account is now more user friendly and informative than ever before. You can see your all assets and trades in friendly design along with much better statistics." id="dropdownIntroTwo" class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="ProfileDropdownMenu">
                      <span class="dropdown-menu-arrow"></span>
                      <div class="border-bottom py-1 px-2 d-flex">
                        <div class="flex-grow-1">
                          {/* <h6 class="TruenoReg OrangeText mb-1 Username">hg</h6> */}
                          <div class="position-relative d-flex mb-1">
                            <input id="HeaderCopyAddress" type="text" class="form-control bg-transparent mh-auto TruenoReg Fsize_18 border-0 shadow-none text-white Elipsis WithoutSpace p-0 me-3 ReadOnly" />
                            <button type="button" class="bg-transparent border-0 p-0" onclick="copyAddress('CopyAddress')">
                              <i class="icon-hdr_copy GreyColor Fsize_12"></i>
                            </button>
                          </div>
                        </div>
                        <button type="button" class="close d-xl-none bg-transparent border-0 ps-3 ms-3 cursor-pointer border-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="19.357" height="19.357" viewBox="0 0 19.357 19.357">
                            <path id="close" d="M24.973,84.781l8.5-8.5a.688.688,0,1,0-.972-.973L24,83.808l-8.5-8.5a.688.688,0,0,0-.973.973l8.505,8.5-8.505,8.5a.688.688,0,0,0,.973.973l8.5-8.5,8.505,8.5a.688.688,0,1,0,.972-.973Z" transform="translate(-14.322 -75.102)" fill="#fff"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="border-bottom py-1 py-1 px-2 d-none d-xl-block">
                        <label class="GreyColor mb-1 Fsize_12 text-uppercase">Wallets</label>
                        <figure class="mb-2 bg-transparent rounded p-0">
                          <div class="d-flex">
                            <div class="ImgBox rounded-circle d-flex align-items-center justify-content-center me-1">
                              <img src={require('../../assets/icon-pyr.webp')} class="object-contain" alt="Icon" />
                            </div>
                            <figcaption>
                              <h6 class="TruenoReg GreyColor Fsize_12">Market PYR Balance</h6>
                              {/* <h6 class="Fsize_14 TruenoSemiBold text-white mb-0 Balance"></h6> */}
                            </figcaption>
                          </div>
                        </figure>
                        <a class="btn BtnBorder px-3 w-100 MinHeighNone py-2 d-flex align-items-center justify-content-center" href="https://myforge.vulcanforged.com/buyviafiat">
                          Add funds with
                        </a>
                      </div>
                      <div class="border-bottom py-1 px-2">
                        <label class="GreyColor mb-1 Fsize_12 text-uppercase">Menu</label>
                        <ul class="list-unstyled">
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/Account/userprofile"><i class="icon-user me-1"></i>My Profile</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/MyTrades"><i class="icon-hdr_coins me-1"></i>My Trades</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/MyAuctions"><i class="icon-myauction me-1"></i>My Auctions</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/MyAssets"><i class="icon-hdr_boxes me-1"></i>My Assets</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/MyWallet"><i class="icon-monetization-on me-1"></i>My Wallets</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/lavabank"><i class="icon-lavabank me-1"></i>Lava Bank</a></li>
                          <li><a class="dropdown-link d-block" href="https://myforge.vulcanforged.com/Referral"><i class="icon-share-alt me-1"></i>Referrals</a></li>
                        </ul>
                      </div>
                      <i class="fa-solid fa-building-columns"></i>
                      <div class="py-1 px-2">
                        <ul class="list-unstyled">
                          <li><a class="dropdown-link d-block" href="https://auth.vulcanforged.com/Account/Logout"><i class="icon-logout me-1"></i>Log Out</a></li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section id="Banner">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          renderButtonGroupOutside={true}
        >
          <div class="slick-list">
            <div class="slick-track" style={{ opacity: 1, width: "3680px" }}>
              <div class="SliderImg d-flex align-items-center slick-slide first" data-slick-index="0" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                <div class="container">
                  <figure class="text-white mb-0">
                    <figcaption class="py-xxl-5 mb-xxl-5">
                      <h1 class="mb-5">
                        Explore the Depths of the <span class="TextGradient">Vulcan Forged</span> Eco-system
                      </h1>
                      <p class="Fsize_32 mx-0 mb-5">
                        Immerse yourself in our <span class="TextGradient">PLAY2EARN</span> fantasy games!
                      </p>
                      <a target="_blank" rel="noreferrer" class="BtnGradient TruenoReg Fsize_24 py-2 px-3 d-inline-block" href="https://myforge.vulcanforged.com/" tabindex="-1">Join for Free</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="slick-list">
            <div class="slick-track" style={{ opacity: 1, width: "3680px" }}>
              <div class="SliderImg d-flex align-items-center slick-slide slick-current slick-active second" data-slick-index="1" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                <div class="container">
                  <figure class="text-white mb-0">
                    <figcaption class="py-xxl-5 mb-xxl-5">
                      <h1 class="mb-5">
                        Start <span class="TextGradient">Playing </span> NOW!
                      </h1>
                      <p class="Fsize_32 mx-0 mb-5">
                        Earn <strong class="OrangeText">LAVA</strong> and <strong class="OrangeText">NFTs</strong>, trade on our Marketplace and Participate in farms and pools on our <strong class="OrangeText">Gaming-Token Dex!</strong>
                      </p>
                      <a class="BtnGradient TruenoReg Fsize_24 py-2 px-3 d-inline-block" href="https://vulcan-game-launcher.s3.us-east-2.amazonaws.com/Vulcan+Forged+DApps.exe" tabindex="0">Install Launcher</a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* <ul class="slick-dots" role="tablist">
            <li class="" role="presentation">
              <button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 2" tabindex="-1">1</button>
            </li>
            <li role="presentation" class="slick-active">
              <button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 2" tabindex="0" aria-selected="true">2</button>
            </li>
          </ul> */}
        </Carousel>
      </section>
      <section id="AboutForged" className="mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6">
              <h1 className="mb-4">About <span className="TextGradient">VulcanForged</span></h1>
              <p className="mb-3">
                Vulcan Forged is an established non-fungible token (NFT) game studio,
                marketplace, and dApp incubator with 10+ games, a 20000+ community, and top 5 NFT
                marketplace volume.
              </p>
              <div className="pb-2 pb-md-5">
                <a className="BtnBorder py-2 px-2 d-inline-block" href="https://myforge.vulcanforged.com/">Join For Free</a>
              </div>

              <div className="row">
                <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-4 col-sm-6">
                  <figure className="d-flex align-items-center">
                    <FiUser className="icon-user Fsize_40 me-2 TextGradient"></FiUser>
                    <figcaption className="Fsize_16 TruenoBold text-success">
                      <h6 className="GreyColor mb-1">Total User on Platform</h6>
                      <label className="TruenoSemiBold text-white d-block">115,917</label>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-4 col-sm-6">
                  <figure className="d-flex align-items-center">
                    <RiUserFollowLine className="icon-user-with-check Fsize_40 me-2 TextGradient" />
                    <figcaption className="Fsize_16 TruenoBold text-success">
                      <h6 className="GreyColor mb-1">Active User</h6>
                      <label className="TruenoSemiBold text-white d-block">104,858</label>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-xxl-4 col-xl-6 col-lg-4 col-md-4 col-sm-6">
                  <figure className="d-flex align-items-center">
                    <FaCoins className="icon-coins Fsize_40 me-2 TextGradient"></FaCoins>
                    <figcaption className="Fsize_16 TruenoBold text-success">
                      <h6 className="GreyColor mb-1">Trading Volume</h6>
                      <label className="TruenoSemiBold text-white d-block">$2,612,477.12</label>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 text-center">
              <img src={require("../../assets/img-about-forged.png")} className="img-fluid object-cover" data-xblocker="passed" alt="" style={{ visibility: "visible" }} />
            </div>
          </div>
        </div>
      </section>
      <section id="OurProduct" className="pb-5 mb-xl-5">
        <div className="container">
          <h2 className="text-center mb-4">Our <span className="TextGradient">Products</span></h2>
          <ul className="nav nav-pills justify-content-center mb-5" id="pills-our-product" role="tablist">
            <li className="nav-item me-2 me-lg-3" role="presentation" onClick={() => tabToggle(1)}>
              <button className={`nav-link py-0 px-2 px-lg-4 rounded-1 ${tabClicked === 1 ? "active" : ""}`} id="pills-marketplace-tab" data-bs-toggle="pill" data-bs-target="#pills-marketplace" type="button" role="tab" aria-controls="pills-marketplace" aria-selected="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="33.557" height="28.234" viewBox="0 0 33.557 28.234">
                  <defs>
                    <linearGradient id="linear-gradient-marketplace" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stopColor="#7d0753"></stop>
                      <stop offset="1" stopColor="#f55d0e"></stop>
                    </linearGradient>
                  </defs>
                  <path id="Path_2416" data-name="Path 2416" d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                  <path id="Path_2417" data-name="Path 2417" d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                </svg>
                Marketplace
              </button>
            </li>
            <li className="nav-item me-2 me-lg-3" role="presentation" onClick={() => tabToggle(2)}>
              <button className={`nav-link py-0 px-2 px-lg-4 rounded-1 ${tabClicked === 2 ? "active" : ""}`} data-bs-toggle="pill" data-bs-target="#pills-vulcandex" type="button" role="tab" aria-controls="pills-vulcandex" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="19.9" height="30" viewBox="0 0 19.9 40">
                  <path id="vulcandex" d="M22.85,11.544c-.2.5-1.306,2.612-1.607,3.114-2.109,3.616-4.319,4.721-4.42,7.534,5.726-6.127,11.351-4.319,12.355-12.154.8,6.73-2.411,9.442-6.228,12.054-4.118,2.813-8.639,5.424-8.739,11.15-4.219-6.63-2.612-12.255.9-17.177,1.507-2.21,3.516-4.319,4.922-6.228A25.365,25.365,0,0,0,23.754,1.7C24.356,7.024,23.754,9.434,22.85,11.544Zm.7,12.054c-7.132,4.018-7.634,7.935-7.634,9.643,0,2.21,1.406,5.625,3.315,6.63-1.607-5.223,1-8.739,2.31-9.342-.6,3.415,1.306,4.319,1.306,6.73a5.555,5.555,0,0,1-1.306,4.018c2.109,1.306,6.73-.5,8.639-4.118,1.507-2.913,1.306-6.328,1.406-9.04-.9.7-.5,2.31-2.009,2.511-.4,0-1-.4-1-1.406.6-3.214,3.013-1.708,3.013-7.132a17.612,17.612,0,0,0-1.406-6.328A12.748,12.748,0,0,1,23.553,23.6Z" transform="translate(-11.688 -1.7)" fill="#ff3600"></path>
                </svg>
                VulcanDex
              </button>
            </li>
            <li className="nav-item me-2 me-lg-3" role="presentation" onClick={() => tabToggle(3)}>
              <button className={`nav-link py-0 px-2 px-lg-4 rounded-1 ${tabClicked === 3 ? "active" : ""}`} id="pills-agora-tab" data-bs-toggle="pill" data-bs-target="#pills-agora" type="button" role="tab" aria-controls="pills-agora" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="28.137" height="25" viewBox="0 0 28.137 30">
                  <defs>
                    <linearGradient id="linear-gradient-agora" x1="-0.807" y1="-0.124" x2="0.915" y2="1.521" gradientUnits="objectBoundingBox">
                      <stop offset="0" stopColor="#28eafe"></stop>
                      <stop offset="0.419" stopColor="#639eea"></stop>
                      <stop offset="1" stopColor="#b634ce"></stop>
                    </linearGradient>
                  </defs>
                  <path id="Path_32675" data-name="Path 32675" d="M33.647,16.067l1.731,3.213a12.115,12.115,0,0,0,.15-1.9A12.248,12.248,0,0,0,23.279,5.14h-.531l-1.038,1.9a10.1,10.1,0,0,1,1.569-.121,10.46,10.46,0,0,1,10.367,9.144Z" transform="translate(-9.185 -2.175)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32676" data-name="Path 32676" d="M31.643,34a10.448,10.448,0,0,1-9.485,6.058,10.568,10.568,0,0,1-1.61-.121L19.06,41.442a12.49,12.49,0,0,0,3.1.392,12.231,12.231,0,0,0,10.517-5.971Z" transform="translate(-8.064 -14.385)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32677" data-name="Path 32677" d="M10.215,27.213A10.442,10.442,0,0,1,8.6,10.287L10.33,7.05a12.242,12.242,0,0,0-1.4,21.49Z" transform="translate(-1.353 -2.983)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32678" data-name="Path 32678" d="M17.781,38.16l-2.469-2.5L14,34.353l-1.31,1.321L6.681,41.853a11.111,11.111,0,0,1-4.69-5.29l.525-.952A16.044,16.044,0,0,1,1.6,33.47L0,36.407c.94,3.069,3.138,5.7,7,7.754l7.015-7.212,1.869,1.892a5.284,5.284,0,0,0,1.9-.681Z" transform="translate(0 -14.16)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32679" data-name="Path 32679" d="M18.439,2.308a10.125,10.125,0,0,1,2.279.363L19.264,0H15.5L7.9,13.887a16.835,16.835,0,0,0,.162,3.519L16.6,1.829h1.592Z" transform="translate(-3.329)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32680" data-name="Path 32680" d="M32.985,12.678A11.873,11.873,0,0,0,30.06,11.12l8.787,16.154A11.308,11.308,0,0,1,34.168,32.4l-1.021-1.033a7.6,7.6,0,0,1-1.731.837l2.44,2.5c3.4-1.806,5.879-4.229,7-7.569Z" transform="translate(-12.718 -4.705)" fill="url(#linear-gradient-agora)"></path>
                </svg>
                Agora
              </button>
            </li>
            <li className="nav-item me-2" role="presentation" onClick={() => tabToggle(4)}>
              <button className={`nav-link py-0 px-2 px-lg-4 rounded-1 ${tabClicked === 4 ? "active" : ""}`} id="pills-myforged-tab" data-bs-toggle="pill" data-bs-target="#pills-myforged" type="button" role="tab" aria-controls="pills-myforged" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="33.557" height="28.234" viewBox="0 0 33.557 28.234">
                  <defs>
                    <linearGradient id="linear-gradient-myforged" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0" stopColor="#7d0753"></stop>
                      <stop offset="1" stopColor="#f55d0e"></stop>
                    </linearGradient>
                  </defs>
                  <path id="Path_2416" data-name="Path 2416" d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-myforged)"></path>
                  <path id="Path_2417" data-name="Path 2417" d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-myforged)"></path>
                </svg>
                MyForge
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-our-productContent">
            <div className={`tab-pane fade ${tabClicked === 1 ? "show active" : ""}`} id="pills-marketplace" role="tabpanel" aria-labelledby="pills-marketplace-tab">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-4 text-center">
                  <img src={require("../../assets/img-marketplace.png")} className="img-fluid" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                </div>
                <div className="col-xxl-6 col-xl-8">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-8">
                      <p className="mb-0">
                        An advanced multi-feature NFT marketplace on Polygon, BSC and
                        VeChain, allowing quick auctions, batch sales and NFT trades for all Vulcan
                        Forged games and partners.
                      </p>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                              {/* <i className="icon-chain Fsize_28 TextGradient"></i> */}
                            </div>
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              CROSS <br />
                              CHAIN
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            <div className=" rounded-1 d-flex justify-content-center align-items-center me-1">
                              {/* <i className="icon-wallet Fsize_28 TextGradient"></i> */}
                            </div>
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              NFT <br />
                              MARKETPLACE
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            <div className=" rounded-1 d-flex justify-content-center align-items-center me-1">
                              {/* <i className="icon-outline Fsize_28 TextGradient"></i> */}
                            </div>
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase mb-0">
                              QUICK <br />
                              AUCTIONS
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                              {/* <i className="icon-triple-coins Fsize_28 TextGradient"></i> */}
                            </div>
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase mb-0">
                              BATCH <br />
                              SALES
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12 mt-4 mt-xl-0">
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-1 row-cols-xxl-1">
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-user-with-check Fsize_28 TextGradient"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Active User</h6>
                            <label className="TruenoSemiBold text-white">104,858</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-hammer Fsize_28 TextGradient"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Auctions Sold</h6>
                            <label className="TruenoSemiBold text-white">19,480</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-boxes Fsize_28 TextGradient"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Trades Completed</h6>
                            <label className="TruenoSemiBold text-white">454</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-0">
                          <div className=" rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-coins Fsize_28 TextGradient"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Market Volume</h6>
                            <label className="TruenoSemiBold text-white">2,612,477</label>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 my-5">
                      <a className="BtnBorder py-2 px-2 d-inline-block" href="https://myforge.vulcanforged.com/">Connect Wallet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${tabClicked === 2 ? "show active" : ""}`} id="pills-vulcandex" role="tabpanel" aria-labelledby="pills-vulcandex-tab">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-4 text-center">
                  <img src={require('../../assets/img-vulcandex.webp')} className="img-fluid" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                </div>
                <div className="col-xxl-6 col-xl-8">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-8">
                      <p className="mb-0">
                        Play, Swap, Stake, Earn. The first decentralized exchange
                        dedicated to gaming tokens only. Cross-chain. PYR and LAVA pairs. NFT
                        farming. Giant APY rewards.
                      </p>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-trade Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">TRADE</label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-farm Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">FARM</label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-triple-coins Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">STAKING</label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-outline Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">POOL</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 my-5">
                      <a className="BtnBorder py-2 px-2 d-inline-block" href="https://myforge.vulcanforged.com/">Connect Wallet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${tabClicked === 3 ? "show active" : ""}`} id="pills-agora" role="tabpanel" aria-labelledby="pills-agora-tab">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-4 text-center">
                  <img src={require('../../assets/img-agora.webp')} className="img-fluid" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                </div>
                <div className="col-xxl-6 col-xl-8">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-8">
                      <p className="mb-0">
                        An advanced multi-feature NFT marketplace on Polygon, BSC and
                        VeChain, allowing quick auctions, batch sales and NFT trades for all Vulcan
                        Forged games and partners.
                      </p>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-nft Fsize_28 me-1 TextGradientAgora"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">CREATE <br /> NFT<span className="text-lowercase">s</span></label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-nft-shine Fsize_28 me-1 TextGradientAgora"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              EXPLORE <br />
                              AUTHENTIC NFT
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-key-chain Fsize_28 me-1 TextGradientAgora"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              CREATE <br />
                              COLLECTIONS
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 col-md-6 col-sm-6 col-12 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-coins Fsize_28 me-1 TextGradientAgora"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              SELL <br />
                              NFT<span className="text-lowercase">s</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12 mt-4 mt-xl-0">
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-1 row-cols-xxl-1">
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-user-with-check Fsize_28 TextGradientAgora"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Active User</h6>
                            <label className="TruenoSemiBold text-white">104,858</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-hammer Fsize_28 TextGradientAgora"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Auctions Sold</h6>
                            <label className="TruenoSemiBold text-white">75</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-boxes Fsize_28 TextGradientAgora"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">NFTs Minted</h6>
                            <label className="TruenoSemiBold text-white">1,000</label>
                          </figcaption>
                        </figure>
                        <figure className="d-flex align-items-center mb-0">
                          <div className=" rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-coins Fsize_28 TextGradientAgora"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Market Volume</h6>
                            <label className="TruenoSemiBold text-white">6,171</label>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 my-5">
                      <a className="BtnBorder agora py-2 px-2 d-inline-block" href="https://myforge.vulcanforged.com/">Connect Wallet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${tabClicked === 4 ? "show active" : ""}`} id="pills-myforged" role="tabpanel" aria-labelledby="pills-myforged-tab">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-4 text-center">
                  <img src={require('../../assets/img-myforged.webp')} className="img-fluid" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                </div>
                <div className="col-xxl-6 col-xl-8">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-8">
                      <p>Manage multiple cryptocurrencies such as PYR, LAVA, MATIC and ETH.</p>
                      <p className="mb-0"> View and track your activities, achievements, rankings, XP and earnings.</p>
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-3 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-sow-seed Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              SOW <br />
                              SEED
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-sow-land Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              SOW <br />
                              LAND
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-pyr Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">
                              CEDALION <br />
                              PROGRAM
                            </label>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-3 mt-5">
                          <div className="d-flex align-items-center">
                            {/* <i className="icon-winning-cup Fsize_28 TextGradient me-1"></i> */}
                            <label className="TruenoSemiBold Fsize_18 text-white text-uppercase line-height-1 mb-0">LEADERBOARD</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-12 mt-4 mt-xl-0">
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-1 row-cols-xxl-1">
                        <figure className="d-flex align-items-center mb-5">
                          <div className="rounded-1 d-flex justify-content-center align-items-center me-1">
                            {/* <i className="icon-user-with-check Fsize_28 TextGradient"></i> */}
                          </div>
                          <figcaption className="OpenSansMedium Fsize_12 text-success">
                            <h6 className="GreyColor mb-1">Active User</h6>
                            <label className="TruenoSemiBold text-white">104,858</label>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div className="col-12 my-5">
                      <a className="BtnBorder py-2 px-2 d-inline-block" href="https://myforge.vulcanforged.com/">Connect Wallet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="OurGames" className="pb-5">
        <div id="GamingSection" className="container pb-lg-5">
          <h2 className="text-center mb-4">Our <span className="TextGradient">Games</span></h2>
          <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-5 g-3 mb-5">
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-verse.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-verse.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">VulcanVerse</h4>
                  <p>MMO RPG</p>
                  <p>VulcanVerse is an open-world massive multiplayer online role-playing game (MMORPG) with lore written by fighting fantasy authors. Inside VulcanVerse, players can truly own assets in the form of Non-Fungible Tokens (NFTs).</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanVerse"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Facebook" href="https://www.facebook.com/VulcanVerse">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="#fff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcanverse/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-tartarus.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-tartarus.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Tartarus</h4>
                  <p>Action Survival</p>
                  <p>Tartarus is an infinite survival game set in Vulcanverse Universe where Hero player has to slay demons in the Tartarus dimension in order to gain XP points. Defeat demons and unlock access to the deepest parts of hell-ish environment, the more you explore the more you gain... how far can you go?</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-berserk.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-berserk.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Berserk</h4>
                  <p>Berserk</p>
                  <p>Berserk is a tactical fast paced CCG utilising NFT and Non NFT cards. Battle against other players in compatitice 1v1 matches, climb the ladder and earn awesome season prizes. Earn XP and LAVA with every match! Play to earn now, with only a My Forge account login, no ownership of NFT cards required.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/Berserk_Game"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Facebook" href="https://www.facebook.com/BerserkVF">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="#fff" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/berserk_vulcanforged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-varena.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-right p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-varena.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Vulcan's Forge Arena</h4>
                  <p>Auto Battle Strategy</p>
                  <p>Draft and position a horde of minions in this Arena that's Forged for some of Vulcan's mightiest and defeat the very best. Assemble an army and your legion to command. Where each brutal wave puts your tactics to the best!</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/PlayForgeArena"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-vchess.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-right p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-vchess.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Vulcan's Battle Chess</h4>
                  <p>Vulcan's Battle Chess</p>
                  <p>Play a classic that's evolved from the check red clashes you've known. Filled with Vulcanites animated wondrously on the board. Battle online with Speed Chess or with AI and another modes and earn XP as you beat the clock to grab win from your foe.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="OurGameSection" className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-poker.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-poker.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Vulcan's Poker</h4>
                  <p>Poker Game</p>
                  <p>Ready your best lucky charms as you join this poker world. Compete with the hand you're dealt with for more XP and chips. Watch a carousel of epic proportions and fun as you play games of Omaha and Texas Holden with a superb Vulcan twist! Chiron will be your favourite Croupier.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-defence.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-defence.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Tower Defence Game</h4>
                  <p>Vulcan's Tower Defence</p>
                  <p>The VulcanVerse is under attack! Can you and your chosen Vulcanites defend the four quadrants from the barbarian hordes? Can you stop them from reaching Vulcan City and destroying all that Vulcan has built? If you can, you'll earn not just the gratitude of your fellow VulcanVers but lots of XP too.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-runner.png')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-left p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-runner.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Vulcan Runner</h4>
                  <p>Endless Runner</p>
                  <p>Run, jump, slide and collect coins as you avoid the many obstacles in our fast paced endless-runner game! Climb the leaderboard and show Vulcan you are worthy!</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-assassins.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-right p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-assassins.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Vulcan Assassins</h4>
                  <p>Survival Shooter</p>
                  <p>Vulcans Guard: You're the last of Vulcan's loyal phylax Your brothers-in-arms have fallen and only you remain. You are Vulcan's Gatekeeper, charged with keeping the hordes at bay!</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/VulcanForged"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainImgBox">
              <div className="ImgBox">
                <img src={require('../../assets/game-img-blockbabies.webp')} className="object-cover w-100 rounded-1" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                <div className="HoverBox from-right p-3 rounded-1 z-index-1">
                  <img src={require('../../assets/game-full-img-blockbabies.webp')} className="object-cover w-100 rounded-1 mb-2" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  <h4 className="mb-2">Block Babies</h4>
                  <p>Strategy Card Game</p>
                  <p>Enter the playpen and meet the cutest little chubsters. You will ever meet for your duels - waddling around on the block! Gain a bunch of sweet treats with some XP on the way as you join them in their journey to quest and rise to the top.</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center pt-4">
                    <div className="mb-3 mb-sm-0">
                      <a target="_blank" rel="noreferrer" className="me-2 Discord" href="https://discord.com/invite/ZyjTvFM"><i className="icon-discord"></i></a>
                      <a target="_blank" rel="noreferrer" className="me-2 Twitter" href="https://twitter.com/PlayBlockBabies"><i className="icon-twitter"></i></a>
                      <a target="_blank" rel="noreferrer" className="Instagram" href="https://www.instagram.com/vulcan_forged/"><i className="icon-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mb-0">
            <a className="BtnGradient TruenoReg Fsize_24 py-2 px-3 d-inline-block" href="https://vulcan-game-launcher.s3.us-east-2.amazonaws.com/Vulcan+Forged+DApps.exe">Install Launcher</a>
          </p>
        </div>
      </section>
      <section id="Plateform" className="position-relative pt-5 BorderBottomGradient">
        <div className="container pt-sm-5 mt-sm-5">
          <h1 className="text-center mb-4">How to <span className="TextGradient d-inline-block">Use the Platform</span></h1>
          <img src={require("../../assets/img-how-it-work.webp")} alt="" className="w-100 h-auto" data-xblocker="passed" style={{ visibility: "visible" }} />
        </div>
      </section>
      <section id="MarketPlace" className="BorderBottomGradient">
        <div className="container">
          <h1 className="text-center mb-4">Our <span className="TextGradient">Marketplace</span></h1>
          <div className="row align-items-center justify-content-between mb-5">
            <div className="col-xxl-4 col-xl-6 col-lg-5 mb-3 mb-lg-0">
              <h2 className="mb-0 text-md-start text-center">Closing Soon  <span className="TextGradient">Auctions</span></h2>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <div className="position-relative">
                <BsSearch className="icon-search Fsize_18 position-absolute verticle-center DarkGreyColor ms-2"></BsSearch>
                <form method="get" id="target">
                  <input id="SearchBar" className="form-control shadow-none rounded-1 ps-5 text-white" placeholder="Explore Marketplace" />
                </form>
              </div>
            </div>
          </div>

          <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 mb-5 justify-content-center">
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93555">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmdfbKoMz73arGCdnxDComE1Tujjwn3iLFax1FdYo4zwZs" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">Basic Gem Multiplier</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 20:02:00">12h 15m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">0 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93554">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmQt8aNJKCMvDpy5kBkLsQjACPrngfKD86QWNAkk8FjC26" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">Spear of Achilles</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 20:01:00">12h 14m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">0 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93550">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmSrwkPBTAgXKWKX9NxUvHCc5BMUcnB8tt1uxoKHgx2v1J" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">VV-OG Badge</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 15:33:00">07h 46m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">105 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93549">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmfDWJ3UfnpD7ARTz2V4PD6UQ9Nyg4Ghfp86JrqbtL1Hsz" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">Sand Wizard</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 12:12:00">04h 25m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">0 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93547">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmWdxooexSBfWKtbL9HgH5AsGW22fpMRDubr1kGsoegv7F" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">Tier 1 Troy Land Seed</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 12:11:00">04h 24m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">0 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CardBox">
              <div className="card">
                <div className="mb-3">
                  <a className="CardImg d-flex align-items-center justify-content-center p-1 rounded-1" href="https://market.vulcanforged.com/Product/Detail/93546">
                    <img src="https://vulcan2.mypinata.cloud/ipfs/QmVAaofo4mHxqVzU7o5MLajRBBbsaWpT1TecdQGZSffkwn" className="card-img-top object-contain" alt="" data-xblocker="passed" style={{ visibility: "visible" }} />
                  </a>
                </div>
                <div className="card-body p-0">
                  <h6 className="TruenoBold mb-1">
                    <a className="text-white" href="/">Shield of Achilles</a>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-1 mb-1">
                    <div className="RoundedImages d-flex">
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle border" data-bs-original-title="Creator">
                        <div className="d-flex justify-content-center align-items-center">
                          <svg style={{ marginLeft: "2px", marginTop: "4px" }} width="13.557" height="18.234" viewBox="0 0 33.557 28.234">
                            <path d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                            <path d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="" className="forSlideUp rounded-circle overflow-hidden" data-bs-original-title="Owner">
                        <img src={require('../../assets/marketplace-card-3.webp')} alt="" className="object-cover align-top" />
                      </a>
                    </div>
                    <div className="Fsize_12 OpenSansBold cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Expire in">
                      <i className="icon-clock"></i>
                      <span className="UTC_Date" data-expirydate="10/19/2022 12:10:00">04h 23m</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <a href="/" className="Fsize_12">
                      <svg className="align-baseline" xmlns="http://www.w3.org/2000/svg" width="14.4" height="8" viewBox="0 0 14.4 8">
                        <g id="Group_18855" data-name="Group 18855" transform="translate(-423 -1584)">
                          <path id="Path_39207_-_Outline" data-name="Path 39207 - Outline" d="M7.2.8C4.467.8,2.048,2.988,1.076,4,2.049,5.012,4.467,7.2,7.2,7.2S12.352,5.012,13.324,4C12.351,2.988,9.933.8,7.2.8m0-.8c3.976,0,7.2,4,7.2,4S11.176,8,7.2,8,0,4,0,4,3.224,0,7.2,0Z" transform="translate(423 1584)" fill="#9ea5b4"></path>
                          <path id="Subtraction_13" data-name="Subtraction 13" d="M2.4,4.8A2.4,2.4,0,0,1,2.4,0a2.362,2.362,0,0,1,.705.105A1.2,1.2,0,1,0,4.7,1.694,2.367,2.367,0,0,1,4.8,2.4,2.4,2.4,0,0,1,2.4,4.8Z" transform="translate(427.802 1585.599)" fill="#9ea5b4"></path>
                        </g>
                      </svg>
                      0
                    </a>
                    <div className="Fsize_12">
                      Starting Bid <span className="OrangeText OpenSansBold Fsize_14">0 PYR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center pt-5 mb-0">
            <a href="https://market.vulcanforged.com/" className="BtnBorder py-2 px-4 d-inline-block me-3">
              Buy
              NFT's
            </a><a href="https://agora.vulcanforged.com/" className="BtnBorder py-2 px-4 d-inline-block mt-2 mt-sm-0">Create NFT's</a>
          </p>
        </div>
      </section>
      <section id="PYRInfo" className="BorderBottomGradient">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mx-auto mb-3 mb-xl-0">
              <div className="BorderImage rounded-1">
                <img src={require('../../assets/img-pyrinfo.jpg')} className="rounded-1 w-100 h-100" alt="" data-xblocker="passed" />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-12">
              <div className="row mb-4">
                <div className="col-md-12 col-lg-6">
                  <div className="d-flex align-items-center mb-1">
                    <img src={require('../../assets/icon-pyr.webp')} className="IconPyr me-2" alt="" />
                    <h2 className="mb-0">Vulcan Forged PYR</h2>
                  </div>
                  <span className="badge bg-secondary fw-normal p-1 TruenoReg  m-1">Rank #241</span>
                  <span className="badge bg-secondary fw-normal p-1 TruenoReg m-1">Token</span>
                  <span className="badge bg-secondary fw-normal p-1 TruenoReg  m-1"><i className="icon-check text-success me-1"></i>Audited</span>
                </div>
                <div className="col-md-12 col-lg-6 mt-3 mt-sm-0">
                  <h6 className="GreyColor mb-1">Vulcan Forged PYR Price (PYR)</h6>
                  <div className="PYRPriceBox">
                    <div className="d-sm-flex justify-content-between align-items-center mb-1">
                      <div className="Fsize_16 TruenoBold text-danger d-flex align-items-center">
                        <h2 className="mb-1">$4.10</h2>
                        <svg className="align-baseline ms-1" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                          <path id="DownArrow" d="M5.25,6.683V0H2.75V6.683H0L4,12,8,6.683Z" fill="#ed4c4c"></path>
                        </svg>
                        -10.46%
                      </div>

                      <div className="">
                        <div className="Fsize_16 TruenoBold text-danger d-flex align-items-center mb-1">
                          <h5 className="mb-0 TruenoSemiBold">0.000214 BTC</h5>
                          <svg className="align-baseline ms-1" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                            <path id="DownArrow" d="M5.25,6.683V0H2.75V6.683H0L4,12,8,6.683Z" fill="#ed4c4c"></path>
                          </svg>
                          -2.33%
                        </div>
                        <div className="Fsize_16 TruenoBold text-danger d-flex align-items-center">
                          <h5 className="mb-0 TruenoSemiBold">0.003165 ETH</h5>
                          <svg className="align-baseline ms-1" xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                            <path id="DownArrow" d="M5.25,6.683V0H2.75V6.683H0L4,12,8,6.683Z" fill="#ed4c4c"></path>
                          </svg>
                          -3.06%
                        </div>

                      </div>
                    </div>
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <h6 className="GreyColor Fsize_14 mb-0">
                        Low: <span className="TruenoSemiBold text-white">$4.10</span>
                      </h6>
                      <div className="progress overflow-visible flex-grow-1 mx-sm-2 my-1 my-sm-0" >
                        <div className="progress-bar overflow-visible position-relative rounded" style={{ width: "11%" }} role="progressbar" aria-valuenow="4.100000" aria-valuemin="4.100000" aria-valuemax="4.630000"></div>
                      </div>
                      <h6 className="GreyColor Fsize_14 mb-0">High: <span className="TruenoSemiBold text-white">$4.63</span></h6>
                      <div className="dropdown ms-sm-2 mt-1 mt-sm-0">
                        <button className="btn shadow-none dropdown-toggle rounded Fsize_11" type="button" id="TimeSelectDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                          24h
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end Fsize_12 p-1" aria-labelledby="TimeSelectDropDown">
                          <li className="pb-1"><a href="/">24h Low / High</a></li>
                          <li className="pb-1"><a href="/">1m Low / High</a></li>
                          <li><a href="/">1y Low / High</a></li>
                        </ul>
                      </div>                                </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <img src={require('../../assets/icon-pyr.webp')} className="me-2" alt="" />
                <h1 className="mb-0">PYR</h1>
              </div>
              <p className="Fsize_24">
                The live <span className="OpenSansBold">Vulcan Forged PYR</span> price today is $4.10 USD with a
                24-hour trading volume of $ 32,665,463.00 USD. We update our PYR to USD price in real-time.
                Vulcan Forged PYR is down -10.46% in the last 24 hours. The current CoinMarketCap ranking is
                #241, with a live market cap of $98,095,856.00 USD. It has a circulating supply of 23,897,700.00
                PYR coins and a max. supply of 50,000,000.00 PYR coins.
              </p><p>
              </p><p className="mb-5 Fsize_24">
                If you would like to know where to buy Vulcan Forged PYR, the top cryptocurrency exchanges for trading in Vulcan
                Forged PYR stock are currently <a href="https://www.binance.com/en/trade/PYR_USDT" className="OrangeText">Binance</a>,<a href="https://www.huobi.com/en-us/exchange/pyr_usdt" className="OrangeText">Huobi Global</a>, <a href="https://www.kucoin.com/trade/PYR-USDT" className="OrangeText">KuCoin</a>, and <a href="https://www.gate.io/trade/PYR_USDT" className="OrangeText">Gate.io</a>. You can find others listed on our
                <a href="/" className="OrangeText">crypto exchanges page</a>.
              </p>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-between align-items-start">
                <figure className="">
                  <figcaption className="Fsize_16 TruenoBold text-danger">
                    <h6 className="GreyColor mb-1">Market Cap</h6>
                    <label className="TruenoSemiBold text-white">$98,095,856.00</label>
                  </figcaption>
                </figure>
                <figure className="">
                  <figcaption className="Fsize_16 TruenoBold text-danger">
                    <h6 className="GreyColor mb-1">Fully Diluted Market Cap</h6>
                    <label className="TruenoSemiBold text-white">$205,241,208.00</label>
                  </figcaption>
                </figure>
                <figure className="">
                  <figcaption className="Fsize_16 TruenoBold text-danger">
                    <h6 className="GreyColor mb-1">Volume (24H)</h6>
                    <label className="TruenoSemiBold text-white">$32,665,463.00</label>
                  </figcaption>
                </figure>
                <figure className="">
                  <figcaption className="Fsize_16 TruenoBold text-success mb-2">
                    <h6 className="GreyColor mb-1">Circulating Supply</h6>
                    <label className="TruenoSemiBold text-white">$23,897,700.00</label>
                  </figcaption>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "47.795400%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="50000000.000000"></div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="SocialCommunity" class="pb-sm-5 mb-md-5">
        <div class="container pb-5">
          <h1 class="text-center mb-5">Social &amp; Community <span class="TextGradient">Updates</span></h1>
          <div class="row">
            <div class="col-xxl-4 col-xl-4 col-lg-12 mb-4 mb-lg-0">
              <div class="HeightBox mb-4">
                <h3 class="text-white mb-4">Social Media</h3>
                <a class="twitter-timeline" data-height="628" data-theme="dark" href="https://twitter.com/VulcanForged&amp;ref_src=twsrc%5Etfw">Tweets by VulcanForged</a>
                <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
              <p class="text-center mb-0">
                <a href="https://twitter.com/VulcanForged" class="BtnBorder py-2 px-4 d-inline-block">View More</a>
              </p>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-12 mb-4 mb-lg-0">
              <div class="HeightBox mb-4">
                <h3 class="text-white mb-4">Blog Post &amp; News</h3>
                <figure class="NewsBox d-flex line-height-normal mb-4">
                  <img src={require('../../assets/img-blog-nodepost-4.webp')} class="object-cover rounded w-100 me-3" alt="" />
                  <figcaption>
                    <div class="d-flex align-items-center Fsize_12 OpenSansBold mb-2">
                      <span class="badge Gradient rounded-pill OpenSansReg Fsize_10 fw-normal text-white text-uppercase px-2 py-1 me-3">VULCAN FORGED</span>
                      Apr 27, 2022
                    </div>
                    <a rel="noreferrer" class="text-white Fsize_16 TruenoSemiBold" href="https://vulcanforgedco.medium.com/elysium-nodes-2-4-the-requirements-and-the-rewards-2064919b4fcc" target="_blank">
                      Elysium nodes (2/4): The Requirements and the Rewards.
                    </a>
                  </figcaption>
                </figure>
                <figure class="NewsBox d-flex line-height-normal mb-4">
                  <img src={require('../../assets/img-blog-post-3.webp')} class="object-cover rounded w-100 me-3" alt="" />
                  <figcaption>
                    <div class="d-flex align-items-center Fsize_12 OpenSansBold mb-2">
                      <span class="badge Gradient rounded-pill OpenSansReg Fsize_10 fw-normal text-white text-uppercase px-2 py-1 me-3">VULCAN FORGED</span>
                      Apr 26, 2022
                    </div>
                    <a rel="noreferrer" class="text-white Fsize_16 TruenoSemiBold" href="https://vulcanforgedco.medium.com/vulcans-phalanx-nft-avatar-collectibles-with-solid-usecases-43a0b783fbf4" target="_blank">
                      Vulcan's Phalanx: NFT Avatar Collectibles With Solid Usecases
                    </a>
                  </figcaption>
                </figure>
                <figure class="NewsBox d-flex line-height-normal mb-4">
                  <img src={require('../../assets/img-blog-post-2.webp')} class="object-cover rounded w-100 me-3" alt="" />
                  <figcaption>
                    <div class="d-flex align-items-center Fsize_12 OpenSansBold mb-2">
                      <span class="badge Gradient rounded-pill OpenSansReg Fsize_10 fw-normal text-white text-uppercase px-2 py-1 me-3">VULCAN FORGED</span>
                      Apr 22, 2022
                    </div>
                    <a rel="noreferrer" class="text-white Fsize_16 TruenoSemiBold" href="https://vulcanforgedco.medium.com/vulcans-phalanx-is-at-the-gates-60cbd6d1a601" target="_blank">
                      Vulcan's Phalanx Is At The Gates..
                    </a>
                  </figcaption>
                </figure>
                <figure class="NewsBox d-flex line-height-normal mb-4">
                  <img src={require('../../assets/img-blog-post-1.webp')} class="object-cover rounded w-100 me-3" alt="" />
                  <figcaption>
                    <div class="d-flex align-items-center Fsize_12 OpenSansBold mb-2">
                      <span class="badge Gradient rounded-pill OpenSansReg Fsize_10 fw-normal text-white text-uppercase px-2 py-1 me-3">VULCAN FORGED</span>
                      Apr 21, 2022
                    </div>
                    <a rel="noreferrer" class="text-white Fsize_16 TruenoSemiBold" href="https://vulcanforgedco.medium.com/how-vulcans-play-to-earn-is-changing-lives-c4f5859e2401" target="_blank">
                      How Vulcan's Play-to-Earn is Changing Lives
                    </a>
                  </figcaption>
                </figure>
                <figure class="NewsBox d-flex line-height-normal mb-4">
                  <img src={require('../../assets/img-blog-post-1.jpg')} class="object-cover rounded w-100 me-3" alt="" />
                  <figcaption>
                    <div class="d-flex align-items-center Fsize_12 OpenSansBold mb-2">
                      <span class="badge Gradient rounded-pill OpenSansReg Fsize_10 fw-normal text-white text-uppercase px-2 py-1 me-3">VULCAN FORGED</span>
                      Apr 13, 2022
                    </div>
                    <a rel="noreferrer" class="text-white Fsize_16 TruenoSemiBold" href="https://vulcanforgedco.medium.com/vulcanverse-land-staking-program-launched-6d3a492d9370" target="_blank">
                      VulcanVerse Land Staking Program Launched
                    </a>
                  </figcaption>
                </figure>
              </div>
              <p class="text-center mb-0">
                <a rel="noreferrer" target="_blank" href="https://vulcanforgedco.medium.com/" class="BtnBorder py-2 px-4 d-inline-block">View More</a>
              </p>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-12">
              <div class="HeightBox mb-4">
                <h3 class="text-white mb-4">FAQ's</h3>
                <div class="position-relative mb-3">
                  <BsSearch class="icon-search Fsize_18 position-absolute verticle-center DarkGreyColor ms-2"></BsSearch>
                  <input id="SearchFAQ" class="form-control shadow-none rounded-1 ps-5 text-white" placeholder="Search FAQ's" />
                </div>
                <div class="accordion Fsize_16 mb-4" id="FaqAccordion">
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 1 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_1" aria-expanded="true" aria-controls="FaqQuestion_1" onClick={() => toggle(1)}>
                      How do I get started and play?
                    </button>
                    <div id="FaqQuestion_1" class={`accordion-collapse collapse ${clicked === 1 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          Once a player has earned a total of 10k XP (XP is earned through most in-game
                          actions) their account becomes eligible to earn $LAVA, the Vulcan Forged
                          ecosystems Play-to-Earn token.
                        </p></div>
                    </div>
                  </div>
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 2 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_2" aria-expanded="false" aria-controls="FaqQuestion_2" onClick={() => toggle(2)}>
                      How to earn XP and LAVA?
                    </button>
                    <div id="FaqQuestion_2" class={`accordion-collapse collapse ${clicked === 2 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          You earn XP by carrying out simple tasks such as the following examples:<br />
                          - Foraging, Battling, Spying, or Defending with your Vulcanites <br />
                          - Visiting Landmarks in VulcanVerse <br />
                          - Trading materials in VulcanVerse <br />
                          - Completing Quests <br />
                          - Winning or losing in any of Vulcan Forged games <br />

                          When you play VulcanVerse, you will be consistently earning $LAVA. This is based on the XP (experience points) you make in game.

                          Your $LAVA rewards will be calculated on an hourly basis. This will be based on the XP percentage earned for each player during that time.

                          Other Vulcan Forged Games have different LAVA earning systems currently based on set XP/LAVA ratios
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 3 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_3" aria-expanded="false" aria-controls="FaqQuestion_3" onClick={() => toggle(3)}>
                      What are Gods?
                    </button>
                    <div id="FaqQuestion_3" class={`accordion-collapse collapse ${clicked === 3 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          Inside VulcanVerse there are Gods in the form of Titans and Olympians based on Greco-Roman mythology. These gods are not physically represented in-game but have a plethora of blessings and abilities to grant players, according to their own lore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 4 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_4" aria-expanded="false" aria-controls="FaqQuestion_4" onClick={() => toggle(4)}>
                      What are Titans?
                    </button>
                    <div id="FaqQuestion_4" class={`accordion-collapse collapse ${clicked === 4 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          The 12 Titans are the children of Uranus and Gaea (Sky and Earth) and are comprised of:
                          Cronus (Ruler of the Universe)
                          Hyperion (God Of Light &amp; Observation)
                          Crius (God Of Constellations)
                          Coeus (God of Wisdom, And Foresight)
                          Oceanus (God of Sea and Water),
                          Iapetus (God of Mortality)
                          Thea (Goddess Of The Sun &amp; Light)
                          Rhea (Goddess Of Fertility)
                          Themis (Goddess Of Law, Order &amp; Justice)
                          Mnemosyne (Goddess Of Memory)
                          Phoebe (Goddess Of Intellect &amp; Prophecy)
                          Tethys (Goddess Of Fresh Water)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 5 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_5" aria-expanded="false" aria-controls="FaqQuestion_5" onClick={() => toggle(5)}>
                      How do you Obtain NFTs in-game?
                    </button>
                    <div id="FaqQuestion_5" class={`accordion-collapse collapse ${clicked === 5 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          In Vulcanverse your Vulcanites get sent foraging, depending on their level and stats you have a lower/higher chance of finding an NFT, these come in various types, from items that provide buffs to spells, seeds and fragments that can be used to summon Vulcanites. You can also find Berserk NFTs in-game, these cards can be used in our CCG Berserk: Vulcanites Unleashed.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item border-top-0 border-start-0 border-end-0">
                    <button class={`accordion-button TruenoSemiBold shadow-none Fsize_18 ps-0 pe-1  ${clicked === 6 ? "" : "collapsed"} `} type="button" data-bs-toggle="collapse" data-bs-target="#FaqQuestion_6" aria-expanded="false" aria-controls="FaqQuestion_6" onClick={() => toggle(6)}>
                      How do you earn in VulcanVerse?
                    </button>
                    <div id="FaqQuestion_6" class={`accordion-collapse collapse ${clicked === 6 ? "show" : ""}`} data-bs-parent="#FaqAccordion">
                      <div class="accordion-body ps-0">
                        <p>
                          Once a player has earned a total of 10k XP (XP is earned through most in-game actions) their account becomes eligible to earn $LAVA, the Vulcan Forged ecosystems Play-to-Earn token. Having reached the threshold of 10k XP, all actions that earn XP now also earn $LAVA.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>


              </div>
              <p class="text-center mb-0">
                <a href="/FAQ/Index" class="BtnBorder py-2 px-4 d-inline-block">
                  View All
                  FAQs
                </a>
              </p>
            </div>
          </div>
        </div>
      </section >
      <section id="AgoraSection" class="py-5">
        <div class="container">
          <div class="AgoraBox mx-auto">
            <div class="text-white text-center AgoraText w-100 position-relative">
              <a href="/" class="LogoAgora text-white d-flex align-items-center justify-content-center TruenoReg fw-normal mb-1">
                <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="28.137" height="30" viewBox="0 0 28.137 30">
                  <defs>
                    <linearGradient id="linear-gradient-agora" x1="-0.807" y1="-0.124" x2="0.915" y2="1.521" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#28eafe"></stop>
                      <stop offset="0.419" stop-color="#639eea"></stop>
                      <stop offset="1" stop-color="#b634ce"></stop>
                    </linearGradient>
                  </defs>
                  <path id="Path_32675" data-name="Path 32675" d="M33.647,16.067l1.731,3.213a12.115,12.115,0,0,0,.15-1.9A12.248,12.248,0,0,0,23.279,5.14h-.531l-1.038,1.9a10.1,10.1,0,0,1,1.569-.121,10.46,10.46,0,0,1,10.367,9.144Z" transform="translate(-9.185 -2.175)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32676" data-name="Path 32676" d="M31.643,34a10.448,10.448,0,0,1-9.485,6.058,10.568,10.568,0,0,1-1.61-.121L19.06,41.442a12.49,12.49,0,0,0,3.1.392,12.231,12.231,0,0,0,10.517-5.971Z" transform="translate(-8.064 -14.385)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32677" data-name="Path 32677" d="M10.215,27.213A10.442,10.442,0,0,1,8.6,10.287L10.33,7.05a12.242,12.242,0,0,0-1.4,21.49Z" transform="translate(-1.353 -2.983)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32678" data-name="Path 32678" d="M17.781,38.16l-2.469-2.5L14,34.353l-1.31,1.321L6.681,41.853a11.111,11.111,0,0,1-4.69-5.29l.525-.952A16.044,16.044,0,0,1,1.6,33.47L0,36.407c.94,3.069,3.138,5.7,7,7.754l7.015-7.212,1.869,1.892a5.284,5.284,0,0,0,1.9-.681Z" transform="translate(0 -14.16)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32679" data-name="Path 32679" d="M18.439,2.308a10.125,10.125,0,0,1,2.279.363L19.264,0H15.5L7.9,13.887a16.835,16.835,0,0,0,.162,3.519L16.6,1.829h1.592Z" transform="translate(-3.329)" fill="url(#linear-gradient-agora)"></path>
                  <path id="Path_32680" data-name="Path 32680" d="M32.985,12.678A11.873,11.873,0,0,0,30.06,11.12l8.787,16.154A11.308,11.308,0,0,1,34.168,32.4l-1.021-1.033a7.6,7.6,0,0,1-1.731.837l2.44,2.5c3.4-1.806,5.879-4.229,7-7.569Z" transform="translate(-12.718 -4.705)" fill="url(#linear-gradient-agora)"></path>
                </svg>
                Agora
              </a>
              <p>Join the amazing community of artists, and create your first NFTs.</p>
              <a href="https://agora.vulcanforged.com/Artwork/Explore" class="BtnBorder agora Fsize_12 TruenoReg py-2 px-2 d-inline-block">
                Explore
                Artwork
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="VulcanPartners" class="py-5 my-sm-5">
        <div class="container py-xxl-5">
          <h1 class="text-center mb-5"><span class="TextGradient">Vulcan</span> Partners</h1>
          <div class="row gy-3 mb-5">
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-bridgenetwork.webp')} onmouseover="this.src='/images/bridgenetwork-hover.png'" onmouseout={require('../../assets/logo-bridgenetwork.webp')} class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-coorest.webp')} onmouseover="this.src='/images/coorest-hover.png'" onmouseout="this.src='/images/logo-coorest.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-tdefi.webp')} onmouseover="this.src='/images/logo-tdefi-hover.png'" onmouseout="this.src='/images/logo-tdefi.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-drife.webp')} onmouseover="this.src='/images/drife-hover.png'" onmouseout="this.src='/images/logo-drife.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-servreality.webp')} onmouseover="this.src='/images/logo-servreality-hover.png'" onmouseout="this.src='/images/logo-servreality.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-sandbox.webp')} onmouseover="this.src='/images/logo-sandbox-hover.png'" onmouseout="this.src='/images/logo-sandbox.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-galactic.webp')} onmouseover="this.src='/images/galactic-hover.png'" onmouseout="this.src='/images/logo-galactic.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-polygon.webp')} onmouseover="this.src='/images/logo-polygon-hover.png'" onmouseout="this.src='/images/logo-polygon.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-geocats.webp')} onmouseover="this.src='/images/geocats-hover.png'" onmouseout="this.src='/images/logo-geocats.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-edverse.webp')} onmouseover="this.src='/images/edverse-hover.png'" onmouseout="this.src='/images/logo-edverse.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-bga.webp')} onmouseover="this.src='/images/logo-bga-hover.png'" onmouseout="this.src='/images/logo-bga.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-equibank.webp')} onmouseover="this.src='/images/equibank-hover.png'" onmouseout="this.src='/images/logo-equibank.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-everscapes.webp')} onmouseover="this.src='/images/everscapes-hover.png'" onmouseout="this.src='/images/logo-everscapes.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-gob.webp')} onmouseover="this.src='/images/gob-hover.png'" onmouseout="this.src='/images/logo-gob.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-fables.webp')} onmouseover="this.src='/images/fables-hover.png'" onmouseout="this.src='/images/logo-fables.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-dysto.webp')} onmouseover="this.src='/images/dysto-hover.png'" onmouseout="this.src='/images/logo-dysto.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-heavymetal.webp')} onmouseover="this.src='/images/heavy-hover.png'" onmouseout="this.src='/images/logo-heavymetal.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-farcana.webp')} onmouseover="this.src='/images/farcana-hover.png'" onmouseout="this.src='/images/logo-farcana.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-hexenagos.webp')} onmouseover="this.src='/images/hexenagos-hover.png'" onmouseout="this.src='/images/logo-hexenagos.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-myth-word.webp')} onmouseover="this.src='/images/myth-hover.png'" onmouseout="this.src='/images/logo-myth-word.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-satoshi.webp')} onmouseover="this.src='/images/satoshi-hover.png'" onmouseout="this.src='/images/logo-satoshi.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-sinVerse.webp')} onmouseover="this.src='/images/sinverse-hover.png'" onmouseout="this.src='/images/logo-sinVerse.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-swallow.webp')} onmouseover="this.src='/images/swallow-hover.png'" onmouseout="this.src='/images/logo-swallow.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-bornless.webp')} onmouseover="this.src='/images/bornless-hover.png'" onmouseout="this.src='/images/logo-bornless.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <div class="ImgBox rounded-1 d-flex justify-content-center align-items-center p-2">
                <img src={require('../../assets/logo-husl.webp')} onmouseover="this.src='/images/husl-hover.png'" onmouseout="this.src='/images/logo-husl.png'" class="object-cover img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="NewsUpdates" class="position-relative py-5">
        <div class="container text-center py-lg-5 my-xxl-5">
          <h2 class="mb-4">Sign Up for <span class="TextGradient">News &amp; Updates</span></h2>
          <p class="mb-5 Fsize_24">
            Sign up to our newsletter and stay up-to-date with our news, industry updates,
            promotions and special offers.
          </p>
          <input type="email" class="form-control rounded-1 shadow-none mb-5 ps-2 text-white" placeholder="Your email ..." />
          <p class="text-center mb-0"><a href="/" class="BtnBorder py-2 px-2 d-inline-block">Subscribe Now</a></p>
        </div>
      </section>

      <footer id="footer" class="py-5">
        <div class="container Fsize_16">
          <div class="BorderBottom pb-5 mb-3">
            <div class="row">
              <div class="col-xxl-4 col-xl-3 col-12 pe-xxl-5 mb-4 mb-xl-0">
                <div class="pe-5">
                  <a class="navbar-brand d-inline-block mb-lg-2 mb-2" href="/">
                    <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="33.557" height="28.234" viewBox="0 0 33.557 28.234">
                      <defs>
                        <linearGradient id="linear-gradient-marketplace" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="#7d0753"></stop>
                          <stop offset="1" stop-color="#f55d0e"></stop>
                        </linearGradient>
                      </defs>
                      <path id="Path_2416" data-name="Path 2416" d="M-16726.125,9506.411h9.461l6.346,10.17,5.3-10.17h10.258s-4.088,7.385-6.4,11.52a13.893,13.893,0,0,1-6.166-2.395s3.291,3.98,14.758,7.336c-11.9-.418-20.814-7.535-24.5-11.324a10.753,10.753,0,0,0,2.65,5.152C-16720.555,9513.05-16726.125,9506.411-16726.125,9506.411Z" transform="translate(16726.125 -9506.411)" fill="url(#linear-gradient-marketplace)"></path>
                      <path id="Path_2417" data-name="Path 2417" d="M-16703.492,9521.981l-6.832,12.41s-4.68-8.312-6.93-12.482a18.112,18.112,0,0,0,5.414,1.906c-4.539-1.783-9.09-5.623-13.875-10.924,5.309,4.063,9.82,6.416,16.793,9.3a15.508,15.508,0,0,1-3.242-4.117A56.212,56.212,0,0,0-16703.492,9521.981Z" transform="translate(16726.148 -9506.157)" fill="url(#linear-gradient-marketplace)"></path>
                    </svg>
                    <span class="d-none d-xl-inline">Vulcan Forged</span>
                  </a>

                  <p>
                    Vulcan Forged Premium Blockchain Gaming Ecosystem Explore the depths of the Vulcan
                    Forged eco-system.
                  </p>
                  <p>
                    Immerse yourself in our Play2Earn fantasy games, earning LAVA and NFTs trade on our
                    NFT Marketplace and participate in NFT farms and pools on our NFT gaming-token
                    Dex.
                  </p>
                </div>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">MARKETPLACE</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="https://market.vulcanforged.com/">Explore</a></li>
                  <li class="pt-1"><a href="https://market.vulcanforged.com/Statistics">Statistics</a></li>
                  <li class="pt-1"><a href="https://market.vulcanforged.com/MarketActivity">Activity</a></li>
                </ul>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">VULCANDEX</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="https://vulcandex.vulcanforged.com/swap#/swap">Trade</a></li>
                  <li class="pt-1"><a href="https://vulcandex.vulcanforged.com/#/Farm">Farms</a></li>
                  <li class="pt-1"><a href="https://vulcandex.vulcanforged.com/#/add">Staking </a></li>
                  <li class="pt-1"><a href="https://wallet.polygon.technology/login/">Bridge </a></li>
                  <li class="pt-1"><a href="https://github.com/VaivalGithub/VulcanDex">Doc</a></li>
                </ul>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">AGORA</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="https://agora.vulcanforged.com/Artwork/Explore">Explore </a></li>
                  <li class="pt-1"><a href="https://agora.vulcanforged.com/Auctions">Auctions</a></li>
                  <li class="pt-1"><a href="https://agora.vulcanforged.com/ArtWork"> Create NFT</a></li>
                </ul>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">MY FORGE</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="https://myforge.vulcanforged.com/Seed/Index">Sow </a></li>
                  <li class="pt-1"><a href="https://myforge.vulcanforged.com/Cedalion/Index"> Cedalion Program </a></li>
                  <li class="pt-1"><a href="https://myforge.vulcanforged.com/LeaderBoard/Index"> Leaderboard</a></li>
                </ul>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">PYR</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="https://vulcandex.vulcanforged.com/es/swap">Buy PYR</a></li>
                  <li class="pt-1"><a href="https://wallet.polygon.technology/login/">Bridge </a></li>
                </ul>
              </div>
              <div class="col-xxl col-xl col-lg col-md-6 col-sm-6">
                <h5 class="Fsize_18 text-uppercase text-white mb-lg-3 mb-1">ABOUT US</h5>
                <ul class="list-unstyled">
                  <li class="pt-1"><a href="/blog/index">News</a></li>
                  <li class="pt-1"><a href="about/index">About Us </a></li>
                  <li class="pt-1"><a href="/helpcenter/index">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="SocialLinks" class="pb-5 py-sm-5 text-center text-md-start">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-auto mb-3 mb-lg-0">
                <p class="text-white">Join our social network</p>
                <p class="mb-0">for latest news and updates.</p>
              </div>
              <div class="col-sm-auto col-6 Fsize_10 mb-2 mb-lg-0">
                <FaTelegramPlane class="icon-telegram d-block text-white Fsize_16 my-1"></FaTelegramPlane>
                <span class="Fsize_12 text-white">9,000</span> Users
              </div>
              <div class="col-sm-auto col-6 Fsize_10 mb-2 mb-lg-0">
                <FaDiscord class="icon-discord d-block text-white Fsize_14 my-1"></FaDiscord>
                <span class="Fsize_12 text-white">20,000</span> Users
              </div>
              <div class="col-sm-auto col-6 Fsize_10 mb-2 mb-lg-0">
                <FaTwitter class="icon-twitter d-block text-white Fsize_14 my-1"></FaTwitter>
                <span class="Fsize_12 text-white">115,044</span> Users
              </div>
              <div class="col-sm-auto col-6 Fsize_10 mb-2 mb-lg-0">
                <BsMedium class="icon-medium d-block text-white Fsize_14 my-1"></BsMedium>
                <span class="Fsize_12 text-white">1,300</span> Users
              </div>
              <div class="col-auto mt-3 mt-md-0 ms-lg-auto">
                Protected by: | <img src={require('../../assets/img-venly.webp')} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div id="CopyRight" class="position-relative Fsize_14 text-center text-md-start">
          <div class="container">
            <div class="row justify-content-between text-sm-center text-md-left">
              <div class="col-xxl-auto col-xl-auto col-lg-auto col-md-auto mb-3 mb-md-0">
                Copyrights <span id="year">2022</span>. All Rights Reserved by <a href="https://vulcanforged.com/" class="OrangeText">Vulcan Forged</a>
              </div>
              <div class="col-xxl-auto col-xl-auto col-lg-auto col-md-auto">
                <a class="me-1" href="/PrivacyPolicy/Index">Privacy Policy</a> | <a class="ms-1" href="/TermsAndConditions/Index">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

