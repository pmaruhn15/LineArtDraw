//Create variable to count groups of paths in each svg
const index = 0;

//Get all svgs in index.html
const svgs = document.querySelectorAll(".svg");

//Hide all paths and start draw animation for each svg
svgs.forEach((svg) => {
  svg.addEventListener("load", function () {
    //get the inner DOM of svg
    var svgDoc = svg.contentDocument;
    // get the inner paths
    var groups = svgDoc.querySelectorAll("g");
    // hide all paths
    for (let i = 0; i < groups.length; i++) {
      for (let index_p = 0; index_p < groups[i].children.length; index_p++) {
        groups[i].children[index_p].style.display = "none";
      }
    }
    // start drawing function
    renderIcon(-1, groups);
  });
});

function renderIcon(index, groups) {
  index += 1;
  if (index >= groups.length) {
    index = 0;
    setTimeout(() => {
      renderIcon(-1, groups);
    }, 5000);
  } else {
    for (let index_p = 0; index_p < groups[index].children.length; index_p++) {

      let path = groups[index].children[index_p];
      let length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition = "none";
      path.style.display = "block";
      // Set up the starting positions
      path.style.strokeDasharray = length + " " + length;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = path.style.WebkitTransition =
        "stroke-dashoffset 2s ease-in-out";
      // Go!
      path.style.strokeDashoffset = "0";

      //Here you can find an explanation how the line draw animation works in general
      // https://css-tricks.com/svg-line-animation-works/

      //Reverse animation after Timeout
      setTimeout(() => {
        path.style.strokeDashoffset = "0";
        path.style.transition = path.style.WebkitTransition =
          "stroke-dashoffset 2s ease-in-out";
        path.style.strokeDashoffset = -length;
      }, 4000); //Delay after which animation is reversed
    }

    //Render next group of paths
    setTimeout(() => {
      renderIcon(index, groups);
    }, 2000); //Delay after which second group auf paths is drawn
  }
}