# Core JavaScript Review

## The Hairy Potter

In this exercise, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show. Then you will display the pottery to be sold in the DOM.

## Setup

1. Open your terminal and `cd` to your workspace directory.
1. Clone this project.
1. Once the project is cloned, `cd the-hairy-potter` and then run `npm install`.
1. Once the installations are complete, run the `npm run test` command (_see animation below_). You will see all of the tests for your code - which ones pass, and which ones fail. As soon as you make changes to your code, the tests will run automatically, so keep this terminal window open while you are working on this project. When you need to stop working on it, use the `Ctrl+C` keyboard shortcut to stop the tests from running.
    ![](./jest-initial.gif)


> **Note:** All of the code for this project will be created the `src` directory of the project. Open a new terminal session, and `cd` to the project directory again. Then you can `cd src` to change to that directory in your terminal. To check what's already in the `src` directory, use the `ls` command to see its contents.

## Pushing Your Code

Since you cloned an official NSS repository, you don't have permissions to push code to it. What you need to do is push to your own repository. Part of this assessment includes verifying that you make a minimum of 4 commits and pushes of your code.

1. Go to your Github page.
1. Create a new repository named `hairy-potter`.
1. Copy the connection URL _(remember to make sure you use the SSH format, not HTTPS)_.
1. In your terminal, make sure you are currently in the project directory.
1. Run the command: `git remote remove origin`
1. Run the command: `git remote add origin paste_connection_url_here`


## Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. Shape of the piece of pottery (e.g. "Mug", "Platter")
    1. Weight of the piece (e.g. 1, 5)
    1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
    1. `shape`
    1. `weight`
    1. `height`
    1. `id` _(increment this value each time the function is invoked)_

#### Checking Your Work

In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.


Also look at your terminal window that is running the tests and make sure that the `Pottery object is created with correct properties` test is passing.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

## Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
    1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
    1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
    1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
    1. If the temperature of the kiln is at, or below,  2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

Also look at your terminal window that is running the tests and make sure that the following tests pass.

* `Pottery marked as fired after going in the kiln`
* `Pottery object is cracked when temperature is above 2200`
* `Pottery object is uncracked when temperature is below 2200`

**THEN PUSH YOUR CODE TO GITHUB**

## Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

#### Checking Your Work

In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

Also look at your terminal window that is running the tests and make sure that the following tests pass.

* `Piece is not priced when cracked`
* `Not in array of items to sell when cracked`
* `Piece is priced when not cracked`
* `In array of items to sell when uncracked`
* `Piece has correct price`

**THEN PUSH YOUR CODE TO GITHUB**

## Display the Catalog

Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `potteryList`.

### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
    ```html
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">Mug</h2>
        <div class="pottery__properties">
            Item weighs 3 grams and is 6 cm in height
        </div>
        <div class="pottery__price">
            Price is $20
        </div>
    </section>
    ```
1. Once all pottery objects have been converted to HTML representation strings, update the inner HTML of the `<article>` element with that string.

#### Checking Your Work

In the `main.js` module, invoke the `PotteryList` component function. Make sure your web server is running, and then visit http://localhost:8080 and you should see your uncracked pottery displayed. It should look similiar to this.

![example output](./pottery.png)


Then look at your terminal window that is running the tests and make sure that the following tests pass.

* `Pottery is rendered to DOM`

**THEN PUSH YOUR CODE TO GITHUB**

## Final Results

Once all of your tests pass, this will be the output of the terminal that is running the tests.

![](./jest-test-run.gif)
