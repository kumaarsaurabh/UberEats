import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image:
    "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: "$$",
  reviews: 1500,
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

export default function About(props) {
  const { name, image, reviews, rating, price, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • ${rating}⭐ (${reviews}+)`;

  return (
    <View>
      {/*Reataurant Image*/}
      <RestaurantImage image={image} />
      {/*Restaurant Title*/}
      <RestaurantName name={name} />
      {/*Restaurant Description*/}
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {" "}
    {props.name}{" "}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "600",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
