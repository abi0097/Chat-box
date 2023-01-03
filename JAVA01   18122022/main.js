let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation(); /* first need to create formvalidataion & put it on to the addeventlistener */
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can not be blank"; /* need to show error msg to the user */
    console.log("faliure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData(); /* first need to create acceptData  & put it on to the formvalidataion */
  }
};

let data = [];

let acceptData = () => {
  data["text"] = input.value;
  console.log(data); /* first need to create the  createpost   & put it on to the acceptData */
  createpost();
};

let createpost = () => {
  /* "+"symbol is used to  accept previous Data like (pos1&post2) in result screen*/
  posts.innerHTML += `<div>
      <p>${data.text}</p>

      <span class="option"> 
        <i  onClick="editpost(this)"class="fa fa-pencil-square-o" aria-hidden="true"></i>
        <i onClick="deletepost(this)" class="fa fa-trash" aria-hidden="true">
        </i>
      </span>
    </div>
  `; /*data.text comes from => data["text"]  need to remove box & semicolon */
  /*copy the div from the html post1 file => to change the data in to eveything work like template  */

  input.value = "";
};
let deletepost = (e) => {
  e.parentElement.parentElement.remove();
  /*e=editpost name. Parentelement=  mentioned in html <span class="option">&Parentelement is=<p>post1</p>  */
};

let editpost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  /*e=editpost name. Parentelement= above mentiond <span class="option">&Previouselementsibling is= <p>${data.text}</p> */

  e.parentElement.parentElement.remove(); /*it is used to remove data from stored place */
};
