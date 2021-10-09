const removeAction = (e) => {
  console.log("remove button action");
  alert("Your Trip Removed!");
  //testing Axios function
  Client.getApiKey();
};
export { removeAction };
