const p_cont = document.getElementById("p_cont");
const scont = document.getElementById("scont");
const sfieldcont = document.getElementById("sfieldcont");
var p_num = 10;
var val;
const pnames_arr =[];
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5"

};
const type_arr = Object.keys(colors);
const ptypes_arr=[];
const fetchP = async () => {
    document.getElementById('p_cont').innerHTML = '';
    for(let i = 1; i <= p_num; i++){
            await getP(i);
        }
    document.getElementById('next').hidden = false;

};
const getP = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res  = await fetch(url);
    const pokemon = await res.json();
    createcard(pokemon);
};
function countel(num) {
    sfieldcont.innerHTML ='';
    p_num = num;
    val = num;
    fetchP();
}
countel(10);
function createcard(pokemon) {
    document.getElementById('prev').hidden = p_num <= val;
    const PokEl = document.createElement('div');
    PokEl.classList.add('pokemon');
    const p_type = pokemon.types.map(el => el.type.name);
    const p_stat = pokemon.stats.map(el => el.base_stat);
    const hp = p_stat[0];
    const attack = p_stat[1];
    const defense = p_stat[2];
    const sattack= p_stat[3];
    const sdefense = p_stat[4];
    const speed = p_stat[5];
    const type = type_arr.find(type => p_type.indexOf(type) > -1);
    const ability = pokemon.abilities.map(el => el.ability.name);
    const name = pokemon.name.toUpperCase();
    const color = colors[type];
    const PokInner  = `<style>
#type${pokemon.id}{
align-content: center;
background-color: ${color};
border: 1px ${color};
border-radius: 15%;
padding: 3px;
padding-left: 10px;
padding-right: 10px;
color: #101010;
</style>
<div class="card">
<div class="front">
    <h3 class="name">${name}</h3>
    <div class="icontainer"><img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"></div>
    <div class="info">
    <div>Type: <span id="type${pokemon.id}">${type}</span></div>
    <small id="ab">Abilities: ${ability}</small>
    </div>
    </div>
    <div class="back">
    <div><h2 id="id">#${pokemon.id}</h2>
    <h3 class="name" id="nameback">${name}</h3>
    <span>HP: ${hp}</span><br>
    <span>Attack: ${attack}</span><br>
    <span>Defense: ${defense}</span><br>
    <span>S-Attack: ${sattack}</span><br>
    <span>S-Defense: ${sdefense}</span><br>
    <span>Speed: ${speed}</span><br>
    </div>
    </div></div>`;
    PokEl.innerHTML = PokInner;
    p_cont.appendChild(PokEl);
}
function next() {
    sfieldcont.innerHTML ='';
    p_cont.innerHTML = '';
    const p_num_old = p_num;
    p_num += val;
    getPsc(p_num_old, p_num)
}
const getPsc = async (p_num_old, p_num_new) =>{
    p_num_old +=1;
    for (let i = p_num_old; i <= p_num_new; i++) {
        await getP(i);
    }
};
function prev() {
    sfieldcont.innerHTML ='';
    p_cont.innerHTML = '';
    const p_num_old = p_num-(val*2);
    p_num -= val ;
    getPscb(p_num_old, p_num);
}
const getPscb = async (p_num_old, p_num_new) => {
    for (let i = p_num_old+1; i <= p_num_new; i++) {
        await getP(i);
    }
};
const fetchall= async () =>{
    for(let i = 1; i <= 400; i++){
        await getforarray(i);
    }
};
const getforarray = async id =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res  =  await fetch(url);
    const pokemon = await res.json();
    fillarray(pokemon);
};
function fillarray(pokemoni) {
    const p_type = pokemoni.types.map(el => el.type.name);
    ptypes_arr.push(p_type);
    pnames_arr.push(pokemoni.name);
}
fetchall();
const search = async () => {
    document.getElementById("sfieldcont").innerHTML = '';
    console.log(pnames_arr);
    var tosearch = document.querySelector("input").value;
    tosearch_val = parseInt(tosearch);
    const p = isNaN(tosearch);
    if(p === false){
        if(tosearch_val <= 800){
        getPserch(tosearch_val);}
        if(tosearch_val > 800) {
            alert("Ого, столько покемонов у нас нет(")
        }
    }
    else{
        for(let i=0; i<pnames_arr.length; i++)
        if(pnames_arr[i].indexOf(tosearch)>-1){
            getPserch(i+1)
        }
    }
    console.log(tosearch);
    if (tosearch === "") {
        sfieldcont.hidden = true;
    }
    ret(tosearch)
};
function filterbytype(type) {
    sfieldcont.innerHTML = '';
    p_cont.innerHTML ='';
    document.getElementById('next').hidden = true;
    document.getElementById('prev').hidden = true;

    typese = document.getElementsByClassName("types");
    typese.checked = false;
    for(let i=0; i<ptypes_arr.length; i++)
        if(ptypes_arr[i].indexOf(type)>-1){
            getPserch(i+1)
        }
}
function ret() {
    var tosearch = document.querySelector("input").value;
    if(tosearch === ""){
    sfieldcont.innerHTML='';
    }

}
const getPserch = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res  = await fetch(url);
    const pokemon = await res.json();
    pokemonS(pokemon);
};
function pokemonS(pokemon) {
    const PokEl = document.createElement('div');
    PokEl.classList.add('pokemon');
    // PokEl.setAttribute("onclick", `getClick(${pokemon.id})`)
    // PokEl.setAttribute("id", `Element${pokemon.id}`)
    const p_type = pokemon.types.map(el => el.type.name);
    const p_stat = pokemon.stats.map(el => el.base_stat);
    const hp = p_stat[0];
    const attack = p_stat[1];
    const defense = p_stat[2];
    const sattack= p_stat[3];
    const sdefense = p_stat[4];
    const speed = p_stat[5];
    const type = type_arr.find(type => p_type.indexOf(type) > -1);
    const ability = pokemon.abilities.map(el => el.ability.name);
    const name = pokemon.name.toUpperCase();
    const color = colors[type];
    const PokInner  = `<style>
#type${pokemon.id}{
align-content: center;
background-color: ${color};
border: 1px ${color};
border-radius: 15%;
padding: 3px;
padding-left: 10px;
padding-right: 10px;
color: #101010;
</style>
<div class="card">
<div class="front">
    <h3 class="name">${name}</h3>
    <div class="icontainer"><img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"></div>
    <div class="info">
    <div>Type: <span id="type${pokemon.id}">${type}</span></div>
    <small id="ab">Abilities: ${ability}</small>
    </div>
    </div>
    <div class="back">
    <div><h2 id="id">#${pokemon.id}</h2>
    <h3 class="name" id="nameback">${name}</h3>
    <span>HP: ${hp}</span><br>
    <span>Attack: ${attack}</span><br>
    <span>Defense: ${defense}</span><br>
    <span>S-Attack: ${sattack}</span><br>
    <span>S-Defense: ${sdefense}</span><br>
    <span>Speed: ${speed}</span><br>
    </div>
    </div></div>`;
    PokEl.innerHTML = PokInner;
    sfieldcont.appendChild(PokEl);
}