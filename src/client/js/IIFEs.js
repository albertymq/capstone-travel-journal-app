import defaultImg from "./media/Default.jpg";
function firstLoad() {
  //import images
  let cityImage = document.getElementById("cityImage");
  cityImage.src = defaultImg;

  //add event listener to Save Button
  document.getElementById("save").addEventListener("click", saveAction);
  document.getElementById("remove").addEventListener("click", removeAction);
}
firstLoad();