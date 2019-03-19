/* TI SLIDESHOW */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

/* "LAND"-DROP-DOWN */

let x, i, j, selElmnt, a, b, c;

/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];

  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {

    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

      /*when an item is clicked, update the original select box,
      and the selected item:*/
      let y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }

          /* teksten til det valgte land vises */

          this.setAttribute("class", "same-as-selected");
          console.log(this);

          this.addEventListener('click', showhide());

          function showhide() {
            console.log("lol");
            div.classList.toggle('visible');
          }

          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

    /*when the select box is clicked, close any other select boxes, and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

  /*a function that will close all select boxes in the document,
  except the current select box:*/
  let x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


/* VISER TEKST */

let div = document.getElementById('newpost');
let elements = document.querySelectorAll('select-items div');

console.log(elements);


/* popup */ 

function openModal(){
    
    let modal = document.getElementById('simplemodal');
    
    modal.style.display = 'block';
}

function closeModal() {
    
   let modal = document.getElementById('simplemodal');
    
    modal.style.display ='none';
    
    
}






















// POP UP NUDGING

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  let modal = document.getElementById('myModal');
  modal.style.display = "block";
  console.log(123);
}

// When the user clicks on <span> (x), close the modal
function close() {
  let modal = document.getElementById('myModal');
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  let modal = document.getElementById('myModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }

// Vis el. skjul password
let inputPass = document.getElementById('pass'),
  icon = document.getElementById('eye');

icon.onclick = function() {

  if (inputPass.className == 'active') {
    inputPass.setAttribute('type', 'text');
    icon.className = 'fa fa-eye';
    inputPass.className = '';

  } else {
    inputPass.setAttribute('type', 'password');
    icon.className = 'fa fa-eye-slash';
    inputPass.className = 'active';
  }
}
