// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug-shaped", 3, 5);
let pot = makePottery("circular", 3, 6);
let kettle = makePottery("kettle-shaped", 1, 5);
let bowl = makePottery("bowl", 6, 7);
let cup = makePottery("cup", 1, 2);

// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 2000);
let firePot = firePottery(pot, 2500);
let fireKettle = firePottery(kettle, 2200);
let fireBowl = firePottery(bowl, 1800);
let fireCup = firePottery(cup, 5000);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

