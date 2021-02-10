class Song{
    constructor(title,artist) {
        this.title = title;
        this.artist = artist;
    }
}

const Mysong = new Song ("Bohemian Rhapsody","Queen");
console.log(Mysong.title);

const loveSong = new Song ("Yesterday" , "Beatle");
console.log(loveSong.title);