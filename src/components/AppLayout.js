import React, {useEffect, useLayoutEffect, useState} from "react";

import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import WithLabelResDetails from './WithLabelResDetails';


const restaurantsArray = [
    {
        "type": "restaurant",
        "info": {
            "resId": 18602729,
            "name": "Mahadev Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18602729/1fa9222c14aed940d92bc9002bd7086e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/18602729/1fa9222c14aed940d92bc9002bd7086e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "5,545",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "208",
                        "reviewTextSmall": "208 Reviews",
                        "subtext": "208 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "5,337",
                        "reviewTextSmall": "5,337 Reviews",
                        "subtext": "5,337 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Jail Road, Indore",
                "address": "142, Devi Ahilya Marg, Near Alka Talkies, Jail Road, Indore",
                "localityUrl": "indore/jail-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/mahadev-restaurant-jail-road/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/mahadev-restaurant-jail-road/order",
            "clickActionDeeplink": ""
        },
        "distance": "568 m",
        "isPromoted": true,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18602729\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18821018,
            "name": "Guru Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/18821018/0c344698724cb6aaf7d48b59719401ce_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/18821018/0c344698724cb6aaf7d48b59719401ce_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "4,079",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "81",
                        "reviewTextSmall": "81 Reviews",
                        "subtext": "81 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "3,998",
                        "reviewTextSmall": "3,998 Reviews",
                        "subtext": "3,998 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "HIG-LIG, Indore",
                "address": "16, Block 4, Sukhliya Scheme, Street 33, Pardeshipura, HIG-LIG, Indore",
                "localityUrl": "indore/hig-lig-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "30 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/guru-restaurant-hig-lig/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/guru-restaurant-hig-lig/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18821018\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19565856,
            "name": "Bhartiya Dal Bafala",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19565856/3683c06d34c4527b07c088035532851b_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/6/19565856/3683c06d34c4527b07c088035532851b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "2,757",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "17",
                        "reviewTextSmall": "17 Reviews",
                        "subtext": "17 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "2,740",
                        "reviewTextSmall": "2,740 Reviews",
                        "subtext": "2,740 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹200 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "RNT Marg, Indore",
                "address": "249, 2-B, Near Railway Station, Jhabua Tower Road, RNT Marg, Indore",
                "localityUrl": "indore/rnt-marg-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "26 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/bhartiya-dal-bafala-rnt-marg/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/bhartiya-dal-bafala-rnt-marg/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19565856\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20722623,
            "name": "The pizza Vodka",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20722623/8d55259349a583f56d540b716c249f1a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20722623/8d55259349a583f56d540b716c249f1a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.4",
                "rating_text": "3.4",
                "rating_subtitle": "Average",
                "rating_color": "CDD614",
                "votes": "444",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.4",
                        "reviewCount": "444",
                        "reviewTextSmall": "444 Reviews",
                        "subtext": "444 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Old Palasia, Indore",
                "address": "116, Mahakal Ke June Chal, Old Palasia, Indore",
                "localityUrl": "indore/old-palasia-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "36 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/the-pizza-vodka-old-palasia/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/the-pizza-vodka-old-palasia/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.9 km",
        "isPromoted": true,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20722623\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18748520,
            "name": "Vijayshree Sandwich",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/1401863/930ee0cc8be9a105207904e0979904b3_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/1401863/930ee0cc8be9a105207904e0979904b3_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,460",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "64",
                        "reviewTextSmall": "64 Reviews",
                        "subtext": "64 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "4,396",
                        "reviewTextSmall": "4,396 Reviews",
                        "subtext": "4,396 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Jail Road, Indore",
                "address": "Near Dollar Market, Jail Road, Indore",
                "localityUrl": "indore/jail-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/juices/",
                    "name": "Juices"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/indore/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "24 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/vijayshree-sandwich-jail-road/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/vijayshree-sandwich-jail-road/order",
            "clickActionDeeplink": ""
        },
        "distance": "652 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18748520\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18807543,
            "name": "Shri GK Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18807543/c09d52b2d73fbad0efe49e51c55aa781_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/3/18807543/c09d52b2d73fbad0efe49e51c55aa781_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "8,916",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "252",
                        "reviewTextSmall": "252 Reviews",
                        "subtext": "252 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.5",
                        "reviewCount": "8,664",
                        "reviewTextSmall": "8,664 Reviews",
                        "subtext": "8,664 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "HIG-LIG, Indore",
                "address": "7 & 8, Subhash Nagar Square, Pardeshipura, HIG-LIG, Indore",
                "localityUrl": "indore/hig-lig-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "50 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/shri-gk-restaurant-hig-lig/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/shri-gk-restaurant-hig-lig/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18807543\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "30% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19109080,
            "name": "Karnawat Bhojan Prasadi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/19109080/aa7662bf5a94408508c749c6e831cf20_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/0/19109080/aa7662bf5a94408508c749c6e831cf20_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "1,001",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "14",
                        "reviewTextSmall": "14 Reviews",
                        "subtext": "14 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.8",
                        "reviewCount": "987",
                        "reviewTextSmall": "987 Reviews",
                        "subtext": "987 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.8",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Vijay Nagar, Indore",
                "address": "10 C, Slice C, Scheme 78, AB Road, Near Saumya Mahindra Automobiles, Vijay Nagar, Indore",
                "localityUrl": "indore/vijay-nagar-restaurants"
            },
            "timing": {
                "text": "Opens in 2 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/indore/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "33 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/karnawat-bhojan-prasadi-vijay-nagar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/karnawat-bhojan-prasadi-vijay-nagar/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19109080\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "30% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19308830,
            "name": "Pandit Food Service",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/19308830/e49c48f968750acf19aad311d91d39d9_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/0/19308830/e49c48f968750acf19aad311d91d39d9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "9,756",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "9,756",
                        "reviewTextSmall": "9,756 Reviews",
                        "subtext": "9,756 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹250 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Mangal City Mall, Vijay Nagar, Indore",
                "address": "28, Lower Ground, Mangal City Mall, Vijay Nagar, Indore",
                "localityUrl": "indore/restaurants/in/mangal-city-mall-vijay-nagar"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODhcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/rajasthani/",
                    "name": "Rajasthani"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "67 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/pandit-food-service-vijay-nagar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/pandit-food-service-vijay-nagar/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19308830\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
                    "aspect_ratio": 2.0625
                },
                "text": "Restaurant partner follows WHO protocol"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 1402163,
            "name": "Maa Ki Rasoi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/1402163/87095914a2861d2a801762f985715ecb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/3/1402163/87095914a2861d2a801762f985715ecb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "65.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "1,006",
                        "reviewTextSmall": "1,006 Reviews",
                        "subtext": "1,006 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "64.3K",
                        "reviewTextSmall": "64.3K Reviews",
                        "subtext": "64.3K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹700 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Sudama Nagar, Indore",
                "address": "Gopur Square, Sudama Nagar, Indore",
                "localityUrl": "indore/sudama-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/indore/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "37 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/maa-ki-rasoi-sudama-nagar/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/maa-ki-rasoi-sudama-nagar/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"1402163\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20586419,
            "name": "La Pino'z Pizza",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/19911261/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/19911261/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "613",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "4 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "609",
                        "reviewTextSmall": "609 Reviews",
                        "subtext": "609 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹450 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "Ranjeet Hanuman, Indore",
                "address": "252, Usha Nagar Extension, Ranjeet Hanuman, Indore",
                "localityUrl": "indore/ranjeet-hanuman-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/la-pinoz-pizza-ranjeet-hanuman/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/la-pinoz-pizza-ranjeet-hanuman/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20586419\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 1400944,
            "name": "Tinku's",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/4/1400944/84d3ade0f9504e847512a7d8f1a6d995_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/4/1400944/84d3ade0f9504e847512a7d8f1a6d995_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "10.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "620",
                        "reviewTextSmall": "620 Reviews",
                        "subtext": "620 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "9,609",
                        "reviewTextSmall": "9,609 Reviews",
                        "subtext": "9,609 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "YN Road, Indore",
                "address": "570, G-34, City Centre, YN Road, Indore",
                "localityUrl": "indore/yn-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/sandwich/",
                    "name": "Sandwich"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/indore/restaurants/coffee/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/indore/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/tinkus-yn-road/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/tinkus-yn-road/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"1400944\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20035508,
            "name": "Pizza Hut",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/20035508/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/20035508/edc92b9e7877ea851a3d6f1190d1580f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,608",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "82",
                        "reviewTextSmall": "82 Reviews",
                        "subtext": "82 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "1,526",
                        "reviewTextSmall": "1,526 Reviews",
                        "subtext": "1,526 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹100 for one"
            },
            "locality": {
                "name": "South Tukoganj, Indore",
                "address": "Unit FO-13, Fourth Floor, Treasure Island, 11, Tukoganj Main road, Indore",
                "localityUrl": "indore/south-tukoganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/indore/restaurants/italian/",
                    "name": "Italian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹100 for one"
            }
        },
        "order": {
            "deliveryTime": "36 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/indore/pizza-hut-1-south-tukoganj/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/indore/pizza-hut-1-south-tukoganj/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"f0035321-5874-4407-9631-f6c612b3d2d8\",\"location_type\":\"delivery_cell\",\"location_id\":\"4135146085758795776\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20035508\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
]

const AppLayout = () => {
    const [restaurants, setRestaurants] = useState(restaurantsArray);

    useEffect(() => {
        console.log('in useEffect');
    }, []);

    useLayoutEffect(() => {
         fetchData();
    }, [])
    const filterRestaurants = () => {
        setRestaurants(restaurants.filter((res) => +res.info.rating.aggregate_rating > 4));
    }

    const fetchData = async () => {
        const data = restaurantsArray;//await fetch('http://localhost:3000/restaurants');
        console.log(data);
    }

    const ResWithlabel = WithLabelResDetails();
    return (
        <div className="app">
            <button onClick={filterRestaurants}>Top rated restaurants</button>
            <div className="res-container">
                {
                    restaurants.map((restaurant, idx) => {
                        return (<>
                        <Link to={`/restaurant/${restaurant.info.resId}`}>
                            {restaurant.isPromoted ? <ResWithlabel {...restaurant}/> : <Restaurant key={idx} data={restaurant}/>}
                        </Link>
                        </>)
                    })
                }
            </div>
        </div>
    )
}

export default AppLayout;