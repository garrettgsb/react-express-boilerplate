import React from "react";
import {Container} from "react-bootstrap";

import Hero from "../hero";
import PlantList from "../plantList/plantList";


// mock data of plants
const thePlants = [
  {
  id: 4,
  user_id: 1,
  species_id: 4,
  nickname: "Alice",
  is_dead: true,
  cause_of_death: "lack of water",
  common_name: "Spider Plant",
  scientific_name: "Chlorophytum Comosum",
  photo_url: "https://cdn.shopify.com/s/files/1/0108/9460/6436/products/artificial-spider-plant-hanging-basket-nearly-natural-137604.jpg?v=1584171644",
  description: "Despite the creepy-crawly name, the spider plant is among the most popular (and easiest to grow) of all hanging or trailing houseplants. While these exceptionally hardy plants will survive in less than perfect conditions, in perfect conditions they are stunning.",
  watering_instructions: "5-7",
  watering_requirement_rating: 2,
  sunlight_requirement_rating: 2,
  difficulty_rating: 1,
  temperature_requirements: "21-30",
  fertilizer_requirements: "None",
  poison_for_pets: false
  },
  {
  id: 11,
  user_id: 1,
  species_id: 11,
  nickname: "Carter",
  is_dead: true,
  cause_of_death: "neglect",
  common_name: "Chinese Money Plant",
  scientific_name: "Pilea peperomioides",
  photo_url: "https://cdn.shopify.com/s/files/1/0174/7796/products/8D2A1989_2048x2048.jpg?v=1595286173",
  description: "The Pilea peperomioides is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. This flowering perennial in the nettle family (Urticaceae) is native to southern China, growing naturally along the base of the Himalayan mountains.",
  watering_instructions: "7",
  watering_requirement_rating: 3,
  sunlight_requirement_rating: 4,
  difficulty_rating: 2,
  temperature_requirements: "13-30",
  fertilizer_requirements: "Once per month",
  poison_for_pets: false
  },
  {
  id: 12,
  user_id: 1,
  species_id: 12,
  nickname: "Avery",
  is_dead: true,
  cause_of_death: "drowning",
  common_name: "Echeveria",
  scientific_name: "Pilea peperomioides",
  photo_url: "http://www.llifle.com/photos/Echeveria_agavoides_5212_l.jpg",
  description: "Echeverias are one of the most popular types of succulents and are frequently featured in succulent gardens, floral arrangements, terrariums, artwork, and even wedding cakes. Their stunning rosette shape, plump leaves, and large variety of colors give them a striking resemblance to flowers which makes them easy to decorate with. Their unique appearance and low maintenance needs have made Echeverias widely popular.",
  watering_instructions: "14-21",
  watering_requirement_rating: 1,
  sunlight_requirement_rating: 5,
  difficulty_rating: 2,
  temperature_requirements: "15-27",
  fertilizer_requirements: "Once per year in the spring",
  poison_for_pets: false
  },
  {
  id: 5,
  user_id: 1,
  species_id: 5,
  nickname: "Amanda",
  is_dead: false,
  cause_of_death: null,
  common_name: "Boston Fern",
  scientific_name: "Nephrolepis exaltata",
  photo_url: "https://thelittlebotanical.com/wp-content/uploads/2019/03/07_JT_006_1000x1000.jpg",
  description: "The Boston fern, also known as the sword fern, is a popular fern species that grows in many tropical areas around the world. It is also commonly kept as a houseplant, especially because it doesn’t have high sunlight needs",
  watering_instructions: "2-3",
  watering_requirement_rating: 5,
  sunlight_requirement_rating: 3,
  difficulty_rating: 3,
  temperature_requirements: "15-24",
  fertilizer_requirements: "8 weeks",
  poison_for_pets: false
  },
  {
  id: 7,
  user_id: 1,
  species_id: 7,
  nickname: "Ferdinand",
  is_dead: false,
  cause_of_death: null,
  common_name: "Haworthia",
  scientific_name: "Haworthia",
  photo_url: "https://cdn.shopify.com/s/files/1/2097/3287/products/4.00-ozSucculent.ZebraPlant-Haworthiafasciata-count32_2048x@2x.jpg?v=1589641850",
  description: "Haworthia is a delightful little succulent that makes a very attractive small houseplant. These small, low growing plants form rosettes of fleshy green leaves that are generously covered with white, pearly warts or bands, giving them a distinctive appearance.",
  watering_instructions: "14-21",
  watering_requirement_rating: 1,
  sunlight_requirement_rating: 5,
  difficulty_rating: 2,
  temperature_requirements: "21-30",
  fertilizer_requirements: "Twice per year",
  poison_for_pets: false
  },
  {
  id: 6,
  user_id: 1,
  species_id: 6,
  nickname: "Joey",
  is_dead: false,
  cause_of_death: null,
  common_name: "African Violet",
  scientific_name: "Saintpaulia Ionantha",
  photo_url: "https://brownsflorist.com/wp-content/uploads/2020/04/browns-10-scaled-e1590596735884.jpg",
  description: "African violets are one of the most popular houseplants and for good reason. These compact, low-growing plants flower several times a year, and they are available in a multitude of leaf forms and colors. Do not be put off by their reputation for difficulty: providing you follow a few simple rules, African violets should thrive indoors.",
  watering_instructions: "2",
  watering_requirement_rating: 5,
  sunlight_requirement_rating: 2,
  difficulty_rating: 4,
  temperature_requirements: "15-24",
  fertilizer_requirements: "2 weeks",
  poison_for_pets: false
  },
  {
  id: 8,
  user_id: 1,
  species_id: 8,
  nickname: "Courtney",
  is_dead: false,
  cause_of_death: null,
  common_name: "Pothos",
  scientific_name: "Epipremnum aureum",
  photo_url: "https://s7d1.scene7.com/is/image/terrain/58120890_000_a?$zoom2$",
  description: "Pothos is arguably one of the easiest houseplants to grow, even if you are someone who forgets to water your plants often enough. This trailing vine, native to the Solomon Islands in the South Pacific, boasts pointed, heart-shaped green leaves that are sometimes variegated with white, yellow, or pale green striations.",
  watering_instructions: "7-14",
  watering_requirement_rating: 2,
  sunlight_requirement_rating: 1,
  difficulty_rating: 1,
  temperature_requirements: "18-24",
  fertilizer_requirements: "Optional, can be done twice per month",
  poison_for_pets: true
  },
  {
  id: 9,
  user_id: 1,
  species_id: 9,
  nickname: "Adam",
  is_dead: false,
  cause_of_death: null,
  common_name: "Fiddle-Leaf Fig",
  scientific_name: "Ficus lyrata",
  photo_url: "https://cb2.scene7.com/is/image/CB2/PottedFiddleLeafFigSHF17",
  description: "The fiddle-leaf fig is a popular indoor specimen plant featuring very large, heavily veined, violin-shaped leaves that grow upright. These plants are native to tropical parts of Africa, where they thrive in very warm and wet conditions. This makes them somewhat challenging for the home grower, who is likely to have trouble duplicating these steamy conditions.",
  watering_instructions: "7 to 10",
  watering_requirement_rating: 3,
  sunlight_requirement_rating: 4,
  difficulty_rating: 5,
  temperature_requirements: "15-30",
  fertilizer_requirements: "2 weeks",
  poison_for_pets: true
  },
  {
  id: 10,
  user_id: 1,
  species_id: 10,
  nickname: "Liz",
  is_dead: false,
  cause_of_death: null,
  common_name: "Monstera",
  scientific_name: "Monstera Deliciosa",
  photo_url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1205923822-612x612-1597694031.jpg",
  description: "Native to the rainforests of Central America, the Monstera deliciosa plant is also known as the tropical split-leaf philodendron. Indoors, the plant grows about two feet high, its leathery, glossy, characteristic split and heart-shaped leaves coming from intricate aerial roots, which can be used for ropes and basket making.",
  watering_instructions: "14",
  watering_requirement_rating: 2,
  sunlight_requirement_rating: 4,
  difficulty_rating: 3,
  temperature_requirements: "18-30",
  fertilizer_requirements: "Optional, can be done twice per month",
  poison_for_pets: true
  }
  ];


export default function Garden(props) {

  return (
    <>
      <Hero
        header="My Garden"
        text="Your current happy family of plants!"
        graveyardButton="true"
      ></Hero>
      <Container>
        <PlantList
          list={thePlants}
        />
      </Container>
    </>
  );
};