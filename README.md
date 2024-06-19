# 🥬 Yuca
A stateful grocery store app built with React, React Hooks, & Redux
<br></br>

![Yuca Demo](https://storage.googleapis.com/frankie-esparza-portfolio/gifs/yuca.gif)

## Features 
- View items available for purchase 
- Add items to cart 
- Update quantity of an item in cart
- Purchase all items in the cart 
<br></br>

## Overview
- **Redux Store** 
    - `produce` - list of purchasable items, searchable by `id`
    - `cart` - items currently in the cart, each with an `id` & `qty`
- **React Components** 
    - `Cart` - user's current cart
    - `ProduceDetails` - a particular produce item 
    - `ProduceList` - an array of `ProduceDetails`
- **React Hooks**
    - `useEffect` used to:
        - add all the produce to the produce slice of state in the store when the `App` component first loads
        - open the `Cart` sidebar whenever the `cart` slice of state changes   
    - `useSelector` used:
        - in the `ProduceList` component to get the `produce` slice of state 

## Setup 
- `npm install`
 - `npm start`
<br></br>

## Reference
- **React**
    - **components** - reusable building blocks of an app that contain HTML, JS, & CSS
    - **hooks**  
        - functions that let you "hook into" or "level up" your functions with features from the React state & lifecycle methods
        - they have to be called from the top-level of a component (not within a loop or condition)
        - **useEffect** - allows you to perform "side effects" on components whenever certain dependencies change (e.g. open the cart sidebar whenever the `cart` slice of state changes)
        - **useSelector** - allows you to get data from the store to use in a component (e.g. `ProduceList` grabs the data from the `produce` slice of state)

- **Redux**
    - **store** stores the state of the app, & contains **slices of state** such as `cart` and `produce`
    - **reducers** take the current state & an `action` as arguments and return a new state
    - **action creators** accept a `type` that is the name of the action (e.g. `ADD`) and an optional `payload` 
    needed to perform the action (e.g. `id` of the produce item)

- **Key Steps**
    - Create a Redux **store** using `createStore`, `combineReducers`, `applyMiddleware`, and `compose`, the store has a reducer called `rootReducer`
    - Wrap the React app with the Redux Store `Provider`
    - In development, set up an `enhancer` with `redux-logger` middleware to help with debugging
    - Each slice of state, `produce` and `cart` has a **reducer** and an **action creators** (e.g. `addProduce`)
    - The `+`, `-`, and `like` buttons have click event listeners that call the **action creators** 

- **Debugging** 
    - Download **Redux DevTools**
    - In Chrome DevTools, to see the Redux store:
        - click the **Redux** tab or
        - in the **Console** tab, type `store.getState()`
    - To test functions in the console, you have to attach them to the `window`
