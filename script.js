let houses ={};
window.addEventListener('load', async (event) =>{
  console.log(houses);
  const api = `https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json`;
   let result = await fetch(api)
              .then(res=> res.json());
  console.log(result);
  houses = result.houses;
  //const clans = document.querySelector('#clan-list')
  const clans = document.querySelector('#clans');
  for(let i=0;i<houses.length;i++){
    let {name} = houses[i];
    let option = document.createElement("OPTION");
    option.innerText = name;
    option.setAttribute("value",name); 
    option.setAttribute("id",i); 
    clans.appendChild(option);
  }
  let house=houses[0];
  for(let i=0;i<house.people.length;i++){
    const {description,image,name,wikiLink} = house.people[i];
    const child = createCard(house.people[i]);
    peopleList.appendChild(child);
  }
});

const clanList = document.getElementById('clans');
const peopleList = document.getElementById('people-list');

clanList.addEventListener('change', (e) => {
  let value = clanList.value;
   console.log(peopleList.value);
  if(peopleList.firstChild){
    peopleList.textContent = '';
  }
  let house;
  for(let i=0;i<houses.length;i++){
    let {name} = houses[i];
    if(name===value)
      house = houses[i];
  }
  //console.log(house.people);
  for(let i=0;i<house.people.length;i++){
    const child = createCard(house.people[i]);
    peopleList.appendChild(child);
  }
  //console.log(house);
});

const createCard =({description,image,name,wikiLink})=>{
  console.log(name);
  let div = document.createElement("DIV");
  let imgDiv = document.createElement("DIV");
  let img = document.createElement("IMG");
  let para = document.createElement("P");
  let anchor = document.createElement("A");
  let link = document.createTextNode("More");
  let title = document.createElement("H2");
  anchor.setAttribute("href", wikiLink);
  anchor.appendChild(link);
  img.setAttribute("src", image);
  img.setAttribute("alt", name); 
  title.innerText = name;
  let len = name.length+description.length;
  para.innerText = len<40?description:`${description.substring(0,30)}....`;
  imgDiv.setAttribute("class","img-container")
  imgDiv.appendChild(img);
  div.setAttribute("class","people-card");
  div.appendChild(imgDiv);
  div.appendChild(title);
  div.appendChild(para);
  div.appendChild(anchor);
  return div;
}




