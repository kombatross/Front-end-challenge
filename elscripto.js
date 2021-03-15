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
        console.log(category);
        document.getElementById("Titles_place1").innerHTML += '<li> <a href=#' + titles + '>' + titles + ' - ' + artist + ' <br> <br> ';
        document.getElementById("Titles_place").innerHTML += '<a name=' + titles + '> <b>' + titles + '</b> - ' + artist + '<br> Release Date: ' + release + '<div class="d-flex flex-row-reverse justify-content-end" id="Photo_place' + [i] + '"><p></p>  </div><div class="dropdown-divider"></div > ';
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
        var photos = choice['im:image'][2].label;
        document.getElementById("Photo_place" + [i]).innerHTML += '<img src="' + photos + '">';
        console.log(photos);

    }
}
photo_albums();