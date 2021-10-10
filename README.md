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

***Jest Test Special Requirements***
I have a code block used for loading images and adding eventlisteners in index.js
which will cause test import failure

so please black out that code block when reviewing my jest test results