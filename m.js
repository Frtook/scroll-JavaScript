window.onload = () => {
  for (let i = 0; i < 20; i++) {
    myPage(i + 1);
  }
  let myUp = document.querySelector("#btn");
  let myScroll = document.querySelector("#scroll");
  myScroll.onclick =()=>{
    setInterval(() => {
      scrollBy({
        top: 100,
        behavior: "smooth",
      });
    }, 2000)
  };
  myUp.onclick = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.onscroll = () => {
    if (scrollY >= 500) {
      myUp.style.display = "block";
    } else {
      myUp.style.display = "none";
    }
  };
  document.addEventListener("click", (e) => {
    if(e.target.id!=="scroll"){
      clearInterval(1)
    }
  });
};

const myPage = (number) => {
  let myDiv = document.createElement("div");
  let myP = document.createElement("p");
  myDiv.style.cssText = `
background-color:#eee;
`;
  myP.style.cssText = `
text-align:center;
font-size:30px;
padding:20px
`;
  if (number % 3 === 0) {
    myP.style.color = "red";
  }
  myP.innerHTML = `The New Text ${number}`;
  myDiv.appendChild(myP);
  document.body.appendChild(myDiv);
};