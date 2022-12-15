export default class Game {
    static lastId: number = 6;

    id: number;
    title?: string;
    genre?: string;
    releaseDate?: Date;
    multiplayer: boolean;
    installed: boolean;

    constructor(title?: string, genre?: string, releaseDate?: Date, multiplayer: boolean = false, installed: boolean = false) {
        this.title = title;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.multiplayer = multiplayer;
        this.installed = installed;

        this.id = Game.updateLastId();
    }

    static updateLastId(id?: number): number {
        return ++this.lastId;
    }
}