import categoriesMegaMenu from "./categoriesMegaMenu";

// MEGAMENU DATA
const megaMenus = [
  [
    {
      title: "Home",
      child: [
        {
          title: "Market 1",
          url: "/market-1",
        },
        {
          title: "Furniture",
          url: "/furniture-shop",
        },
        {
          title: "Grocery-v1",
          url: "/grocery1",
        },
        {
          title: "Grocery-v2",
          url: "/grocery2",
        },
        {
          title: "Grocery-v3",
          url: "/grocery3",
        },
        {
          title: "Health and Beauty",
          url: "/healthbeauty-shop",
        },
        {
          title: "Fashion",
          url: "/fashion-shop-1",
        },
        {
          title: "Gift Store",
          url: "/gift-shop",
        },
        {
          title: "Gadget",
          url: "/gadget-shop",
        },
      ],
    },
  ],
  [
    {
      title: "User Account",
      child: [
        {
          title: "Order List",
          url: "/orders",
        },
        {
          title: "Order Details",
          url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
        {
          title: "View Profile",
          url: "/profile",
        },
        {
          title: "Edit Profile",
          url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
        },
        {
          title: "Address List",
          url: "/address",
        },
        {
          title: "Add Address",
          url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
        },
        {
          title: "All tickets",
          url: "/support-tickets",
        },
        {
          title: "Ticket details",
          url: "/support-tickets/when-will-my-product-arrive",
        },
        {
          title: "Wishlist",
          url: "/wish-list",
        },
      ],
    },
  ],
  [
    {
      title: "Vendor Account",
      child: [
        {
          title: "Dashboard",
          url: "/vendor/dashboard",
        },
        {
          title: "Profile",
          url: "/vendor/account-setting",
        },
      ],
    },
    {
      title: "Products",
      child: [
        {
          title: "All products",
          url: "/admin/products",
        },
        {
          title: "Add/Edit product",
          url: "/admin/products/create",
        },
      ],
    },
    {
      title: "Orders",
      child: [
        {
          title: "All orders",
          url: "/admin/orders",
        },
        {
          title: "Order details",
          url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        },
      ],
    },
  ],
  [
    {
      title: "Sale Page",
      child: [
        {
          title: "Sales Version 1",
          url: "/sale-page-1",
        },
        {
          title: "Sales Version 2",
          url: "/sale-page-2",
        },
      ],
    },
    {
      title: "Shop",
      child: [
        {
          title: "Search product",
          url: "/product/search/mobile phone",
        },
        {
          title: "Single product",
          url: "/product/lord-2019",
        },
        {
          title: "Cart",
          url: "/cart",
        },
        {
          title: "Checkout",
          url: "/checkout",
        },
        {
          title: "Alternative Checkout",
          url: "/checkout-alternative",
        },
        {
          title: "Order confirmation",
          url: "/order-confirmation",
        },
      ],
    },
  ],
];
const stationaryMenus = [
  [
    {
      title: "Writing Materials",
      child: [
        {
          title: "Pens",
          url: "/product/pens",
        },
        {
          title: "Markers & Highlighters",
          url: "/product/markers-and-highlighters",
        },
        {
          title: "Pencil & Chalk",
          url: "/product/pencil-and-chalk",
        }
      ],
    },
  ],
  [
    {
      title: "Paper",
      child: [
        {
          title: "Blocks & Notebooks",
          url: "/product/blocks-and-notebooks",
        },
        {
          title: "Copy Paper",
          url: "/product/copy-paper",
        },
        {
          title: "Sticky Notes",
          url: "/product/sticky-notes",
        },
      ],
    },
  ]
];

const officeFurnitureMenus = [
  [
    {
      title: "Chairs",
      child: [
        {
          title: "Office Chairs",
          url: "/product/chairs/office",
        },
        {
          title: "Swivel Chairs",
          url: "/product/chairs/swivel",
        },
        {
          title: "Arm chairs",
          url: "/product/chairs/arm",
        }
      ],
    },
  ],
  [
    {
      title: "Tables",
      child: [
        {
          title: "Conference Tables",
          url: "/product/tables/conference",
        },
        {
          title: "Desk",
          url: "/product/tables/desk",
        },
        {
          title: "Podiums",
          url: "/product/tables/podiums",
        },
      ],
    },
  ],
  [
    {
      title: "Storage",
      child: [
        {
          title: "Universal cabinates",
          url: "/product/cabinates",
        },
        {
          title: "Lockers",
          url: "/product/lockers",
        }
      ],
    },
  ]
];

const officeEquipment = [
  [
    {
      title: "Shredder",
      child: [],
    },
  ],
  [
    {
      title: "Money Counters and Validators",
      child: [],
    },
  ],
  [
    {
      title: "Flipcharts",
      child: [],
    },
    
  ],
  [
    {
      title: "Computer Accessories",
      child: [
        {
          title: "Keyboards & Mice",
          url: "/admin/products/keyboarde-mice",
        },
        {
          title: "USB sticks & SD Cards",
          url: "/admin/products/usb-sticks-cards",
        },
        {
          title: "Cables",
          url: "/admin/products/cabels",
        },
      ],
    },
  ],
];
const brandsMenus = [
  [
    {
      title: "New Brands",
      child: [
        {
          title: "Wolf",
          url: "/brands/wolf",
        },
        {
          title: "HSM",
          url: "/brands/hsm",
        },
        {
          title: "EUROKRAFT",
          url: "/brands/eurokraft",
        },
        {
          title: "Mauser",
          url: "/brands/mauser",
        },
        {
          title: "QUIPO",
          url: "/brands/quipo",
        }
      ],
    },
  ],
  [
    {
      title: "Popular Brands",
      child: [
        {
          title: "Verbatim",
          url: "/product/verbatim",
        },
        {
          title: "Clairefonataine",
          url: "/product/clairefonataine",
        },
        {
          title: "Safescan",
          url: "/product/safescan",
        },
        {
          title: "Brennenstuhl",
          url: "/product/brennenstuhl",
        },
        {
          title: "Edding",
          url: "/product/edding",
        },
      ],
    },
  ]
];

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    title: "Stationary",
    megaMenu: true,
    megaMenuWithSub: false,
    child: stationaryMenus,
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Office furniture",
    child: officeFurnitureMenus,
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Office equipment",
    child: officeEquipment,
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Transport",
    child: [
      [
        {
          title: "Lift Carts",
          child: [],
        },
      ],
      [
        {
          title: "Sack Trucks",
          child: [],
        },
      ],
    ],
  },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Brands",
    child: brandsMenus,
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "More",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
      },
      {
        title: "Products",
        child: [
          {
            title: "All products",
            url: "/admin/products",
          },
          {
            title: "Add/Edit product",
            url: "/admin/products/lord-2019",
          },
        ],
      },
      {
        title: "Orders",
        child: [
          {
            title: "All orders",
            url: "/admin/orders",
          },
          {
            title: "Order details",
            url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
          },
        ],
      },
      {
        title: "Profile",
        url: "/vendor/account-setting",
      },
    ],
  },

  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Merchants",
    child: brandsMenus,
  },
];
export default navbarNavigations;
