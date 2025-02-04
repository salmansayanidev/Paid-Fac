<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./assets/images/fev-icon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/slick.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/global.css">
    <link rel="stylesheet" href="./assets/css/layout.css">
    <title>Paid Fac</title>
</head>

<body>

    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-6">
                    <div class="header-left-area">
                        <div class="header-logo">
                            <a href=".">
                                <img src="./assets/images/Logo.svg" alt="Paid Fac logo">
                            </a>
                        </div>
                        <div class="header-left-menu d-none d-lg-block">
                            <nav class="navigation">
                                <ul class="nav-menu-list">
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Restaurants</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </a>
                                        <ul class="sub-menu">
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="all-restaurants-solutions.php">
                                                    All Restaurants Solutions
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="full-service-restaurants.php">
                                                    Full Service Restaurants
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="quick-service-restaurants.php">
                                                    Quick Service Restaurants
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Services</span>
                                            <!-- <i class="fa-solid fa-angle-down"></i> -->
                                        </a>
                                        <!-- <ul class="sub-menu">
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example One
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Two
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Three
                                                </a>
                                            </li>
                                        </ul> -->
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Retail</span>
                                            <!-- <i class="fa-solid fa-angle-down"></i> -->
                                        </a>
                                        <!-- <ul class="sub-menu">
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example One
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Two
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Three
                                                </a>
                                            </li>
                                        </ul> -->
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="products.php">
                                            <span>Products</span>
                                            <!-- <i class="fa-solid fa-angle-down"></i> -->
                                        </a>
                                        <!-- <ul class="sub-menu">
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example One
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Two
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Three
                                                </a>
                                            </li>
                                        </ul> -->
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Resources</span>
                                            <!-- <i class="fa-solid fa-angle-down"></i> -->
                                        </a>
                                        <!-- <ul class="sub-menu">
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example One
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Two
                                                </a>
                                            </li>
                                            <li class="sub-menu-item">
                                                <a class="nav-menu-link" href="#">
                                                    Example Three
                                                </a>
                                            </li>
                                        </ul> -->
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-7 col-md-6">
                    <div class="header-right-area">
                        <div class="header-right-menu d-none d-lg-block">
                            <nav class="navigation">
                                <ul class="nav-menu-list">
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="pricing.php">
                                            <span>Pricing</span>
                                        </a>
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Help</span>
                                        </a>
                                    </li>
                                    <li class="nav-menu-item">
                                        <a class="nav-menu-link" href="#">
                                            <span>Log In</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-right-btn">
                            <a href="contact-us.php" class="primary-btn">
                                Contact sales
                            </a>
                        </div>
                        <div class="cart-area">
                            <a class="cart-icon" href="#">
                                <img class="img-fluid" src="./assets/images/shopping-cart.png" alt="shopping cart">
                                <span class="cart-count">0</span>
                            </a>
                        </div>
                        <div class="hamburger">
                            <button class="hamburger-btn d-flex d-lg-none" type="button">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="mobile-navigation">
            <button class="mobile-nav-close-btn" type="button">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <ul class="mobile-nav-list">
                <li class="mobile-nav-list-item">
                    <div class="mobile-nav-list-item-inner">
                        <a href="#" class="nav-menu-link text-white d-block">
                            <span>Restaurants</span>
                        </a>
                        <button class="mobile-dropdown-btn" type="button">
                            <i class="fa-solid fa-angle-down angle-icon"></i>
                        </button>
                    </div>
                    <ul class="mobile-sub-menu-list">
                        <li class="mobile-sub-menu-item">
                            <a href="all-restaurants-solutions.php" class="nav-menu-link d-block">
                                All Restaurants Solutions
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="full-service-restaurants.php" class="nav-menu-link d-block">
                                Full Service Restaurants
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="quick-service-restaurants.php" class="nav-menu-link d-block">
                                Quick Service Restaurants
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-list-item">
                    <div class="mobile-nav-list-item-inner">
                        <a href="#" class="nav-menu-link text-white d-block">
                            <span>Services</span>
                        </a>
                        <button class="mobile-dropdown-btn" type="button">
                            <i class="fa-solid fa-angle-down angle-icon"></i>
                        </button>
                    </div>
                    <ul class="mobile-sub-menu-list">
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Example One
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Two
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Three
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-list-item">
                    <div class="mobile-nav-list-item-inner">
                        <a href="#" class="nav-menu-link text-white d-block">
                            <span>Retail</span>
                        </a>
                        <button class="mobile-dropdown-btn" type="button">
                            <i class="fa-solid fa-angle-down angle-icon"></i>
                        </button>
                    </div>
                    <ul class="mobile-sub-menu-list">
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Example One
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Two
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Three
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-list-item">
                    <div class="mobile-nav-list-item-inner">
                        <a href="products.php" class="nav-menu-link text-white d-block">
                            <span>Products</span>
                        </a>
                        <button class="mobile-dropdown-btn" type="button">
                            <i class="fa-solid fa-angle-down angle-icon"></i>
                        </button>
                    </div>
                    <ul class="mobile-sub-menu-list">
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Example One
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Two
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Three
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-list-item">
                    <div class="mobile-nav-list-item-inner">
                        <a href="#" class="nav-menu-link text-white d-block">
                            <span>Resources</span>
                        </a>
                        <button class="mobile-dropdown-btn" type="button">
                            <i class="fa-solid fa-angle-down angle-icon"></i>
                        </button>
                    </div>
                    <ul class="mobile-sub-menu-list">
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Example One
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Two
                            </a>
                        </li>
                        <li class="mobile-sub-menu-item">
                            <a href="#" class="nav-menu-link d-block">
                                Exmaple Three
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mobile-nav-list-item">
                    <a href="pricing.php" class="nav-menu-link text-white d-block">
                        <span>Pricing</span>
                    </a>
                </li>
                <li class="mobile-nav-list-item">
                    <a href="#" class="nav-menu-link text-white d-block">
                        <span>Help</span>
                    </a>
                </li>
                <li class="mobile-nav-list-item">
                    <a href="#" class="nav-menu-link text-white d-block">
                        <span>Log In</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>