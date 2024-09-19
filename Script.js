const btn = document.querySelector(".rightsidebtn");

const div = document.querySelector(".onwork");
// const div = document.createElement('div');
// div.className = "onwork";

// const smalldiv = document.createElement('div');
// smalldiv.className = "t";
// const im = document.createElement('img');
// im.setAttribute("src","https://cdn-icons-png.flaticon.com/128/8804/8804952.png");
// const pr = document.createElement('p');
// pr.textContent = "Journey Board";
// smalldiv.appendChild(im);
// smalldiv.appendChild(pr);
// div.appendChild(smalldiv);

// const li1 = document.createElement('li');
// li1.textContent = "Explore the world of management";
// li1.className = "dark";
// const li2 = document.createElement('li');
// li2.textContent = "Technical Project Management";
// li1.className = "dark1";
// const li3 = document.createElement('li');
// li3.textContent = "Threadbuild";
// li1.className = "dark1";
// const li4 = document.createElement('li');
// li4.textContent = "Structure your pointers";
// li1.className = "dark1";

// const li5 = document.createElement('li');
// li5.textContent = "4SA Method";
// li1.className = "dark1";


// div.appendChild(li1);
// div.appendChild(li2);div.appendChild(li3);div.appendChild(li4);div.appendChild(li5);
btn.addEventListener("click",(e)=>{
div.classList.remove("onwork");
div.classList.add("onwork1");
})
