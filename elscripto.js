const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';


async function name_albums() {
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    const entry = feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var titles = choice['im:name'].label;
        var artist = choice['im:artist'].label;
        var category = choice.category.attributes.label;
        var release = choice['im:releaseDate'].attributes.label;
        var price = choice['im:price'].label;
        var link = choice.link.attributes.href
        document.getElementById("Titles_place1").innerHTML += '<li> <a href=#' + titles + '>' + titles + ' - ' + artist + ' <br> <br> ';
        document.getElementById("Titles_place").innerHTML += '<div class= "hey d-flex justify-content-between "> <div class=" col-8"> <a name=' + titles + '><b>' + (i + 1) + ' - ' + titles + '</b> - ' + artist + '<br> Release Date: ' + release + '</a> </div><a role="button" class="button btn bg-dark text-white" href="' + link + '" target=blank>Buy ' + price + '</a> <div class= "photos mr-2 col-2 order-first animated fadeIn " id="Photo_place' + [i] + '"> </div></div> <div class="dropdown-divider"></div > ';
    }
}
name_albums();

async function photo_albums() {
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    const entry = feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var photos = choice['im:image'][1].label;
        document.getElementById("Photo_place" + [i]).innerHTML += '<img class="rounded " src="' + photos + '">';

    }
}
photo_albums();