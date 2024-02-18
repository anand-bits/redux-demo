# Cake Container Component with Redux Integration

This repository contains a React component `CakeContainer` integrated with Redux for managing the state related to cakes. It displays the number of cakes available and provides a button to buy a cake.

## Purpose

The purpose of the code is to demonstrate how to connect a React component to a Redux store, retrieve state from the store, and dispatch actions to update the state.

## Code Explanation

### Imports
- `react`: Imported to create React components.
- `buyCake` action creator: Imported from `../redux/cakes/cakeActions` to dispatch the action for buying a cake.
- `connect` function: Imported from `react-redux` to connect the React component to the Redux store.

### CakeContainer Function Component
- Defines a functional React component named `CakeContainer`.
- Accepts `props` as an argument.
- Renders a `<div>` element containing the number of cakes (`props.numOfCakes`) and a button to buy a cake.
- When the button is clicked, it invokes the `props.buyCake` function.

### mapStateToProps Function
- Maps the Redux store's state to the component's props.
- Returns an object with a property `numOfCakes`, which holds the number of cakes from the Redux store's state.

### mapDispatchToProps Function
- Maps Redux action creators to the component's props.
- Returns an object with a property `buyCake`, which is a function that dispatches the `buyCake` action when called.

### Connect Function
- Connects the `CakeContainer` component to the Redux store.
- It uses `mapStateToProps` to map the Redux store's state to the component's props.
- It uses `mapDispatchToProps` to map Redux action creators to the component's props.
- Finally, it wraps the `CakeContainer` component with the Redux store, enabling it to access the Redux store's state and dispatch actions.

## Usage
- You can use this code as a reference for integrating Redux with React components.
- Ensure that you have Redux and React-Redux installed in your project.
- Modify the `CakeContainer` component and associated Redux files as per your application requirements.

Its was Learning 