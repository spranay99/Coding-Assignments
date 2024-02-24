import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          />
        </div>

        <div className="nav-items">
          <ul>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const RestaurantCard = ({ restaurantList }) => {
  const { name, cuisine, image, rating, cft } = restaurantList.info;

  //Cuisines is an array of object
  const fetchedCSN = cuisine.map((csn) => csn.name);

  return (
    <div className="restaurant-cards">
      <img className="restaurant-img" src={image.url} />
      <div className="restaurant-details">
        <h3>{name}</h3>
        <p>{fetchedCSN.slice(0, 2).join(", ")}</p>
        <div className="additional-details">
          <span>{rating.aggregate_rating}⭐</span>
          <span>{restaurantList.distance}</span>
        </div>
        <p>{cft.text}</p>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    info: {
      resId: 20842855,
      name: "Gigi",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20842855/eae6343967aacf033f462969f385a67d_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20842855/eae6343967aacf033f462969f385a67d_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "278",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.9",
            reviewCount: "278",
            reviewTextSmall: "278 Reviews",
            subtext: "278 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.9",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Linking Road, Bandra West, Mumbai",
        address:
          "Unit 3, Ground Floor, Unit 1, First Floor, Supreme Headquarters, Linking Road, Bandra West, Mumbai",
        localityUrl: "mumbai/linking-road-bandra-west-restaurants",
      },
      timing: {
        text: "Closes in 51 minutes",
        color: "#e5521f",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/european/",
          name: "European",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/japanese/",
          name: "Japanese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/gigi-linking-road-bandra-west/info",
      clickActionDeeplink: "",
    },
    distance: "5.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20842855","element_type":"listing","rank":22}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/gigi-linking-road-bandra-west/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20918804,
      name: "Rasoi Kitchen & Bar",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20918804/bcf285d73c82d7fad4b5cfb79729b65a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/20918804/bcf285d73c82d7fad4b5cfb79729b65a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20918804/f9292b6cd421fb86bb986c79570faad9_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "94",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: {
          text: "Newly Opened",
          color: "#FFFFFF",
          bgColor: "#F4A266",
          bgColorV2: {
            type: "green",
            tint: "100",
          },
          subtitle: "OUTLET",
          ratingV2: "New",
        },
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "90",
            reviewTextSmall: "90 Reviews",
            subtext: "90 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "4",
            reviewTextSmall: "4 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: true,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹750 for one",
      },
      locality: {
        name: "Khar, Mumbai",
        address:
          "Plot 786/787, Ground Floor, Ramee Techome, 3rd Road, Govind Dham, Linking Road, Khar, Mumbai",
        localityUrl: "mumbai/khar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/sea-food/",
          name: "Seafood",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/maharashtrian/",
          name: "Maharashtrian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/rasoi-kitchen-bar-khar/info",
      clickActionDeeplink: "",
    },
    distance: "5.7 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"2961952","bzone":"0","campaign_id":"11855293","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20918804","isNewAd":"34","ad_position":"23","slider_position":"23","slider_sequence":"23","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":428,\\"boosted_rank\\":23,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01375\\",\\"cost_per_unit\\":\\"29.5\\",\\"distance\\":\\"5.238070011138916\\",\\"organic_ctr\\":\\"0.05011363636363636\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"69\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20918804","element_type":"listing","rank":23,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20585965,
      name: "Bustle",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20585965/e60f5db95b5290c72a25284b0e9e161b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20585965/e60f5db95b5290c72a25284b0e9e161b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20585965/694ba2406a564cb5d77c780720753544_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "1,267",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "1,225",
            reviewTextSmall: "1,225 Reviews",
            subtext: "1,225 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.2",
            reviewCount: "42",
            reviewTextSmall: "42 Reviews",
            subtext: "42 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,900 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Borivali West, Mumbai",
        address:
          "701/702, Ward R/C, Vini Elegance, LT Road, Borivali West, Mumbai",
        localityUrl: "mumbai/borivali-west-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,900 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/bustle-borivali-west/info",
      clickActionDeeplink: "",
    },
    distance: "23.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20585965","element_type":"listing","rank":24}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/bustle-borivali-west/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20454636,
      name: "Caffe Allora",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/20454636/7764a13a2c864011b6155eb32dc28e3b_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/6/20454636/7764a13a2c864011b6155eb32dc28e3b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/20454636/77b85ac594b8e83c8aa79b7ce50a2a88_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,075",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "856",
            reviewTextSmall: "856 Reviews",
            subtext: "856 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "219",
            reviewTextSmall: "219 Reviews",
            subtext: "219 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,200 for two",
      },
      cfo: {
        text: "₹500 for one",
      },
      locality: {
        name: "Phoenix Palladium, Lower Parel, Mumbai",
        address:
          "2 & 3, Ground Floor, Block 1, Phoenix Mall, Senapati Bapat Marg, Lower Parel, Mumbai",
        localityUrl: "mumbai/restaurants/in/phoenix-palladium-lower-parel",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pasta/",
          name: "Pasta",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,200 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/caffe-allora-1-lower-parel/info",
      clickActionDeeplink: "",
    },
    distance: "4.1 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3608926","bzone":"0","campaign_id":"12502943","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20454636","isNewAd":"34","ad_position":"25","slider_position":"25","slider_sequence":"25","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":455,\\"boosted_rank\\":25,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.011488250652741514\\",\\"cost_per_unit\\":\\"28.3\\",\\"distance\\":\\"4.397774696350098\\",\\"organic_ctr\\":\\"0.053861132008673714\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"1\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20454636","element_type":"listing","rank":25,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/caffe-allora-1-lower-parel/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20823682,
      name: "Baliboo",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/20823682/e4fdddc3333f326a8bfc521c59492eca_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/2/20823682/e4fdddc3333f326a8bfc521c59492eca_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "380",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "380",
            reviewTextSmall: "380 Reviews",
            subtext: "380 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,100 for two",
      },
      cfo: {
        text: "₹850 for one",
      },
      locality: {
        name: "Goregaon East, Mumbai",
        address:
          "First Floor, Commerz II, International Business Park, Oberoi Garden City, Western Express Highway, Goregaon East, Mumbai",
        localityUrl: "mumbai/goregaon-east-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjdcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/korean/",
          name: "Korean",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pasta/",
          name: "Pasta",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,100 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/baliboo-goregaon-east/info",
      clickActionDeeplink: "",
    },
    distance: "16.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20823682","element_type":"listing","rank":26}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/baliboo-goregaon-east/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19128087,
      name: "Younion",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19128087/9f4868985cb908ec4f1dae29d9872915_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/7/19128087/9f4868985cb908ec4f1dae29d9872915_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/19128087/f655f0b2c4dec514fbcfc2c34e8a65e5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,799",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.1",
            reviewCount: "1,766",
            reviewTextSmall: "1,766 Reviews",
            subtext: "1,766 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.1",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "33",
            reviewTextSmall: "33 Reviews",
            subtext: "33 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,000 for two",
      },
      cfo: {
        text: "₹800 for one",
      },
      locality: {
        name: "Kamala Mills Compound, Mumbai",
        address: "Near Radio Mirchi Office, Kamala Mills, Lower Parel, Mumbai",
        localityUrl: "mumbai/restaurants/in/kamala-mills-compound",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/finger-food/",
          name: "Finger Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/finger-food/",
          name: "Finger Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/european/",
          name: "European",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/younion-lower-parel/info",
      clickActionDeeplink: "",
    },
    distance: "3.3 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3583759","bzone":"0","campaign_id":"12477708","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"19128087","isNewAd":"34","ad_position":"27","slider_position":"27","slider_sequence":"27","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":87,\\"boosted_rank\\":27,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.0098173964264677\\",\\"cost_per_unit\\":\\"23.6\\",\\"distance\\":\\"3.5962367057800293\\",\\"organic_ctr\\":\\"0.040212533204583206\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"17\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19128087","element_type":"listing","rank":27,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/younion-lower-parel/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20955949,
      name: "Bawri",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/20955949/a5bec9a8ad264b59c7db7783e019b6ce_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/20955949/a5bec9a8ad264b59c7db7783e019b6ce_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/20955949/8aa76ce1bceaa5006fa2d0494384132b_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "268",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.8",
            reviewCount: "267",
            reviewTextSmall: "267 Reviews",
            subtext: "267 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "1",
            reviewTextSmall: "1 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹3,000 for two",
      },
      cfo: {
        text: "₹1,200 for one",
      },
      locality: {
        name: "Bandra Kurla Complex, Mumbai",
        address:
          "Shop No. 5, Ground Floor, INS Tower, G Block, Bandra Kurla Complex, Mumbai",
        localityUrl: "mumbai/bandra-kurla-complex-restaurants",
      },
      timing: {
        text: "Closes in 21 minutes",
        color: "#ab000d",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹3,000 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/bawri-bandra-kurla-complex/info",
      clickActionDeeplink: "",
    },
    distance: "5.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20955949","element_type":"listing","rank":28}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18494129,
      name: "BKC  Dive.",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/18494129/39c4660252bd008599f8ff32338e3b19_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/9/18494129/39c4660252bd008599f8ff32338e3b19_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/18494129/3f6356bd7d84bd560b35a499849b6c22_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "14.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "12.6K",
            reviewTextSmall: "12.6K Reviews",
            subtext: "12.6K Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "2,011",
            reviewTextSmall: "2,011 Reviews",
            subtext: "2,011 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,300 for two",
      },
      cfo: {
        text: "₹550 for one",
      },
      locality: {
        name: "Bandra Kurla Complex, Mumbai",
        address:
          "Unit 1, Ground Floor, B Wing, Pinnacle Corporate Park, Bandra Kurla Complex, Mumbai",
        localityUrl: "mumbai/bandra-kurla-complex-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,300 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/bkc-dive-bandra-kurla-complex/info",
      clickActionDeeplink: "",
    },
    distance: "6.2 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3176242","bzone":"0","campaign_id":"12069875","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18494129","isNewAd":"34","ad_position":"29","slider_position":"29","slider_sequence":"29","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":51,\\"boosted_rank\\":29,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01849656153663742\\",\\"cost_per_unit\\":\\"0.41\\",\\"distance\\":\\"5.752071857452393\\",\\"organic_ctr\\":\\"0.16279446688962423\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"741\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18494129","element_type":"listing","rank":29,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/bkc-dive-bandra-kurla-complex/book",
      },
      {
        type: "chain_cta",
        text: "View all outlets",
        clickUrl: "/mumbai/restaurants/bkc-dive?category=2",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [
      {
        image: {
          url: "https://b.zmtcdn.com/MaxSafety/DiningBadge/a9e3f60f5ed05ff69a6bfa5eb87b442e1611745067.png",
          aspect_ratio: 2.66666666667,
        },
        text: "Follows all Max Safety measures for a safe dining experience",
      },
    ],
  },
  {
    type: "restaurant",
    info: {
      resId: 19676350,
      name: "Silly",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/19676350/343c9907bb4f862c314bc391225f9cf3_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/0/19676350/343c9907bb4f862c314bc391225f9cf3_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,568",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "1,568",
            reviewTextSmall: "1,568 Reviews",
            subtext: "1,568 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Delivery",
            color: "",
            ratingV2: "-",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "grey",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹2,500 for two",
      },
      cfo: {
        text: "₹1,000 for one",
      },
      locality: {
        name: "Khar, Mumbai",
        address: "759, 5th Lane, Ram Krishna Nagar, Khar, Mumbai",
        localityUrl: "mumbai/khar-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹2,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 10,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "10% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/silly-khar/info",
      clickActionDeeplink: "",
    },
    distance: "5.9 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19676350","element_type":"listing","rank":30}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/silly-khar/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18617715,
      name: "Plum by Bent Chair",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/18617715/5a65d9cf9c23585ec6d44736df67d87a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/18617715/5a65d9cf9c23585ec6d44736df67d87a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: false,
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,584",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "3,575",
            reviewTextSmall: "3,575 Reviews",
            subtext: "3,575 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "9",
            reviewTextSmall: "9 Reviews",
            subtext: "9 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹3,000 for two",
      },
      cfo: {
        text: "₹1,200 for one",
      },
      locality: {
        name: "Worli, Mumbai",
        address:
          "3rd Floor, Trade View Building Gate 4, Utopia City, Pandurang Budhkar Marg, Worli, Mumbai",
        localityUrl: "mumbai/worli-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/sushi/",
          name: "Sushi",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹3,000 for two",
      },
    },
    order: [],
    gold: {
      instant: 15,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "15% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/plum-by-bent-chair-worli/info",
      clickActionDeeplink: "",
    },
    distance: "3.4 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3610906","bzone":"0","campaign_id":"12504923","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18617715","isNewAd":"34","ad_position":"31","slider_position":"31","slider_sequence":"31","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":147,\\"boosted_rank\\":31,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.01261506989430617\\",\\"cost_per_unit\\":\\"0.71\\",\\"distance\\":\\"3.582566976547241\\",\\"organic_ctr\\":\\"0.04869754412111029\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"110\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18617715","element_type":"listing","rank":31,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/plum-by-bent-chair-worli/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19886844,
      name: "Nxt Lvl",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19886844/be698d75294169accbb2eb4ea885f75e_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/4/19886844/be698d75294169accbb2eb4ea885f75e_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19886844/b5d00f972e226b3de909aff11d192db5_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,048",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.2",
            reviewCount: "1,018",
            reviewTextSmall: "1,018 Reviews",
            subtext: "1,018 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "30",
            reviewTextSmall: "30 Reviews",
            subtext: "30 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,800 for two",
      },
      cfo: {
        text: "₹750 for one",
      },
      locality: {
        name: "Wagle Estate, Thane West, Thane",
        address:
          "Unit 1301, 13th Floor, Centrum Building, Wagle Estate, Thane West, Thane",
        localityUrl: "mumbai/wagle-estate-thane-west-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/continental/",
          name: "Continental",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/bar-food/",
          name: "Bar Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,800 for two",
      },
    },
    order: [],
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/nxt-lvl-wagle-estate-thane-west-thane/info",
      clickActionDeeplink: "",
    },
    distance: "21.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19886844","element_type":"listing","rank":32}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/nxt-lvl-wagle-estate-thane-west-thane/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20297585,
      name: "Cha",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/5/20297585/fcfcf138ea679e84fae37965b963823a_featured_v2.jpg",
        urlWithParams:
          "https://b.zmtcdn.com/data/pictures/5/20297585/fcfcf138ea679e84fae37965b963823a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/5/20297585/3290a2551001df69170ea7f9b34d26ae_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,619",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.5",
            reviewCount: "1,324",
            reviewTextSmall: "1,324 Reviews",
            subtext: "1,324 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "800",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "295",
            reviewTextSmall: "295 Reviews",
            subtext: "295 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹1,500 for two",
      },
      cfo: {
        text: "₹600 for one",
      },
      locality: {
        name: "Palladium Mall, Lower Parel, Mumbai",
        address:
          "S 1-4, Second Floor, Phoenix Mall, Block 1, Senapati Bapat Marg, Lower Parel, Mumbai",
        localityUrl: "mumbai/restaurants/in/palladium-mall-lower-parel",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/asian/",
          name: "Asian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹1,500 for two",
      },
    },
    order: [],
    gold: {
      instant: 20,
      welcome_offer: false,
      gold_offer: true,
      text: "Flat",
      offerValue: "20% OFF",
      isGoldIcon: true,
    },
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/cha-lower-parel/info",
      clickActionDeeplink: "",
    },
    distance: "4.1 km",
    isPromoted: true,
    promotedText: "Promoted",
    trackingData: [
      {
        table_name: "jadtracking",
        payload:
          '{"banner_id":"3608946","bzone":"0","campaign_id":"12502963","category_id":"1","location_type":"city","location_id":"3","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20297585","isNewAd":"34","ad_position":"33","slider_position":"33","slider_sequence":"33","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":277,\\"boosted_rank\\":33,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.010329562223315297\\",\\"cost_per_unit\\":\\"28.3\\",\\"distance\\":\\"4.407259941101074\\",\\"organic_ctr\\":\\"0.038107340001093074\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"64\\"},\\"search_id\\":\\"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c\\",\\"section_name\\":\\"more\\"}","subzone_id":"0"}',
        event_names: {
          tap: '{"action":"click"}',
          impression: '{"action":"impression"}',
          served: '{"action":"serve"}',
        },
      },
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"7b305dbb-e8b7-4f2d-97ff-c1910f6a633c","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20297585","element_type":"listing","rank":33,"metadata":{"is_ad":"true"}}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [
      {
        type: "booking_cta",
        text: "Book a Table",
        clickUrl: "/mumbai/cha-lower-parel/book",
      },
    ],
    promoOffer: "",
    checkBulkOffers: false,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
];

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search Restaurants/Food..."
          />
        </div>
        <div className="restaurants-container">
          {restaurantList.map((res) => {
            return <RestaurantCard key={res.info.resId} restaurantList={res} />;
          })}
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
