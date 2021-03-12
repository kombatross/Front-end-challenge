const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';


async function name_albums() {
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    const entry = feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var titles = choice['im:name'].label;
        document.getElementById("Titles_place1").innerHTML += '<li> <a href=#' + titles + '>' + titles + ' <br> <br> ';
        document.getElementById("Titles_place").innerHTML += '<a name=' + titles + '>'+ titles + '<br> <br> <div id="Photo_place'+[i]+'"></div>  <div class="dropdown-divider"></div> ';    }
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
        document.getElementById("Photo_place"+[i]).innerHTML += '<img src="'+photos+'">';
        console.log(photos);

    }
}
photo_albums();


