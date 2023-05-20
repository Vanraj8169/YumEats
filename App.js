import React from "react";
import ReactDOM from "react-dom/client";

const NavBar = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Yum%21_Logo.svg/1217px-Yum%21_Logo.svg.png"
        alt="logo"
      />
      <div className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const restrauntList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "698272",
      name: "Maiz Mexican Kitchen",
      uuid: "af97c998-0199-48ab-8d24-2122cd4c2e36",
      city: "5",
      area: "BKC",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "8fb434032fdce4f38d98fef761589c25",
      cuisines: ["Mexican", "Italian", "American"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "maiz-mexican-kitchen-bandra-west-bandra-west",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "OFFICE NO. 10, SWASTIK INDUSTRIAL ESTATE, VIDYANAGARI MARG, KALINA CST ROAD, SANTACRUZ EAST MUMBAI , Greater Mumbai Ward-H/E, Greater Mumbai, Maharashtra-400098",
      locality: "Kalina Cst Road",
      parentId: 11654,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3500,
        message: "",
        title: "Delivery Charge",
        amount: "3500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6738713~p=1~eid=00000188-3956-206e-623f-f4270082013b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "698272",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 50,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "9052",
      name: "Subway",
      uuid: "03d5c23c-1254-4e43-a673-86e1a9d47802",
      city: "5",
      area: "Santacruz East",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "subway-mahim-dadar-mahim-dadar-2",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "G -1,A,166 central plaza,C S T road,kalina,Santacruz East Mumbai 98",
      locality: "Central Plaza, Kalina",
      parentId: 2,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3500,
        message: "",
        title: "Delivery Charge",
        amount: "3500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "9052",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "349282",
      name: "A1 Darbar",
      uuid: "52f3b68a-ee31-44e0-8cfc-cfad0fd923a3",
      city: "5",
      area: "Kurla West",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "jq7vihmzswnzctwwf5p3",
      cuisines: ["Indian", "Biryani", "Chinese"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "a1-darbar-kurla-kurla",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "Plot no 8 shivaji kutir mandal,next to best depot,opp peninsula,lbs marg,kurla west",
      locality: "Lbs Marg",
      parentId: 25079,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3500,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3500,
        message: "",
        title: "Delivery Charge",
        amount: "3500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "349282",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "21369",
      name: "Urban Street Cafe",
      uuid: "f4d57ac4-1524-48cd-8789-7960bb760d20",
      city: "5",
      area: "Bhavya Plaza",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ceaq68pzgxrmfi4clf3m",
      cuisines: ["Italian", "Lebanese", "Chinese", "Indian"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 54,
      minDeliveryTime: 54,
      maxDeliveryTime: 54,
      slaString: "54 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "urban-street-cafe-khar-bandra-west-bandra-west",
        city: "mumbai",
      },
      cityState: "5",
      address: "Bhavya Plaza, Shop 1, Near Kotak Mahindra Bank, Khar, Mumbai",
      locality: "Khar West",
      parentId: 220155,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5900,
        message: "",
        title: "Delivery Charge",
        amount: "5900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6789276~p=4~eid=00000188-3956-206e-623f-f42800820439",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "21369",
        deliveryTime: 54,
        minDeliveryTime: 54,
        maxDeliveryTime: 54,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "622319",
      name: "Amul Ice Cream Parlour",
      uuid: "85b3b421-a334-4b8f-9c48-a85768278220",
      city: "5",
      area: "Chembur",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "llaac3etflwpllivmfnw",
      cuisines: ["Ice Cream", "Desserts"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "amul-ice-cream-parlor-(tilak-nagar)-chembur-chembur",
        city: "mumbai",
      },
      cityState: "5",
      address:
        "AKSHATA BULD NO.1,, SHOP NO.8,, OPP  SAHAKAR TALKIES,, TILAK NAGAR, CHEMBUR, Greater Mumbai  Ward-M/W, Greater Mumbai,  Maharashtra-400089",
      locality: "Tilak Nagar",
      parentId: 32508,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4100,
        message: "",
        title: "Delivery Charge",
        amount: "4100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "622319",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "20435",
      name: "Krishnaa Leela",
      uuid: "e69e482c-3adc-4e5e-87b2-99a875864dbc",
      city: "5",
      area: "Chembur",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "hasrbn2swmttlb6wmowx",
      cuisines: ["Street Food", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 32,
      maxDeliveryTime: 32,
      slaString: "32 MINS",
      lastMileTravel: 4.099999904632568,
      slugs: {
        restaurant: "krishnaa-leela-chembur-naka-chembur-chembur",
        city: "mumbai",
      },
      cityState: "5",
      address: "Diwan Niketan, ST road, Chembur naka,Next to akbarallys,Mumbai",
      locality: "Chembur Naka, Chembur",
      parentId: 121034,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4700,
        message: "",
        title: "Delivery Charge",
        amount: "4700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "20435",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        lastMileTravel: 4.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="imgCard"
      />
      <p className="card-Names">{name}</p>
      <p className="cuisines-names">{cuisines.join(",")}</p>
      <h4>
        ⭐ <span className="avgRating">{avgRating}</span>{" "}
      </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <h1>Footer</h1>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
