const menuData = {
  restaurants: {
    723823: {
      data: {
        cards: [
          // 🔹 Restaurant Info Card
          {
            card: {
              card: {
                info: {
                  id: "1",
                  name: "Spicy Treat",
                  cuisines: ["Indian", "Chinese"],
                  costForTwoMessage: "₹600 for two",
                  avgRating: 4.3,
                  sla: {
                    slaString: "30 mins",
                  },
                },
              },
            },
          },

          // 🔹 Menu Categories Card
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    // ⭐ Starters Category
                    {
                      card: {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "Starters",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "101",
                                  name: "Paneer Tikka",
                                  price: 24900,
                                },
                              },
                            },
                            {
                              card: {
                                info: {
                                  id: "102",
                                  name: "Chicken Wings",
                                  price: 29900,
                                },
                              },
                            },
                          ],
                        },
                      },
                    },

                    // ⭐ Main Course Category
                    {
                      card: {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "Main Course",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "201",
                                  name: "Butter Chicken",
                                  price: 34900,
                                },
                              },
                            },
                            {
                              card: {
                                info: {
                                  id: "202",
                                  name: "Dal Makhani",
                                  price: 19900,
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },

    411453: {
      data: {
        cards: [
          {
            card: {
              card: {
                info: {
                  id: "2",
                  name: "Pizza Palace",
                  cuisines: ["Italian", "Fast Food"],
                  costForTwoMessage: "₹800 for two",
                  avgRating: 4.5,
                  sla: {
                    slaString: "25 mins",
                  },
                },
              },
            },
          },
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    {
                      card: {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "Pizzas",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "301",
                                  name: "Margherita",
                                  price: 19900,
                                },
                              },
                            },
                            {
                              card: {
                                info: {
                                  id: "302",
                                  name: "Farmhouse Pizza",
                                  price: 34900,
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },

    "708017": {
      data: {
        cards: [
          {
            card: {
              card: {
                info: {
                  id: "3",
                  name: "Burger Hub",
                  cuisines: ["American", "Fast Food"],
                  costForTwoMessage: "₹500 for two",
                  avgRating: 4.1,
                  sla: {
                    slaString: "20 mins",
                  },
                },
              },
            },
          },
          {
            groupedCard: {
              cardGroupMap: {
                REGULAR: {
                  cards: [
                    {
                      card: {
                        card: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          title: "Burgers",
                          itemCards: [
                            {
                              card: {
                                info: {
                                  id: "401",
                                  name: "Veggie Burger",
                                  price: 14900,
                                },
                              },
                            },
                            {
                              card: {
                                info: {
                                  id: "402",
                                  name: "Chicken Burger",
                                  price: 19900,
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  },
};

export default menuData;