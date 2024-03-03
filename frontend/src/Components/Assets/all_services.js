import vet1_img from "./vet1.jpg";
import vet2_img from "./vet2.jpg";
import vet3_img from "./vet3.jpg";
import vet4_img from "./vet4.jpg";
import vet5_img from "./vet5.jpg";
import vet6_img from "./vet6.jpg";
import vet7_img from "./vet7.jpg";
import vet8_img from "./vet8.jpg";
import vet9_img from "./vet9.jpg";
import vet10_img from "./vet10.jpg";

import train1_img from "./train1.jpg";
import train2_img from "./train2.jpg";
import train3_img from "./train3.jpg";
import train4_img from "./train4.jpg";
import train5_img from "./train5.jpg";
import train6_img from "./train6.jpg";
import train7_img from "./train7.jpg";
import train8_img from "./train8.jpg";
import train9_img from "./train9.jpg";
import train10_img from "./train10.jpg";

import grooming1_img from "./groom1.jpg";
import grooming2_img from "./groom2.jpg";
import grooming3_img from "./groom3.jpg";
import grooming4_img from "./groom4.jpg";
import grooming5_img from "./groom5.jpg";
import grooming6_img from "./groom6.jpg";
import grooming7_img from "./groom7.jpg";
import grooming8_img from "./groom8.jpg";
import grooming9_img from "./groom9.jpg";
import grooming10_img from "./groom10.jpg";

import park1_img from "./park1.jpg";
import park2_img from "./park2.jpg";
import park3_img from "./park3.jpg";
import park4_img from "./park4.jpg";
import park5_img from "./park5.jpg";
import park6_img from "./park6.jpg";
import park7_img from "./park7.jpg";
import park8_img from "./park8.jpg";
import park9_img from "./park9.jpg";
import park10_img from "./park10.jpg";

let all_services = [
  {
    id: 101,
    name: "Dallas Veterinary Clinic",
    category: "treatment",
    desc: "A full-service veterinary clinic in Dallas, providing compassionate care for pets of all kinds.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "dallas",
    address: "123 Main Street, Dallas, TX 75201",
    coords: [32.783991, -96.802903],
    image: vet1_img,
  },
  {
    id: 102,
    name: "Paws and Claws Animal Hospital",
    category: "treatment",
    desc: "Paws and Claws Animal Hospital is dedicated to the health and well-being of your pets. We offer a wide range of veterinary services.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "dallas",
    address: "456 Oak Avenue, Dallas, TX 75202",
    coords: [32.784852, -96.794296],
    image: vet2_img,
  },
  {
    id: 103,
    name: "Healthy Pets Veterinary Center",
    category: "treatment",
    desc: "Healthy Pets Veterinary Center is committed to providing quality and affordable veterinary care for your furry friends.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "dallas",
    address: "789 Elm Street, Dallas, TX 75203",
    coords: [32.760666, -96.801045],
    image: vet3_img,
  },
  {
    id: 104,
    name: "Dallas Pet Dentistry",
    category: "treatment",
    desc: "Specializing in pet dentistry, we ensure your pets have healthy smiles. Your pet's dental health is our top priority.",
    slotsAvailable: true,
    rating: "4.3/5",
    location: "dallas",
    address: "987 Pine Street, Dallas, TX 75204",
    coords: [32.799697, -96.785592],
    image: vet4_img,
  },
  {
    id: 105,
    name: "City Animal Urgent Care",
    category: "treatment",
    desc: "City Animal Urgent Care provides emergency and urgent veterinary services in Dallas. We're here when your pet needs us the most.",
    slotsAvailable: false,
    rating: "4.2/5",
    location: "dallas",
    address: "654 Cedar Street, Dallas, TX 75205",
    coords: [32.813651, -96.79532],
    image: vet5_img,
  },
  {
    id: 106,
    name: "Arlington Animal Clinic",
    category: "treatment",
    desc: "A trusted veterinary clinic in Arlington, dedicated to providing high-quality care for pets and animals of all sizes.",
    slotsAvailable: true,
    rating: "4.6/5",
    location: "arlington",
    address: "Arlington Animal Clinic, Arlington, TX 76010",
    coords: [32.724762, -97.106293],
    image: vet6_img,
  },
  {
    id: 107,
    name: "Pet Wellness Center",
    category: "treatment",
    desc: "Pet Wellness Center offers comprehensive veterinary services in Arlington. Your pet's health is our priority.",
    slotsAvailable: true,
    rating: "4.5/5",
    location: "arlington",
    address: "Pet Wellness Center, Arlington, TX 76016",
    coords: [32.676431, -97.196734],
    image: vet7_img,
  },
  {
    id: 108,
    name: "Arlington Animal Dentistry",
    category: "treatment",
    desc: "Arlington Animal Dentistry specializes in pet dental care, ensuring your pet's oral health is in good hands.",
    slotsAvailable: false,
    rating: "4.2/5",
    location: "arlington",
    address: "Arlington Animal Dentistry, Arlington, TX 76017",
    coords: [32.670419, -97.192136],
    image: vet8_img,
  },
  {
    id: 109,
    name: "Companion Animal Hospital",
    category: "treatment",
    desc: "Companion Animal Hospital is committed to providing compassionate care for pets in Arlington. Your pet is part of our family.",
    slotsAvailable: false,
    rating: "4.0/5",
    location: "arlington",
    address: "Companion Animal Hospital, Arlington, TX 76010",
    coords: [32.741872, -97.090928],
    image: vet9_img,
  },
  {
    id: 110,
    name: "Arlington Pet Care Center",
    category: "treatment",
    desc: "Arlington Pet Care Center offers a wide range of veterinary services and a caring environment for your pets.",
    slotsAvailable: true,
    rating: "4.1/5",
    location: "arlington",
    address: "Arlington Pet Care Center, Arlington, TX 76014",
    coords: [32.716753, -97.095392],
    image: vet10_img,
  },
  {
    id: 111,
    name: "Houston Veterinary Hospital",
    category: "treatment",
    desc: "A state-of-the-art veterinary hospital in Houston, providing comprehensive care for pets of all sizes.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "houston",
    address: "Houston Veterinary Hospital, Houston, TX 77002",
    coords: [29.760427, -95.369804],
    image: vet10_img,
  },
  {
    id: 112,
    name: "Bayou City Pet Clinic",
    category: "treatment",
    desc: "Bayou City Pet Clinic offers a wide range of veterinary services and compassionate care for your pets in Houston, Texas.",
    slotsAvailable: false,
    rating: "4.6/5",
    location: "houston",
    address: "Bayou City Pet Clinic, Houston, TX 77003",
    coords: [29.757097, -95.355014],
    image: vet9_img,
  },
  {
    id: 113,
    name: "Sunset Veterinary Care",
    category: "treatment",
    desc: "Sunset Veterinary Care is dedicated to ensuring the health and well-being of your pets in Houston.",
    slotsAvailable: true,
    rating: "4.4/5",
    location: "houston",
    address: "Sunset Veterinary Care, Houston, TX 77004",
    coords: [29.746818, -95.341728],
    image: vet8_img,
  },
  {
    id: 114,
    name: "Meadowbrook Pet Hospital",
    category: "treatment",
    desc: "Meadowbrook Pet Hospital provides compassionate and comprehensive veterinary care for pets in Houston.",
    slotsAvailable: false,
    rating: "4.2/5",
    location: "houston",
    address: "Meadowbrook Pet Hospital, Houston, TX 77005",
    coords: [29.727979, -95.317405],
    image: vet7_img,
  },
  {
    id: 115,
    name: "City Animal Wellness Center",
    category: "treatment",
    desc: "City Animal Wellness Center is committed to providing high-quality veterinary care and wellness services for pets in Houston.",
    slotsAvailable: true,
    rating: "4.1/5",
    location: "houston",
    address: "City Animal Wellness Center, Houston, TX 77006",
    coords: [29.739235, -95.385372],
    image: vet6_img,
  },
  {
    id: 116,
    name: "Austin Animal Hospital",
    category: "treatment",
    desc: "Austin Animal Hospital is a leading veterinary facility in Austin, dedicated to the health and well-being of your pets.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "austin",
    address: "Austin Animal Hospital, Austin, TX 78701",
    coords: [30.271218, -97.739347],
    image: vet5_img,
  },
  {
    id: 117,
    name: "South Austin Pet Clinic",
    category: "treatment",
    desc: "South Austin Pet Clinic offers comprehensive veterinary care and compassionate services for your pets in Austin, Texas.",
    slotsAvailable: false,
    rating: "4.7/5",
    location: "austin",
    address: "South Austin Pet Clinic, Austin, TX 78702",
    coords: [30.257301, -97.72509],
    image: vet4_img,
  },
  {
    id: 118,
    name: "Austin Pet Dental Care",
    category: "treatment",
    desc: "Austin Pet Dental Care specializes in pet dental health, ensuring your pet's smile is in great hands.",
    slotsAvailable: true,
    rating: "4.4/5",
    location: "austin",
    address: "Austin Pet Dental Care, Austin, TX 78703",
    coords: [30.282083, -97.753787],
    image: vet3_img,
  },
  {
    id: 119,
    name: "Central Austin Veterinary Center",
    category: "treatment",
    desc: "Central Austin Veterinary Center provides a range of veterinary services and wellness care for pets in Austin.",
    slotsAvailable: true,
    rating: "4.3/5",
    location: "austin",
    address: "Central Austin Veterinary Center, Austin, TX 78704",
    coords: [30.245722, -97.768668],
    image: vet2_img,
  },
  {
    id: 120,
    name: "North Austin Pet Wellness",
    category: "treatment",
    desc: "North Austin Pet Wellness offers comprehensive veterinary services and wellness programs for pets in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.2/5",
    location: "austin",
    address: "North Austin Pet Wellness, Austin, TX 78705",
    coords: [30.289062, -97.734864],
    image: vet1_img,
  },
  {
    id: 201,
    name: "Arlington Dog Training Center",
    category: "training",
    desc: "Arlington Dog Training Center specializes in dog obedience and behavior training, ensuring well-behaved pets in Arlington.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "arlington",
    address: "Arlington Dog Training Center, Arlington, TX 76010",
    coords: [32.724762, -97.106293],
    image: train1_img,
  },
  {
    id: 202,
    name: "Pawsitive Pup Training School",
    category: "training",
    desc: "Pawsitive Pup Training School offers positive reinforcement training for puppies and dogs in Arlington, Texas.",
    slotsAvailable: true,
    rating: "4.6/5",
    location: "arlington",
    address: "Pawsitive Pup Training School, Arlington, TX 76016",
    coords: [32.676431, -97.196734],
    image: train2_img,
  },
  {
    id: 203,
    name: "Canine Harmony Academy",
    category: "training",
    desc: "Canine Harmony Academy focuses on harmony between dogs and owners through positive training methods in Arlington.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "arlington",
    address: "Canine Harmony Academy, Arlington, TX 76017",
    coords: [32.670419, -97.192136],
    image: train3_img,
  },
  {
    id: 204,
    name: "Arlington K9 Boot Camp",
    category: "training",
    desc: "Arlington K9 Boot Camp offers intensive training programs to transform your dog into a well-disciplined companion.",
    slotsAvailable: true,
    rating: "4.2/5",
    location: "arlington",
    address: "Arlington K9 Boot Camp, Arlington, TX 76010",
    coords: [32.741872, -97.090928],
    image: train4_img,
  },
  {
    id: 205,
    name: "Bark & Learn Canine Academy",
    category: "training",
    desc: "Bark & Learn Canine Academy focuses on educating dogs and their owners, fostering strong bonds and obedience in Arlington.",
    slotsAvailable: true,
    rating: "4.1/5",
    location: "arlington",
    address: "Bark & Learn Canine Academy, Arlington, TX 76014",
    coords: [32.716753, -97.095392],
    image: train5_img,
  },
  {
    id: 206,
    name: "Houston Canine Academy",
    category: "training",
    desc: "Houston Canine Academy offers comprehensive dog training programs, fostering obedience and strong bonds between dogs and owners in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "houston",
    address: "Houston Canine Academy, Houston, TX 77002",
    coords: [29.760427, -95.369804],
    image: train6_img,
  },
  {
    id: 207,
    name: "Houston Canine Retreat",
    category: "training",
    desc: "A retreat for your canine companions! Houston Canine Retreat offers a serene environment for training and bonding between dogs and their owners in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "houston",
    address: "Houston Canine Retreat, Houston, TX 77002",
    coords: [29.760427, -95.369804],
    image: train7_img,
  },
  {
    id: 208,
    name: "Bayou City Dog Camp",
    category: "training",
    desc: "Unleash the potential in your dogs at Bayou City Dog Camp! Our training programs create well-behaved and happy dogs in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.6/5",
    location: "houston",
    address: "Bayou City Dog Camp, Houston, TX 77003",
    coords: [29.757097, -95.355014],
    image: train8_img,
  },
  {
    id: 209,
    name: "Harmony Canine Training Studio",
    category: "training",
    desc: "Harmony Canine Training Studio is where dogs and their owners find harmony through positive reinforcement training in Houston, Texas.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "houston",
    address: "Harmony Canine Training Studio, Houston, TX 77004",
    coords: [29.746818, -95.341728],
    image: train9_img,
  },
  {
    id: 210,
    name: "Meadowbrook Dog Training Haven",
    category: "training",
    desc: "Your dog's haven for training and obedience! Meadowbrook Dog Training Haven shapes well-disciplined dogs in Houston, Texas.",
    slotsAvailable: false,
    rating: "4.2/5",
    location: "houston",
    address: "Meadowbrook Dog Training Haven, Houston, TX 77005",
    coords: [29.727979, -95.317405],
    image: train10_img,
  },
  {
    id: 211,
    name: "Dallas Dog Training Center",
    category: "training",
    desc: "Unlock your dog's potential at Dallas Dog Training Center! We specialize in positive reinforcement training to create well-behaved dogs in Dallas, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "dallas",
    address: "Dallas Dog Training Center, Dallas, TX 75201",
    coords: [32.783991, -96.802903],
    image: train10_img,
  },
  {
    id: 212,
    name: "Paws and Pups Training School",
    category: "training",
    desc: "Paws and Pups Training School is your partner in shaping obedient and well-mannered dogs in Dallas, Texas.",
    slotsAvailable: true,
    rating: "4.6/5",
    location: "dallas",
    address: "Paws and Pups Training School, Dallas, TX 75202",
    coords: [32.784852, -96.794296],
    image: train1_img,
  },
  {
    id: 213,
    name: "Dallas Canine Harmony Studio",
    category: "training",
    desc: "At Dallas Canine Harmony Studio, we emphasize the harmony between dogs and their owners through positive training methods in Dallas, Texas.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "dallas",
    address: "Dallas Canine Harmony Studio, Dallas, TX 75203",
    coords: [32.760666, -96.801045],
    image: train9_img,
  },
  {
    id: 214,
    name: "Dallas Dog Obedience Institute",
    category: "training",
    desc: "The Dallas Dog Obedience Institute is your path to creating obedient and disciplined dogs in Dallas, Texas.",
    slotsAvailable: false,
    rating: "4.2/5",
    location: "dallas",
    address: "Dallas Dog Obedience Institute, Dallas, TX 75204",
    coords: [32.799697, -96.785592],
    image: train2_img,
  },
  {
    id: 215,
    name: "Dallas Canine Learning Center",
    category: "training",
    desc: "Experience learning and bonding with your dogs at Dallas Canine Learning Center, fostering strong bonds and obedience in Dallas, Texas.",
    slotsAvailable: false,
    rating: "4.1/5",
    location: "dallas",
    address: "Dallas Canine Learning Center, Dallas, TX 75205",
    coords: [32.813651, -96.79532],
    image: train7_img,
  },
  {
    id: 216,
    name: "Austin Dog Training Academy",
    category: "training",
    desc: "Transform your dog with the Austin Dog Training Academy! We specialize in positive reinforcement training to create obedient and well-mannered dogs in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "austin",
    address: "Austin Dog Training Academy, Austin, TX 78701",
    coords: [30.271218, -97.739347],
    image: train3_img,
  },
  {
    id: 217,
    name: "South Austin K9 Training School",
    category: "training",
    desc: "Unlock the potential in your canine companions at the South Austin K9 Training School. Our training programs create disciplined and well-behaved dogs in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "austin",
    address: "South Austin K9 Training School, Austin, TX 78702",
    coords: [30.257301, -97.72509],
    image: train6_img,
  },
  {
    id: 218,
    name: "Austin Canine Obedience Studio",
    category: "training",
    desc: "At the Austin Canine Obedience Studio, we emphasize obedience and harmony between dogs and their owners through positive training methods in Austin, Texas.",
    slotsAvailable: false,
    rating: "4.5/5",
    location: "austin",
    address: "Austin Canine Obedience Studio, Austin, TX 78703",
    coords: [30.282083, -97.753787],
    image: train4_img,
  },
  {
    id: 219,
    name: "Central Austin Dog Training Institute",
    category: "training",
    desc: "The Central Austin Dog Training Institute is dedicated to shaping well-behaved and obedient dogs through positive training in Austin, Texas.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "austin",
    address: "Central Austin Dog Training Institute, Austin, TX 78704",
    coords: [30.245722, -97.768668],
    image: train5_img,
  },
  {
    id: 220,
    name: "North Austin K9 Learning Center",
    category: "training",
    desc: "Experience a learning adventure with your dogs at the North Austin K9 Learning Center, fostering strong bonds and obedience in Austin, Texas.",
    slotsAvailable: false,
    rating: "4.3/5",
    location: "austin",
    address: "North Austin K9 Learning Center, Austin, TX 78705",
    coords: [30.289062, -97.734864],
    image: train1_img,
  },
  {
    id: 301,
    name: "Arlington Paws & Co. Grooming Center",
    category: "grooming",
    desc: "At Arlington Paws & Co. Grooming Center, we pamper your pets with the finest grooming services. Our experienced groomers ensure your furry friends look and feel their best in Arlington, Texas.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "arlington",
    address: "Arlington Paws & Co. Grooming Center, Arlington, TX 76010",
    coords: [32.724762, -97.106293],
    image: grooming1_img,
  },
  {
    id: 302,
    name: "Furry Friends Grooming Studio",
    category: "grooming",
    desc: "Furry Friends Grooming Studio is where your pets receive royal treatment. Our grooming experts offer a range of grooming services to keep your pets stylish in Arlington, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "arlington",
    address: "Furry Friends Grooming Studio, Arlington, TX 76016",
    coords: [32.676431, -97.196734],
    image: grooming2_img,
  },
  {
    id: 303,
    name: "Arlington Pet Spa & Grooming Oasis",
    category: "grooming",
    desc: "Arlington Pet Spa & Grooming Oasis is your pet's sanctuary for grooming. We provide luxurious grooming services that keep your pets looking and feeling great in Arlington, Texas.",
    slotsAvailable: false,
    rating: "4.6/5",
    location: "arlington",
    address: "Arlington Pet Spa & Grooming Oasis, Arlington, TX 76017",
    coords: [32.670419, -97.192136],
    image: grooming3_img,
  },
  {
    id: 304,
    name: "Arlington Bark & Bath Grooming Haven",
    category: "grooming",
    desc: "At Arlington Bark & Bath Grooming Haven, we transform your pets into well-groomed and pampered companions. Our grooming services ensure your pets look their best in Arlington, Texas.",
    slotsAvailable: false,
    rating: "4.5/5",
    location: "arlington",
    address: "Arlington Bark & Bath Grooming Haven, Arlington, TX 76010",
    coords: [32.741872, -97.090928],
    image: grooming4_img,
  },
  {
    id: 305,
    name: "Arlington Grooming Excellence Center",
    category: "grooming",
    desc: "Experience grooming excellence at Arlington Grooming Excellence Center. Our grooming experts ensure your pets are pampered and groomed to perfection in Arlington, Texas.",
    slotsAvailable: true,
    rating: "4.4/5",
    location: "arlington",
    address: "Arlington Grooming Excellence Center, Arlington, TX 76014",
    coords: [32.716753, -97.095392],
    image: grooming5_img,
  },
  {
    id: 306,
    name: "Houston Pet Grooming Paradise",
    category: "grooming",
    desc: "Indulge your pets in the lap of luxury at Houston Pet Grooming Paradise. Our professional groomers provide top-notch grooming services for your furry companions in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "houston",
    address: "Houston Pet Grooming Paradise, Houston, TX 77002",
    coords: [29.760427, -95.369804],
    image: grooming6_img,
  },
  {
    id: 307,
    name: "Bayou City Pet Spa & Grooming Oasis",
    category: "grooming",
    desc: "Bayou City Pet Spa & Grooming Oasis is your pet's oasis for grooming. We offer a wide range of grooming services to keep your pets looking and feeling fantastic in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "houston",
    address: "Bayou City Pet Spa & Grooming Oasis, Houston, TX 77003",
    coords: [29.757097, -95.355014],
    image: grooming7_img,
  },
  {
    id: 308,
    name: "Houston Bark & Bath Pet Grooming Haven",
    category: "grooming",
    desc: "At Houston Bark & Bath Pet Grooming Haven, we transform your pets into well-groomed and pampered companions. Our grooming services ensure your pets look their best in Houston, Texas.",
    slotsAvailable: false,
    rating: "4.6/5",
    location: "houston",
    address: "Houston Bark & Bath Pet Grooming Haven, Houston, TX 77004",
    coords: [29.746818, -95.341728],
    image: grooming8_img,
  },
  {
    id: 309,
    name: "Meadowbrook Pet Grooming Studio",
    category: "grooming",
    desc: "Meadowbrook Pet Grooming Studio offers top-notch grooming services to create stylish and well-groomed pets in Houston, Texas.",
    slotsAvailable: true,
    rating: "4.5/5",
    location: "houston",
    address: "Meadowbrook Pet Grooming Studio, Houston, TX 77005",
    coords: [29.727979, -95.317405],
    image: grooming9_img,
  },
  {
    id: 310,
    name: "Houston Grooming Excellence Center",
    category: "grooming",
    desc: "Experience grooming excellence at Houston Grooming Excellence Center. Our grooming experts ensure your pets are pampered and groomed to perfection in Houston, Texas.",
    slotsAvailable: false,
    rating: "4.4/5",
    location: "houston",
    address: "Houston Grooming Excellence Center, Houston, TX 77006",
    coords: [29.739235, -95.385372],
    image: grooming10_img,
  },
  {
    id: 311,
    name: "Dallas Paws & Co. Pet Grooming Center",
    category: "grooming",
    desc: "At Dallas Paws & Co. Pet Grooming Center, we pamper your pets with the finest grooming services. Our experienced groomers ensure your furry friends look and feel their best in Dallas, Texas.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "dallas",
    address: "Dallas Paws & Co. Pet Grooming Center, Dallas, TX 75201",
    coords: [32.783991, -96.802903],
    image: grooming9_img,
  },
  {
    id: 312,
    name: "Furry Friends Pet Grooming Studio",
    category: "grooming",
    desc: "Furry Friends Pet Grooming Studio is where your pets receive royal treatment. Our grooming experts offer a range of grooming services to keep your pets stylish in Dallas, Texas.",
    slotsAvailable: false,
    rating: "4.7/5",
    location: "dallas",
    address: "Furry Friends Pet Grooming Studio, Dallas, TX 75202",
    coords: [32.784852, -96.794296],
    image: grooming8_img,
  },
  {
    id: 313,
    name: "Dallas Pet Spa & Grooming Oasis",
    category: "grooming",
    desc: "Dallas Pet Spa & Grooming Oasis is your pet's oasis for grooming. We provide luxurious grooming services that keep your pets looking and feeling great in Dallas, Texas.",
    slotsAvailable: false,
    rating: "4.6/5",
    location: "dallas",
    address: "Dallas Pet Spa & Grooming Oasis, Dallas, TX 75203",
    coords: [32.760666, -96.801045],
    image: grooming7_img,
  },
  {
    id: 314,
    name: "Dallas Bark & Bath Pet Grooming Haven",
    category: "grooming",
    desc: "At Dallas Bark & Bath Pet Grooming Haven, we transform your pets into well-groomed and pampered companions. Our grooming services ensure your pets look their best in Dallas, Texas.",
    slotsAvailable: true,
    rating: "4.5/5",
    location: "dallas",
    address: "Dallas Bark & Bath Pet Grooming Haven, Dallas, TX 75204",
    coords: [32.799697, -96.785592],
    image: grooming6_img,
  },
  {
    id: 315,
    name: "Dallas Grooming Excellence Center",
    category: "grooming",
    desc: "Experience grooming excellence at Dallas Grooming Excellence Center. Our grooming experts ensure your pets are pampered and groomed to perfection in Dallas, Texas.",
    slotsAvailable: true,
    rating: "4.4/5",
    location: "dallas",
    address: "Dallas Grooming Excellence Center, Dallas, TX 75205",
    coords: [32.813651, -96.79532],
    image: grooming5_img,
  },
  {
    id: 316,
    name: "Austin Paws & Co. Pet Grooming Center",
    category: "grooming",
    desc: "At Austin Paws & Co. Pet Grooming Center, we pamper your pets with the finest grooming services. Our experienced groomers ensure your furry friends look and feel their best in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.8/5",
    location: "austin",
    address: "Austin Paws & Co. Pet Grooming Center, Austin, TX 78701",
    coords: [30.271218, -97.739347],
    image: grooming4_img,
  },
  {
    id: 317,
    name: "Furry Friends Pet Grooming Studio",
    category: "grooming",
    desc: "Furry Friends Pet Grooming Studio is where your pets receive royal treatment. Our grooming experts offer a range of grooming services to keep your pets stylish in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.7/5",
    location: "austin",
    address: "Furry Friends Pet Grooming Studio, Austin, TX 78702",
    coords: [30.257301, -97.72509],
    image: grooming3_img,
  },
  {
    id: 318,
    name: "Austin Pet Spa & Grooming Oasis",
    category: "grooming",
    desc: "Austin Pet Spa & Grooming Oasis is your pet's oasis for grooming. We provide luxurious grooming services that keep your pets looking and feeling great in Austin, Texas.",
    slotsAvailable: false,
    rating: "4.6/5",
    location: "austin",
    address: "Austin Pet Spa & Grooming Oasis, Austin, TX 78703",
    coords: [30.282083, -97.753787],
    image: grooming2_img,
  },
  {
    id: 319,
    name: "Austin Bark & Bath Pet Grooming Haven",
    category: "grooming",
    desc: "At Austin Bark & Bath Pet Grooming Haven, we transform your pets into well-groomed and pampered companions. Our grooming services ensure your pets look their best in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.5/5",
    location: "austin",
    address: "Austin Bark & Bath Pet Grooming Haven, Austin, TX 78704",
    coords: [30.245722, -97.768668],
    image: grooming1_img,
  },
  {
    id: 320,
    name: "Austin Grooming Excellence Center",
    category: "grooming",
    desc: "Experience grooming excellence at Austin Grooming Excellence Center. Our grooming experts ensure your pets are pampered and groomed to perfection in Austin, Texas.",
    slotsAvailable: true,
    rating: "4.4/5",
    location: "austin",
    address: "Austin Grooming Excellence Center, Austin, TX 78705",
    coords: [30.289062, -97.734864],
    image: grooming10_img,
  },

  {
    id: 401,
    name: "Central Park",
    category: "parks",
    desc: "Central Park is an iconic urban park in the heart of Manhattan, New York City. It offers a beautiful escape from the city's hustle and bustle, with a variety of attractions, open spaces, and recreational opportunities.",
    slotsAvailable: true,
    rating: "4.9/5",
    address: "Central Park, New York, NY 10024",
    coords: [40.785312, -73.9719119],
    location: "newyork",
    image: park1_img,
  },
  {
    id: 402,
    name: "Prospect Park",
    category: "parks",
    desc: "Prospect Park is a historic park in Brooklyn, New York. It features a serene lake, lush greenery, and various recreational facilities. It's a favorite destination for picnics and outdoor activities.",
    slotsAvailable: true,
    rating: "4.7/5",
    address: "Prospect Park, Brooklyn, NY 11238",
    coords: [40.660204, -73.968956],
    location: "newyork",
    image: park2_img,
  },
  {
    id: 403,
    name: "Battery Park",
    category: "parks",
    desc: "Battery Park is a waterfront park in the Financial District of Manhattan. It offers stunning views of the Statue of Liberty and Ellis Island, as well as beautiful gardens and promenades.",
    slotsAvailable: true,
    rating: "4.8/5",
    address: "Battery Park, New York, NY 10004",
    coords: [40.703226, -74.017877],
    location: "newyork",
    image: park3_img,
  },
  {
    id: 404,
    name: "High Line Park",
    category: "parks",
    desc: "High Line Park is an elevated linear park on the west side of Manhattan. It features beautiful gardens, art installations, and unique views of the city. A must-visit for nature and art enthusiasts.",
    slotsAvailable: true,
    rating: "4.7/5",
    address: "High Line Park, New York, NY 10011",
    coords: [40.747119, -74.004264],
    location: "newyork",
    image: park4_img,
  },
  {
    id: 405,
    name: "Greenfield Pet Park",
    category: "parks",
    desc: "Greenfield Pet Park offers a spacious and secure environment for your furry friends to play and socialize. With lush greenery, shaded areas, and designated play zones, it's a paradise for pets and their owners alike.",
    slotsAvailable: true,
    rating: "4.8/5",
    address: "Central Park W & W 86th St, New York, NY 10024",
    coords: [40.785312, -73.9719119],
    location: "newyork",
    image: park5_img,
  },

  {
    id: 406,
    name: "Arlington Park",
    category: "parks",
    desc: "Arlington Park is a peaceful urban park in Arlington, Texas. It offers a serene environment for relaxation, picnics, and outdoor activities.",
    slotsAvailable: true,
    rating: "4.7/5",
    address: "Arlington Park, Arlington, TX 76010",
    coords: [32.724762, -97.106293],
    location: "arlington",
    image: park6_img,
  },
  {
    id: 407,
    name: "Green Valley Park",
    category: "parks",
    desc: "Green Valley Park is a family-friendly park with a playground and picnic areas. It's a great place for families to spend quality time outdoors.",
    slotsAvailable: true,
    rating: "4.5/5",
    address: "Green Valley Park, Arlington, TX 76016",
    coords: [32.676431, -97.196734],
    location: "arlington",
    image: park7_img,
  },
  {
    id: 408,
    name: "Sunnydale Park",
    category: "parks",
    desc: "Sunnydale Park is a small neighborhood park in Arlington, featuring a playground and open grassy areas for outdoor fun.",
    slotsAvailable: false,
    rating: "4.2/5",
    address: "Sunnydale Park, Arlington, TX 76017",
    coords: [32.670419, -97.192136],
    location: "arlington",
    image: park8_img,
  },
  {
    id: 409,
    name: "Riverside Park",
    category: "parks",
    desc: "Riverside Park is a riverside green space in Arlington, Texas, perfect for picnics, nature walks, and enjoying the scenic views along the river.",
    slotsAvailable: false,
    rating: "4.0/5",
    address: "Riverside Park, Arlington, TX 76010",
    coords: [32.741872, -97.090928],
    location: "arlington",
    image: park9_img,
  },
  {
    id: 410,
    name: "Meadowbrook Park",
    category: "parks",
    desc: "Meadowbrook Park offers a large green space for sports and outdoor activities. It's a popular spot for recreational games and community events.",
    slotsAvailable: false,
    rating: "4.1/5",
    address: "Meadowbrook Park, Arlington, TX 76014",
    coords: [32.716753, -97.095392],
    location: "arlington",
    image: park10_img,
  },
  {
    id: 411,
    name: "Dallas Park",
    category: "parks",
    desc: "Dallas Park is a large urban park in the heart of Dallas, Texas. It features a variety of amenities and outdoor spaces for recreation, picnics, and family fun.",
    slotsAvailable: true,
    rating: "4.6/5",
    address: "Dallas Park, Dallas, TX 75201",
    coords: [32.783991, -96.802903],
    location: "dallas",
    image: park10_img,
  },
  {
    id: 412,
    name: "Oak Tree Park",
    category: "parks",
    desc: "Oak Tree Park is a serene and shady park in Dallas, offering a perfect escape from the Texas sun. It's an ideal spot for relaxation and outdoor activities.",
    slotsAvailable: true,
    rating: "4.5/5",
    address: "Oak Tree Park, Dallas, TX 75202",
    coords: [32.784852, -96.794296],
    location: "dallas",
    image: park1_img,
  },
  {
    id: 413,
    name: "Sunset Park",
    category: "parks",
    desc: "Sunset Park is a park with a beautiful view of the Dallas skyline during sunset. It's a popular spot for evening strolls and cityscape photography.",
    slotsAvailable: false,
    rating: "4.3/5",
    address: "Sunset Park, Dallas, TX 75203",
    coords: [32.760666, -96.801045],
    location: "dallas",
    image: park9_img,
  },
  {
    id: 414,
    name: "Meadow View Park",
    category: "parks",
    desc: "Meadow View Park is a family-friendly park in Dallas, featuring a playground and open spaces for sports and picnics.",
    slotsAvailable: false,
    rating: "4.2/5",
    address: "Meadow View Park, Dallas, TX 75204",
    coords: [32.799697, -96.785592],
    location: "dallas",
    image: park2_img,
  },
  {
    id: 415,
    name: "Central Dallas Greenway",
    category: "parks",
    desc: "Central Dallas Greenway is a scenic greenbelt in the heart of the city, offering a peaceful oasis for walking and enjoying nature in an urban setting.",
    slotsAvailable: false,
    rating: "4.1/5",
    address: "Central Dallas Greenway, Dallas, TX 75205",
    coords: [32.813651, -96.79532],
    location: "dallas",
    image: park8_img,
  },
  {
    id: 416,
    name: "Austin Central Park",
    category: "parks",
    desc: "Austin Central Park is a vibrant urban park in the heart of Austin, Texas. It's a gathering place for cultural events, picnics, and outdoor fun.",
    slotsAvailable: true,
    rating: "4.7/5",
    address: "Austin Central Park, Austin, TX 78701",
    coords: [30.267153, -97.74306],
    location: "austin",
    image: park3_img,
  },
  {
    id: 417,
    name: "Lakeside Park",
    category: "parks",
    desc: "Lakeside Park is a serene lakeside park in Austin, offering picturesque views, nature walks, and a tranquil atmosphere.",
    slotsAvailable: true,
    rating: "4.6/5",
    address: "Lakeside Park, Austin, TX 78702",
    coords: [30.262541, -97.719744],
    location: "austin",
    image: park7_img,
  },
  {
    id: 418,
    name: "Sunset Valley Park",
    category: "parks",
    desc: "Sunset Valley Park is a family-friendly park in Austin, featuring playgrounds and open spaces for picnics and sports.",
    slotsAvailable: false,
    rating: "4.4/5",
    address: "Sunset Valley Park, Austin, TX 78703",
    coords: [30.269878, -97.758968],
    location: "austin",
    image: park2_img,
  },
  {
    id: 419,
    name: "Green Hills Park",
    category: "parks",
    desc: "Green Hills Park is a park with lush greenery and shaded areas in Austin. It's a great spot for nature lovers and relaxation.",
    slotsAvailable: false,
    rating: "4.3/5",
    address: "Green Hills Park, Austin, TX 78704",
    coords: [30.243774, -97.765233],
    location: "austin",
    image: park6_img,
  },
  {
    id: 420,
    name: "Central Austin Garden",
    category: "parks",
    desc: "Central Austin Garden is a beautiful urban garden and park, offering a peaceful oasis in the city for meditation and leisurely walks.",
    slotsAvailable: false,
    rating: "4.2/5",
    address: "Central Austin Garden, Austin, TX 78705",
    coords: [30.282241, -97.742144],
    location: "austin",
    image: park1_img,
  },
];

export default all_services;