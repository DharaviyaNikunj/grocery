
import Apples from '../assets/Apples.png'; // ← Replace with your actual image path
import Bananas from "../assets/Bananas.png"
import Strawberries from "../assets/Strawberries.png"
import Orange from "../assets/Oranges.png"
import Grapes from "../assets/Grapes.png"
import Spinach from "../assets/Spinach.png"
import BellPeppers from "../assets/BellPeppers.png"
import Tomato from "../assets/Tomatoes.png"
import Papaya from "../assets/Papaya.png"
import DragonFruit from '../assets/Dragon Fruit.png'
import Kiwi from "../assets/Kiwi.png"
import Potato from "../assets/Potato.png"
import LadyFinger from "../assets/LadyFinger.png"
import Cucumber from "../assets/Cucumber.png"
import Onion from "../assets/Onion.png"
import Garlic from "../assets/Garlic.png"
import Yogurt from "../assets/Yogurt.png"
import Ghee from "../assets/Ghee.png"
import CheddarCheese from "../assets/CheddarCheese.png"
import Butter from "../assets/Butter.png"
import Milk from "../assets/Milk.png"
import Cream from "../assets/SourCream.png"
import Paneer from "../assets/Paneer.png"
import IceCream from "../assets/IceCream.png"
import Water from "../assets/Water.png"
import OrangeJuice from "../assets/OrangeJuice.png"
import Coffee from "../assets/Coffee.png"
import Tea from "../assets/Tea.png"
import EnergyDrink from "../assets/EnergyDrink.png"
import CoconutWater from "../assets/CoconutWater.png"
import Cola from "../assets/Cola.png"
import Lassi from "../assets/Lassi.png"
import Cookies from "../assets/Cookies.png"
import Chips from "../assets/PotatoChips.png"
import Nuts from "../assets/MixedNuts.png"
import Granola from "../assets/GranolaBars.png"
import Popcorn from "../assets/Popcorn.png"
import ChocolateBar from "../assets/Chocolate Bar.png"
import TrailMix from "../assets/TrailMix.png"
import Pretzels from "../assets/Pretzels.png"
import Lobster from "../assets/Lobster.png"
import Crab from "../assets/Crab.png"
import Scallops from "../assets/Scallops.png"
import Mussels from "../assets/Mussels.png"
import Oysters from "../assets/Oysters.png"
import KingCrab from "../assets/KingCrab.png"
import Anchovies from "../assets/Anchovies.png"
import SmokehouseMackerel from "../assets/SmokehouseMackerel.png"
import Sourdough from "../assets/SourdoughLoaf.png"
import Brioche from "../assets/BriocheBun.png"
import Baguette from "../assets/Baguette.png"
import BananaBread from "../assets/BananaBread.png"
import ChocolateDonut from "../assets/ChocolateDonut.png"
import Eclair from "../assets/Eclair.png"
import PoundCake from "../assets/PoundCake.png"
import FocacciaBread from "../assets/Focaccia.png"
import LambChops from "../assets/Lamb Chops.png"
import TurkeyBreast from "../assets/Turkey Breast.png"
import VealCutlet from "../assets/Veal Cutlet.png"
import BeefSteak from "../assets/Beef Steak.png"
import DuckBreast from "../assets/Duck Breast.png"
import Ham from "../assets/Ham.png"
import MeatBalls from "../assets/Meatballs.png"
import PorkRibs from "../assets/Pork Ribs.png"
// Categories data
import {
  GiAppleCore,
  GiBroccoli,
  GiMilkCarton,
  GiWineGlass,
  GiPopcorn,
  GiShrimp,
  GiCroissant,
  GiChickenLeg,
  GiGrain
} from 'react-icons/gi';

export const categories = [
    {
    name: 'Grains',
    icon: <GiGrain className="text-red-500 text-2xl" />
 },
  {
    name: 'Fruits',
    icon: <GiAppleCore className="text-red-500 text-2xl" />
 },
  {
    name: 'Vegetables',
    icon: <GiBroccoli className="text-green-100 text-2xl" />
 },
  {
    name: 'Dairy',
    icon: <GiMilkCarton className="text-yellow-400 text-2xl" />
  },
  {
    name: 'Beverages',
    icon: <GiWineGlass className="text-blue-500 text-2xl" />
 },
  {
    name: 'Snacks',
    icon: <GiPopcorn className="text-amber-600 text-2xl" />
 },
  
  {
    name: 'Bakery',
    icon: <GiCroissant className="text-amber-700 text-2xl" />
 },
  
];


// Products data with more items
export const products = [
  // Fruits
  { id: 1, name: ' Apples', price: 50, category: 'Fruits', image: Apples.png },
  { id: 2, name: ' Bananas', price: 96, category: 'Fruits', image: Bananas.png },
  { id: 3, name: 'Sweet Strawberries', price: 45, category: 'Fruits', image: Strawberries.png },
  { id: 4, name: 'Juicy Oranges', price: 12, category: 'Fruits', image: Orange.png },
  { id: 5, name: 'Seedless Grapes', price: 37, category: 'Fruits', image: Grapes.png },
  { id: 6, name: 'Dragon Fruit', price: 55, category: 'Fruits', image: DragonFruit.png },
  { id: 7, name: 'Kiwi', price: 85, category: 'Fruits', image: Kiwi.png },
  { id: 8, name: 'Papaya', price: 12, category: 'Fruits', image: Papaya.png },

  // Vegetables
  { id: 9, name: 'Organic Spinach', price: 75, category: 'Vegetables', image: Spinach.png },
  { id: 10, name: 'Bell Peppers', price: 22, category: 'Vegetables', image: BellPeppers.png },
  { id: 11, name: 'Cherry Tomatoes', price: 74, category: 'Vegetables', image: Tomato.png },
  { id: 12, name: 'Potato', price: 55, category: 'Vegetables', image: Potato.png },
  { id: 13, name: 'Cucumber', price: 22, category: 'Vegetables', image: Cucumber.png },
  { id: 14, name: 'LadyFinger', price: 76, category: 'Vegetables', image: LadyFinger.png },
  { id: 15, name: 'Onion', price: 85, category: 'Vegetables', image: Onion.png },
  { id: 16, name: 'Garlic', price: 56, category: 'Vegetables', image: Garlic.png },


  // Dairy
  { id: 17, name: 'Greek Yogurt', price: 88, category: 'Dairy', image: Yogurt.png },
  { id: 18, name: 'Organic Milk', price: 21, category: 'Dairy', image: Milk.png },
  { id: 19, name: 'Cheddar Cheese', price: 77, category: 'Dairy', image: CheddarCheese.png },
  { id: 20, name: 'Farm Butter', price: 55, category: 'Dairy', image: Butter.png },
  { id: 21, name: 'Sour Cream', price: 99, category: 'Dairy', image: Cream.png },
  { id: 22, name: 'Paneer', price: 125, category: 'Dairy', image: Paneer.png },
  { id: 23, name: 'Vanilla Ice Cream', price: 500, category: 'Dairy', image: IceCream.png },
  { id: 24, name: 'Ghee', price: 55, category: 'Dairy', image: Ghee.png },

  // Beverages
  { id: 25, name: ' Water', price: 55, category: 'Beverages', image: Water.png },
  { id: 26, name: ' Orange Juice', price: 85, category: 'Beverages', image: OrangeJuice.png },
  { id: 27, name: ' Coffee', price: 96, category: 'Beverages', image: Coffee.png },
  { id: 28, name: 'Green Tea', price: 74, category: 'Beverages', image: Tea.png },
  { id: 29, name: 'Energy Drink', price: 94, category: 'Beverages', image: EnergyDrink.png },
  { id: 30, name: 'Coconut Water', price: 29, category: 'Beverages', image: CoconutWater.png },
  { id: 31, name: 'Cola', price: 55, category: 'Beverages', image: Cola.png },
  { id: 32, name: 'Lassi', price: 44, category: 'Beverages', image: Lassi.png },

  // Snacks
  { id: 33, name: 'Chocolate Cookies', price: 66, category: 'Snacks', image: Cookies.png },
  { id: 34, name: 'Potato Chips', price: 88, category: 'Snacks', image: Chips.png },
  { id: 35, name: 'Mixed Nuts', price: 86, category: 'Snacks', image: Nuts.png },
  { id: 36, name: 'Granola Bars', price: 36, category: 'Snacks', image: Granola.png },
  { id: 37, name: 'Popcorn', price: 44, category: 'Snacks', image: Popcorn.png },
  { id: 38, name: 'Pretzels', price: 27, category: 'Snacks', image: Pretzels.png },
  { id: 39, name: 'Trail Mix', price: 47, category: 'Snacks', image: TrailMix.png },
  { id: 40, name: 'Chocolate Bar', price: 10, category: 'Snacks', image: ChocolateBar.png },



  // Seafood
  { id: 41, name: 'Lobster Tail', price: 14, category: 'Seafood', image: Lobster.png },
  { id: 42, name: 'Blue Crab', price: 12, category: 'Seafood', image: Crab.png },
  { id: 43, name: 'Scallops', price: 138, category: 'Seafood', image: Scallops.png },
  { id: 44, name: 'Mussels', price: 555, category: 'Seafood', image: Mussels.png },
  { id: 45, name: 'Oysters', price: 69, category: 'Seafood', image: Oysters.png },
  { id: 46, name: 'King Crab Legs', price: 190, category: 'Seafood', image: KingCrab.png },
  { id: 47, name: 'Anchovies', price: 58, category: 'Seafood', image: Anchovies.png },
  { id: 48, name: 'Smokehouse Mackerel', price: 56, category: 'Seafood', image: SmokehouseMackerel.png },


  // Bakery
  { id: 49, name: 'Sourdough Loaf', price: 47, category: 'Bakery', image: Sourdough.png },
  { id: 50, name: 'Brioche Bun', price: 28, category: 'Bakery', image: Brioche.png },
  { id: 51, name: 'Baguette', price: 25, category: 'Bakery', image: Baguette.png },
  { id: 52, name: 'Banana Bread', price: 39, category: 'Bakery', image: BananaBread.png },
  { id: 53, name: 'Choco Donut', price: 12, category: 'Bakery', image: ChocolateDonut.png },
  { id: 54, name: 'Eclair', price: 29, category: 'Bakery', image: Eclair.png },
  { id: 55, name: 'Pound Cake', price: 33, category: 'Bakery', image: PoundCake.png },
  { id: 56, name: 'Focaccia Bread', price: 48, category: 'Bakery', image: FocacciaBread.png },


  // Meat
  { id: 57, name: 'Lamb Chops', price: 98, category: 'Meat', image: LambChops.png },
  { id: 58, name: 'Turkey Breast', price: 72, category: 'Meat', image: TurkeyBreast.png },
  { id: 59, name: 'Veal Cutlet', price: 10, category: 'Meat', image: VealCutlet.png },
  { id: 60, name: 'Beef Steak', price: 850, category: 'Meat', image: BeefSteak.png },
  { id: 61, name: 'Duck Breast', price: 560, category: 'Meat', image: DuckBreast.png },
  { id: 62, name: 'Ham', price: 860, category: 'Meat', image: Ham.png },
  { id: 63, name: 'Meatballs', price: 900, category: 'Meat', image: MeatBalls.png },
  { id: 64, name: 'Pork Ribs', price: 869, category: 'Meat', image: PorkRibs.png },
];

export const orders = [
    {
      id: "ORD-78901",
      userId: "user-12345",
      date: "2023-06-15",
      deliveryDate: "2023-06-20",
      status: "Delivered",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      total: 124.95,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
     },
      items: [
        {
          id: "item-001",
          name: "Premium Wireless Headphones",
          price: 89.99,
          quantity: 1,
          image: ""
        },
        {
          id: "item-002",
          name: "Phone Case",
          price: 24.99,
          quantity: 2,
          image: ""
        }
      ],
      notes: "Please leave package at the front desk if I'm not home"
    },
    {
      id: "ORD-78902",
      userId: "user-12345",
      date: "2023-06-20",
      deliveryDate: "2023-06-25",
      status: "Processing",
      paymentStatus: "Paid",
      paymentMethod: "PayPal",
      total: 67.50,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
     },
      items: [
        {
          id: "item-003",
          name: "Smart Watch Band",
          price: 19.99,
          quantity: 1,
          image: ""
        },
        {
          id: "item-004",
          name: "Screen Protector",
          price: 11.99,
          quantity: 4,
          image: ""
        }
      ]
    },
    {
      id: "ORD-78903",
      userId: "user-12345",
      date: "2023-06-25",
      deliveryDate: "2023-06-30",
      status: "Shipped",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      total: 42.25,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
      },
      items: [
        {
          id: "item-005",
          name: "USB-C Charging Cable",
          price: 14.99,
          quantity: 2,
          image: ""
        },
        {
          id: "item-006",
          name: "Portable Power Bank",
          price: 29.99,
          quantity: 1,
          image: ""
        }
      ]
    }
  ];