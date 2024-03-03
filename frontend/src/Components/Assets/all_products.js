import dog_toy_1 from "./dog-toy-1.jpg";
import dog_toy_2 from "./dog-toy-2.jpg";
import dog_toy_3 from "./dog-toy-3.jpg";
import dog_toy_4 from "./dog-toy-4.jpg";
import dog_toy_5 from "./dog-toy-5.jpg";

import cat_toy_1 from "./cat-toy-1.jpg";
import cat_toy_2 from "./cat-toy-2.jpg";
import cat_toy_3 from "./cat-toy-3.jpg";
import cat_toy_4 from "./cat-toy-4.jpg";
import cat_toy_5 from "./cat-toy-5.jpg";

import dog_food_1 from "./dog-food-1.jpg";
import dog_food_2 from "./dog-food-2.jpg";
import dog_food_3 from "./dog-food-3.jpg";
import dog_food_4 from "./dog-food-4.jpg";
import dog_food_5 from "./dog-food-5.jpg";

import cat_food_1 from "./cat-food-1.jpg";
import cat_food_2 from "./cat-food-2.jpg";
import cat_food_3 from "./cat-food-3.jpg";
import cat_food_4 from "./cat-food-4.jpg";
import cat_food_5 from "./cat-food-5.jpg";

import dog_apparel_1 from "./dog-cloth-1.jpg";
import dog_apparel_2 from "./dog-cloth-2.jpg";
import dog_apparel_3 from "./dog-cloth-3.jpg";
import dog_apparel_4 from "./dog-cloth-4.jpg";
import dog_apparel_5 from "./dog-cloth-5.jpg";

import cat_apparel_1 from "./cat-apparel-1.jpg";
import cat_apparel_2 from "./cat-apparel-2.jpg";
import cat_apparel_3 from "./cat-apparel-3.jpg";
import cat_apparel_4 from "./cat-apparel-4.jpg";
import cat_apparel_5 from "./cat-apparel-5.jpg";

import bird_toy_1 from "./bird-toy-1.jpg";
import bird_toy_2 from "./bird-toy-2.jpg";
import bird_toy_3 from "./bird-toy-3.jpg";
import bird_toy_4 from "./bird-toy-4.jpg";
import bird_toy_5 from "./bird-toy-5.jpg";

import bird_food_1 from "./bird-food-1.jpg";
import bird_food_2 from "./bird-food-2.jpg";
import bird_food_3 from "./bird-food-3.jpg";
import bird_food_4 from "./bird-food-4.jpg";
import bird_food_5 from "./bird-food-5.jpg";

import bird_apparel_1 from "./bird-apparel-1.jpg";
import bird_apparel_2 from "./bird-apparel-2.jpg";
import bird_apparel_3 from "./bird-apparel-3.jpg";
import bird_apparel_4 from "./bird-apparel-4.jpg";
import bird_apparel_5 from "./bird-apparel-5.jpg";

import pharmacy_product_1 from "./pharmacy1.jpg";
import pharmacy_product_2 from "./pharmacy2.jpg";
import pharmacy_product_3 from "./pharmacy3.jpg";
import pharmacy_product_4 from "./pharmacy4.jpg";
import pharmacy_product_5 from "./pharmacy5.jpg";
import pharmacy_product_6 from "./pharmacy6.jpg";
import pharmacy_product_7 from "./pharmacy7.jpg";
import pharmacy_product_8 from "./pharmacy8.jpg";
import pharmacy_product_9 from "./pharmacy9.jpg";
import pharmacy_product_10 from "./pharmacy10.jpg";
import pharmacy_product_11 from "./pharmacy11.jpg";
import pharmacy_product_12 from "./pharmacy12.jpg";

let all_products = [
  {
    id: 1,
    name: "Bouncy Rubber Fetch Ball",
    petCategory: "dog",
    itemCategory: "toys",
    desc: "A bouncy rubber ball that adds excitement to fetch games. Its unpredictable bounce keeps your dog engaged, making fetch more challenging and enjoyable.",
    price: 12,
    image: dog_toy_2,
    rating: "3.9/5",
  },

  {
    id: 2,
    name: "Interactive Squeaky Ball",
    petCategory: "dog",
    itemCategory: "toys",
    desc: "An engaging squeaky ball that keeps dogs entertained. Made from soft materials, it's gentle on your pet's teeth and perfect for games of fetch and catch.",
    price: 10,
    image: dog_toy_4,
    rating: "4.5/5",
  },
  {
    id: 3,
    name: "Colorful Rubber Squeaker",
    petCategory: "dog",
    itemCategory: "toys",
    desc: "A vibrant rubber squeaker ball that adds fun to playtime. The bright colors capture your dog's attention, and the squeaky sound enhances the play experience.",
    price: 10,
    image: dog_toy_3,
    rating: "4.6/5",
  },
  {
    id: 4,
    name: "Tough Tug-of-War Rope",
    petCategory: "dog",
    itemCategory: "toys",
    desc: "A robust rope toy designed for interactive tug-of-war games. It helps strengthen your dog's teeth and provides a bonding activity between you and your pet.",
    price: 18,
    image: dog_toy_5,
    rating: "4.7/5",
  },
  {
    id: 5,
    name: "Durable Chew Bone",
    petCategory: "dog",
    itemCategory: "toys",
    desc: "A long-lasting chew toy designed for aggressive chewers. This bone-shaped toy promotes dental health and provides hours of entertainment for your furry friend.",
    price: 15,
    image: dog_toy_1,
    rating: "4/5",
  },
  {
    id: 6,
    name: "Catnip Scented Mouse",
    petCategory: "cat",
    itemCategory: "toys",
    desc: "A scented mouse toy infused with high-quality catnip. The delightful aroma of catnip makes this toy irresistible for cats. Provides mental and physical stimulation.",
    price: 9,
    image: cat_toy_1,
    rating: "4/5",
  },
  {
    id: 7,
    name: "Rolling Cat Toy with Catnip",
    petCategory: "cat",
    itemCategory: "toys",
    desc: "A rolling toy designed with a hidden compartment for catnip. Cats enjoy chasing and rolling this toy, releasing the enticing scent of catnip. Promotes active play and exercise.",
    price: 11,
    image: cat_toy_5,
    rating: "3.8/5",
  },
  {
    id: 8,
    name: "Plush Mouse with Rattle",
    petCategory: "cat",
    itemCategory: "toys",
    desc: "A plush mouse toy with a built-in rattling mechanism. The gentle rattling sound captivates your cat's attention, encouraging interactive play. Soft and safe for hours of entertainment.",
    price: 10,
    image: cat_toy_3,
    rating: "3.9/5",
  },
  {
    id: 9,
    name: "Catnip Infused Play Mouse",
    petCategory: "cat",
    itemCategory: "toys",
    desc: "A small play mouse infused with natural catnip. Perfect for batting, tossing, and carrying around. The catnip scent enhances your cat's playtime experience, making it more engaging.",
    price: 8,
    image: cat_toy_2,
    rating: "4/5",
  },
  {
    id: 10,
    name: "Interactive Cat Wand",
    petCategory: "cat",
    itemCategory: "toys",
    desc: "An interactive wand toy with feathers and bells. Engage your cat in interactive play sessions, encouraging them to jump, chase, and swat. Provides mental and physical exercise.",
    price: 12,
    image: cat_toy_4,
    rating: "5/5",
  },
  {
    id: 11,
    name: "Premium Dog Food",
    petCategory: "dog",
    itemCategory: "food",
    desc: "High-quality dog food made with natural ingredients. Provides essential nutrients for your dog's overall health and well-being. Promotes a shiny coat, strong bones, and a healthy digestive system.",
    price: 20,
    image: dog_food_1,
    rating: "4.5/5",
  },
  {
    id: 12,
    name: "Grain-Free Dog Food",
    petCategory: "dog",
    itemCategory: "food",
    desc: "A nutritious grain-free dog food formula, suitable for dogs with food sensitivities. Rich in protein and vitamins, promoting energy and vitality. Supports a healthy immune system.",
    price: 25,
    image: dog_food_2,
    rating: "4.7/5",
  },
  {
    id: 13,
    name: "Organic Dog Chow",
    petCategory: "dog",
    itemCategory: "food",
    desc: "Certified organic dog food made from natural, non-GMO ingredients. Free from artificial preservatives and fillers. Ensures a balanced diet for your dog's optimal health.",
    price: 30,
    image: dog_food_4,
    rating: "4.8/5",
  },
  {
    id: 14,
    name: "Senior Dog Diet",
    petCategory: "dog",
    itemCategory: "food",
    desc: "Specially formulated dog food for senior dogs. Contains joint-supporting ingredients and reduced calorie content. Supports aging dogs' mobility and maintains a healthy weight.",
    price: 22,
    image: dog_food_3,
    rating: "4.6/5",
  },
  {
    id: 15,
    name: "Puppy Nutrition Blend",
    petCategory: "dog",
    itemCategory: "food",
    desc: "Nutrient-rich puppy food formula tailored for growing puppies. Supports brain development, muscle growth, and immune system health. Provides a balanced diet for your adorable puppy.",
    price: 18,
    image: dog_food_5,
    rating: "4.9/5",
  },
  {
    id: 16,
    name: "Gourmet Cat Feast",
    petCategory: "cat",
    itemCategory: "food",
    desc: "Delicious gourmet cat food made with real meat and natural ingredients. Irresistible taste that cats love. Provides essential nutrients for your cat's overall health and vitality.",
    price: 15,
    image: cat_food_3,
    rating: "4.7/5",
  },
  {
    id: 17,
    name: "Grain-Free Salmon Cat Food",
    petCategory: "cat",
    itemCategory: "food",
    desc: "Nutrient-rich cat food with real salmon, free from grains and fillers. Supports a healthy coat, strong muscles, and a well-functioning digestive system. Ideal for cats with food sensitivities.",
    price: 18,
    image: cat_food_2,
    rating: "4.6/5",
  },
  {
    id: 18,
    name: "Organic Cat Delight",
    petCategory: "cat",
    itemCategory: "food",
    desc: "Certified organic cat food made from high-quality, non-GMO ingredients. Provides a balanced diet for your cat's optimal health. Free from artificial colors and flavors.",
    price: 22,
    image: cat_food_1,
    rating: "4.8/5",
  },
  {
    id: 19,
    name: "Weight Management Cat Food",
    petCategory: "cat",
    itemCategory: "food",
    desc: "Specially formulated cat food to support weight management and a healthy metabolism. Helps cats maintain an ideal weight while providing essential nutrients. Supports overall well-being.",
    price: 20,
    image: cat_food_4,
    rating: "4.5/5",
  },
  {
    id: 20,
    name: "Kitten Growth Formula",
    petCategory: "cat",
    itemCategory: "food",
    desc: "Nutrient-dense cat food designed for growing kittens. Supports healthy growth, strong bones, and a shiny coat. Provides essential vitamins and minerals for kittens' development.",
    price: 24,
    image: cat_food_5,
    rating: "4.9/5",
  },
  {
    id: 21,
    name: "Cozy Dog Sweater",
    petCategory: "dog",
    itemCategory: "apparel",
    desc: "Warm and cozy dog sweater made from soft, knitted fabric. Perfect for chilly days and nights. Provides comfort and style for your furry friend.",
    price: 18,
    image: dog_apparel_1,
    rating: "4.6/5",
  },
  {
    id: 22,
    name: "Waterproof Dog Raincoat",
    petCategory: "dog",
    itemCategory: "apparel",
    desc: "Durable and waterproof dog raincoat to keep your pet dry during rainy walks. Features adjustable straps and reflective strips for added safety. Lightweight and easy to clean.",
    price: 25,
    image: dog_apparel_2,
    rating: "4.8/5",
  },
  {
    id: 23,
    name: "Doggy Bow Tie Collar",
    petCategory: "dog",
    itemCategory: "apparel",
    desc: "Stylish dog collar with a detachable bow tie. Adds a touch of elegance to your dog's look for special occasions. Made from high-quality materials for durability and comfort.",
    price: 12,
    image: dog_apparel_5,
    rating: "4.7/5",
  },
  {
    id: 24,
    name: "Dog Hoodie Jacket",
    petCategory: "dog",
    itemCategory: "apparel",
    desc: "Trendy dog hoodie jacket with a front pocket and hood. Provides warmth and a fashionable look. Suitable for casual outings and outdoor activities. Easy to put on and take off.",
    price: 20,
    image: dog_apparel_4,
    rating: "4.5/5",
  },
  {
    id: 25,
    name: "Dog Sunglasses",
    petCategory: "dog",
    itemCategory: "apparel",
    desc: "Cool and stylish dog sunglasses to protect your pet's eyes from the sun's harmful UV rays. Features adjustable straps for a secure fit. Makes your dog look adorable and protects their eyes.",
    price: 15,
    image: dog_apparel_3,
    rating: "4.9/5",
  },
  {
    id: 26,
    name: "Cat Collar with Bell",
    petCategory: "cat",
    itemCategory: "apparel",
    desc: "Adjustable cat collar with a charming bell. Adds a playful touch to your cat's appearance. Made from soft and durable materials for your cat's comfort. Suitable for indoor and outdoor use.",
    price: 10,
    image: cat_apparel_1,
    rating: "4.7/5",
  },
  {
    id: 27,
    name: "Cat Harness and Leash Set",
    petCategory: "cat",
    itemCategory: "apparel",
    desc: "Comfortable cat harness with a matching leash. Allows you to take your cat for a stroll while ensuring their safety. Adjustable straps for a secure and snug fit. Ideal for supervised outdoor adventures.",
    price: 18,
    image: cat_apparel_2,
    rating: "4.8/5",
  },
  {
    id: 28,
    name: "Cat Sweater Vest",
    petCategory: "cat",
    itemCategory: "apparel",
    desc: "Adorable cat sweater vest made from soft, knitted fabric. Keeps your cat warm and stylish during colder days. Features a cozy turtleneck design. Perfect for indoor lounging or casual outings.",
    price: 15,
    image: cat_apparel_3,
    rating: "4.6/5",
  },
  {
    id: 29,
    name: "Cat Bow Tie Collar",
    petCategory: "cat",
    itemCategory: "apparel",
    desc: "Charming cat collar with a detachable bow tie. Adds a touch of sophistication to your cat's appearance. Made from soft and lightweight materials. Suitable for special occasions and photo shoots.",
    price: 12,
    image: cat_apparel_4,
    rating: "4.9/5",
  },
  {
    id: 30,
    name: "Cat Sunglasses",
    petCategory: "cat",
    itemCategory: "apparel",
    desc: "Stylish cat sunglasses designed to protect your feline friend's eyes from bright lights. Features UV protection and a comfortable fit. Adds a cool and fashionable look to your cat's ensemble.",
    price: 14,
    image: cat_apparel_5,
    rating: "4.5/5",
  },
  {
    id: 31,
    name: "Colorful Bird Swing",
    petCategory: "bird",
    itemCategory: "toys",
    desc: "Vibrant and interactive bird swing made with colorful wooden beads and bells. Provides entertainment and exercise for your feathered friend. Hangs easily inside the cage for hours of swinging fun.",
    price: 14,
    image: bird_toy_1,
    rating: "4.7/5",
  },
  {
    id: 32,
    name: "Interactive Bird Puzzle Toy",
    petCategory: "bird",
    itemCategory: "toys",
    desc: "Stimulating puzzle toy for birds featuring various compartments and treats. Encourages mental stimulation and problem-solving skills. Keeps your bird entertained and engaged for hours of playtime.",
    price: 20,
    image: bird_toy_3,
    rating: "4.9/5",
  },
  {
    id: 33,
    name: "Chewable Bird Blocks",
    petCategory: "bird",
    itemCategory: "toys",
    desc: "Set of chewable wooden blocks for birds. Helps maintain beak health and prevents boredom. Made from safe and non-toxic materials. Birds can enjoy pecking and gnawing on the colorful blocks.",
    price: 16,
    image: bird_toy_4,
    rating: "4.8/5",
  },
  {
    id: 34,
    name: "Bird Foraging Ball",
    petCategory: "bird",
    itemCategory: "toys",
    desc: "Foraging ball toy for birds filled with hidden treats. Encourages natural foraging behavior and mental stimulation. Birds can roll the ball and discover tasty surprises, promoting physical and mental activity.",
    price: 18,
    image: bird_toy_2,
    rating: "4.6/5",
  },
  {
    id: 35,
    name: "Bird Climbing Ladder",
    petCategory: "bird",
    itemCategory: "toys",
    desc: "Durable and flexible bird climbing ladder made from natural wood and sisal rope. Provides a fun and challenging exercise opportunity for birds. Can be attached vertically or horizontally inside the cage.",
    price: 22,
    image: bird_toy_5,
    rating: "4.5/5",
  },
  {
    id: 36,
    name: "Premium Bird Seed Mix",
    petCategory: "bird",
    itemCategory: "food",
    desc: "High-quality bird seed mix containing a variety of seeds, nuts, and fruits. Provides essential nutrients and energy for different bird species. Promotes healthy plumage and overall well-being.",
    price: 12,
    image: bird_food_1,
    rating: "4.6/5",
  },
  {
    id: 37,
    name: "Pelletized Bird Food",
    petCategory: "bird",
    itemCategory: "food",
    desc: "Nutrient-dense pelletized bird food made with natural ingredients. Formulated to provide a balanced diet for birds. Suitable for various bird species, promoting proper growth and digestion.",
    price: 15,
    image: bird_food_2,
    rating: "4.7/5",
  },
  {
    id: 38,
    name: "Tropical Fruit Blend",
    petCategory: "bird",
    itemCategory: "food",
    desc: "Delicious tropical fruit blend for birds, including dried fruits and berries. Offers a tasty and nutritious treat for your feathered friend. Encourages foraging behavior and provides vitamins and minerals.",
    price: 18,
    image: bird_food_3,
    rating: "4.8/5",
  },
  {
    id: 39,
    name: "Insect Protein Pellets",
    petCategory: "bird",
    itemCategory: "food",
    desc: "Protein-rich bird food pellets made from insect sources. Ideal for insect-eating bird species. Provides essential proteins for muscle development and supports overall avian health.",
    price: 20,
    image: bird_food_4,
    rating: "4.9/5",
  },
  {
    id: 40,
    name: "Nutty Parrot Mix",
    petCategory: "bird",
    itemCategory: "food",
    desc: "Specialized nutty mix for parrots, containing a variety of nuts and seeds. Enriched with vitamins and minerals for parrots' specific dietary needs. Promotes beak health and mental stimulation.",
    price: 22,
    image: bird_food_5,
    rating: "4.5/5",
  },
  {
    id: 41,
    name: "Colorful Bird Hat",
    petCategory: "bird",
    itemCategory: "apparel",
    desc: "Adorable and colorful bird hat with elastic straps for secure fitting. Adds a playful and stylish look to your pet bird. Made from safe and lightweight materials for your bird's comfort.",
    price: 8,
    image: bird_apparel_1,
    rating: "4.6/5",
  },
  {
    id: 42,
    name: "Feathered Bird Cape",
    petCategory: "bird",
    itemCategory: "apparel",
    desc: "Elegant feathered cape for birds, perfect for special occasions and photo shoots. Features soft and lightweight feathers attached to a comfortable base. Your bird will look stunning in this unique cape.",
    price: 15,
    image: bird_apparel_2,
    rating: "4.7/5",
  },
  {
    id: 43,
    name: "Bird Bow Tie Collar",
    petCategory: "bird",
    itemCategory: "apparel",
    desc: "Charming bird collar with a detachable bow tie. Adds a touch of sophistication to your bird's appearance. Easily adjustable for a perfect fit. Suitable for parrots and other medium-sized birds.",
    price: 10,
    image: bird_apparel_3,
    rating: "4.8/5",
  },
  {
    id: 44,
    name: "Tropical Bird Wing Costume",
    petCategory: "bird",
    itemCategory: "apparel",
    desc: "Colorful tropical bird wing costume for birds. Features vibrant feather patterns and easy-to-wear elastic straps. Your bird can flaunt its tropical style during playtime or bird-themed events.",
    price: 12,
    image: bird_apparel_4,
    rating: "4.5/5",
  },
  {
    id: 45,
    name: "Parrot Pirate Hat",
    petCategory: "bird",
    itemCategory: "apparel",
    desc: "Pirate-themed hat for parrots, complete with skull and crossbones. Adds a playful and adventurous look to your parrot's appearance. Adjustable straps ensure a comfortable and secure fit for your feathered friend.",
    price: 14,
    image: bird_apparel_5,
    rating: "4.9/5",
  },
  {
    id: 201,
    name: "Milbemax dog",
    petCategory: "dog",
    itemCategory: "pharmacy",
    desc: "Milbemax worming tablets are suitable for dogs for the prevention of heartworm disease",
    price: 15,
    image: pharmacy_product_1,
    rating: "4/5",
  },
  {
    id: 202,
    name: "Panacur dog and cat",
    petCategory: "dog",
    itemCategory: "pharmacy",
    desc: "Panacur worming paste is a broad spectrum, two-day worming treatment for dogs and cats.",
    price: 10,
    image: pharmacy_product_2,
    rating: "4.5/5",
  },
  {
    id: 203,
    name: "Atopica Capsules for Dogs",
    petCategory: "dog",
    itemCategory: "pharmacy",
    desc: "Atopica is used to treat eczema (chronic atopic dermatitis). This revolutionary medication is prescribed to control this common allergy-related skin disease.",
    price: 12,
    image: pharmacy_product_3,
    rating: "4.3/5",
  },
  {
    id: 204,
    name: "Hydroxyzine HCL",
    petCategory: "dog",
    itemCategory: "pharmacy",
    desc: "Hydroxyzine HCL blocks histamines within the body. During allergic reactions, histamines are the main cause of symptoms.",
    price: 13,
    image: pharmacy_product_4,
    rating: "4.9/5",
  },
  {
    id: 301,
    name: "Advantage cat",
    petCategory: "cat",
    itemCategory: "pharmacy",
    desc: "Advantage spot-on is a flea treatment product that is suitable for the treatment of fleas and flea larvae in cats.",
    price: 10,
    image: pharmacy_product_5,
    rating: "4.6/5",
  },
  {
    id: 302,
    name: "Frontline spray",
    petCategory: "cat",
    itemCategory: "pharmacy",
    desc: "Frontline is a spray for the treatment of fleas in dogs and cats",
    price: 18,
    image: pharmacy_product_6,
    rating: "3.9/5",
  },
  {
    id: 303,
    name: "Revolution Plus for Cats",
    petCategory: "cat",
    itemCategory: "pharmacy",
    desc: "Revolution Plus for Cats prevents Dirofilaria immitis-related heartworm disease. It controls and treats Ancylostoma tubaeforme (intestinal hookworms), and controls and treats Toxocara cati (intestinal roundworms).",
    price: 16,
    image: pharmacy_product_7,
    rating: "4.8/5",
  },
  {
    id: 304,
    name: "Senergy (selamectin) Topical",
    petCategory: "cat",
    itemCategory: "pharmacy",
    desc: "This ingredient is a parasiticide that is safe for use in kittens and cats. It delivers affordable, vet-recommended, and trusted parasite protection year-round, which includes protection against fleas, heartworms, ear mites, ticks, and sarcoptic mange.",
    price: 15,
    image: pharmacy_product_8,
    rating: "4.7/5",
  },
  {
    id: 401,
    name: "Hari Mineral Block Vegetable Bird Supplements",
    petCategory: "bird",
    itemCategory: "pharmacy",
    desc: "HARI Mineral Block provides small birds with a rich source of calcium for strong bones and optimal growth. An assortment of tantalizing dried morsels are embedded within the mineral blocks to encourage birds to scrape and chew keeping their beaks trim and healthy all while providing additional enrichment.",
    price: 18,
    image: pharmacy_product_9,
    rating: "4.7/5",
  },
  {
    id: 402,
    name: "Alive and Well for Birds",
    petCategory: "bird",
    itemCategory: "pharmacy",
    desc: "Keep your pet bird's immune system healthy and strong with the help of Oasis Alive and Well for Birds. This natural probiotic formula includes vitamns and electrolytes to help the immune system to thrive.",
    price: 20,
    image: pharmacy_product_10,
    rating: "4.5/5",
  },
  {
    id: 403,
    name: "The Missing Link Ultimate Avian Formula",
    petCategory: "bird",
    itemCategory: "pharmacy",
    desc: "The Missing Link Avian Color & Shine powder supplement delivers health benefits for all varieties of captive birds. Fresh-ground flaxseed makes up the base of the formula to deliver a healthy balance of Omega fatty acids, fiber and antioxidants.",
    price: 25,
    image: pharmacy_product_11,
    rating: "4.7/5",
  },
  {
    id: 404,
    name: "Hari Mineral Block Dried Apples Bird Supplements",
    petCategory: "bird",
    itemCategory: "pharmacy",
    desc: "HARI Mineral Block provides small birds with a rich source of calcium for strong bones and optimal growth.",
    price: 22,
    image: pharmacy_product_12,
    rating: "4.9/5",
  },
];
export default all_products;
