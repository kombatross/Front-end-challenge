const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';


async function name_albums() {
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    const entry = feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var titles = (choice['im:name'])
        document.getElementById("Titles_place1").innerHTML += '<li> <a href=#"' + titles.label + '">' + titles.label + ' <br> <br> ';
        document.getElementById("Titles_place").innerHTML += titles.label + "<br> <br> <div class='dropdown-divider'></div>";
    }





    console.log(titles)
}
name_albums();

async function photo_albums() {
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    const entry = feed.entry;
    for (i = 0; i < 100; i++) {
        var choice = entry[i];
        var photos = (choice['im:image']);
        document.getElementById("Photo_place").innerHTML += "<img src=" + photos.label + ">";

    }


}