# capstone-travel-journal-app

*API used*
This App use 3 APIs, weatherbit, GeoNames and Pixabay

*How to use*
Input your trip info and click "Save Trip" button
the picture related to the destination will be fetched from Pixabay,
trip info will be saved in journal section
city info will be fetched from GeoNames API
weather forcast of the departing date will be fetched from weatherbit.

*Stand out Points*
1. Add end date and display length of trip.
2. Allow the user to remove the trip.
3. Weather forecast is Dynamicly displayed based on how many days left before departure

***Jest test issue solution***
There is a IIFE function saved in /src/client/js/IIFE.js which I used to loading images and adding eventlistener to buttons. This IIFE function caused Jest test importing problem. Please black out that IIFE funtion when reviewing my Jest Test and use "NPM test"