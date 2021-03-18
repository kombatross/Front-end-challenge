let dataStore = null;

const getData = async () => {
    dataStore = fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json').then(x => x.json());
}

async function name_albums() {
    const data = await dataStore;
    const entry = data.feed.entry;
    for (i = 0; i < 100; i++) {
        const choice = mapToChoice(i, entry);
        document.getElementById("Titles_place1").innerHTML += '<li> <a href=#' + choice.title + '>' + choice.title + ' - ' + choice.artist + ' <br> <br> ';
        document.getElementById("Titles_place").innerHTML += getTitlePlace(choice, i);
    }
}

const getTitlePlace = ({title, artist, release, link, price}, i) => `
    <div class= "hey d-flex justify-content-between ">
        <div class=" col-8">
            <a name=${title}><b>${(i + 1)} - ${title}</b> - ${artist} <br> Release Date: ${release}</a> 
        </div>
        <a role="button" class="button btn bg-dark text-white" href="${link}" target=blank>Buy ${price}</a> 
        <a class="photos mr-2 col-2 order-first animated fadeIn" href="${link}"> 
            <div class= "photos mr-2 col-2 order-first animated fadeIn " id="Photo_place${[i]}"> </div>
        </a>
    </div> 
    <div class="dropdown-divider"></div >`;

const mapToChoice = (i, entry) => {
    var choice = entry[i];
    var title = choice['im:name'].label;
    var artist = choice['im:artist'].label;
    var release = choice['im:releaseDate'].attributes.label;
    var price = choice['im:price'].label;
    var link = choice.link.attributes.href;

    return { title, artist, release, price, link };
}

async function photo_albums() {
    const data = await dataStore;
    const entry = data.feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var photos = choice['im:image'][1].label;
        document.getElementById("Photo_place" + [i]).innerHTML += '<img class="rounded " src="' + photos + '">';
    }
}

const main = () => {
    getData();
    name_albums();
    photo_albums();
}

main();