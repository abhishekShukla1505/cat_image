const mainContainer = document.getElementById('mainContainer');

function navbar() {
    // making a navigation 
    var navContainer = document.createElement('div');
    navContainer.setAttribute('id', 'navbar');
    navContainer.setAttribute('class', 'navbar');


    let title = document.createElement('span');
    title.innerHTML = " Cat API ";
    title.style.margin = "30px"
    title.style.fontSize = '23px';
    navContainer.appendChild(title);

    let div = document.createElement("div");
    div.setAttribute('id', 'searchBar');
    navContainer.appendChild(div);

    title = document.createElement('span');
    title.innerHTML = "Search";
    div.appendChild(title);

    let input = document.createElement('input');
    input.setAttribute('id', 'inputbox');
    input.setAttribute('name', 'keyword');
    input.setAttribute("name", 'inputname');
    div.appendChild(input);

    let btn = document.createElement('button');
    btn.setAttribute('id', 'btn');
    btn.innerHTML = "Search"
    btn.addEventListener('click', () => {
        showResult();
    })
    div.appendChild(btn);


    let flash = document.createElement("div");
    flash.setAttribute('id', 'flash');
    mainContainer.appendChild(flash);





    mainContainer.appendChild(navContainer);

}




const content = document.createElement("div");
async function contentbody() {

    content.setAttribute('id', 'content');
    mainContainer.appendChild(content);
    try {
        const catApi = "https://cataas.com/api/cats";
        let response = await fetch(catApi);
        let data = await response.json();
        for (let i = 0; i < data.length; i++) {
            let ii = "https://cataas.com/cat/" + data[i].id;
            let t = "";
            data[i].tags.forEach(element => {
                t = element + t;
            });

            imageblock(ii, t);
        }


    } catch (error) {
        alert(error)
    }
}

function imageblock(ii, t) {

    let imageContainer = document.createElement("div");
    imageContainer.setAttribute('id', 'imageContainer');
    content.appendChild(imageContainer);

    let image = document.createElement("div");
    image.setAttribute('id', 'image');
    image.setAttribute("style", "background-image: url(" + ii + "); background-size: cover; background-repeat: no-repeat;");
    imageContainer.appendChild(image);

    let text = document.createElement("span");
    text.innerHTML = t
    text.setAttribute('id', 'text');
    imageContainer.appendChild(text);





}

navbar();
contentbody();
function showResult() {
    let fl = document.getElementById('popout');
    fl.style.display = 'block';

    let newbtn = document.getElementById('closebtn');

      

    let keyword = document.getElementById('inputbox').value;
 
    if (keyword !== '') {
        
        let ur = "https://cataas.com/cat/" + keyword;
        let finaldiv = document.createElement("div");
        finaldiv.setAttribute('id', 'finaldiv');
        finaldiv.setAttribute("style", "background-image: url(" + ur + "); background-size: cover; background-repeat: no-repeat;");
        document.getElementById("popbox").appendChild(finaldiv);
    }
    else {
        alert("enter any keyword");
    }

    
    newbtn.addEventListener('click', () => {
        document.getElementById('finaldiv').remove();
        document.getElementById('popout').style.display = 'none';


    })



}





