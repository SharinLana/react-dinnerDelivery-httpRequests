# Dinner Delivery (React.js)

> This web application is an imitation of an online food delivery store. The user can select meals from the menu list, put it in the cart, enter some data for the delivery (name, address, email, etc) and submit the order. All data (incoming and outcoming) connected to Firebase via http requests.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- http requests and Firebase (fetching and posting data) asynchronously;
- creating custom reusable components (e.g. UserInput.js);
- the React hooks: useState(), useEffect(), useContext(), useReducer(), useRef();
- creating a custom hook useValidate() to validate the data entered by the user in the order form;
- ReactDOM.createPortal() to display the modal window;
- the React props (data transfer from parents to children and vice versa);
- JavaScript logic and methods (filter(), findIndex(), map(), Object.entries(), forEach(), reduce(), concat(), trim(), regex, ternary operator, if/else statement, spread operator, etc);
- Google fonts;
- CSS modules;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/react-dinnerDelivery-httpRequests.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

## Languages, frameworks, libraries, packages, tools and technologies:

- React.js
- JavaScript
- CSS modules
- Firebase
- react-dom

## Functionalities:

- fetching the menu items from Firebase asynchronously and displaying them on the screen;
- informing users about errors when loading meal data;
- adding selected meals to the cart;
- dynamic display of the number of selected items in the cart;
- dynamic change in the cost of the order as some items are added or removed from the cart;
- adding and removing items directly in the cart;
- order form, where the user can enter data to receive the order;
- inactive form when the cart is empty;
- sending the order data (selected meals and the user entered data) to Firebase and store it there ('POST' method);
- simple validation of user-entered data (no empty fields, full name, correct email and 5-digit zip code);
- notifications of an incorrectly filled inputs;
- ban on submitting the invalid form;
- crearing the form and cart after submitting the order successfully;
- displaying components on demand (e.g. hide/reveal on a button click);
- responsive design (mobile adaptation);
