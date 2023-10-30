export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    linkWebPage: string;
    linkImage: string;

    constructor(
        id: number, 
        name: string, 
        channel: string, 
        seasons: number, 
        description: string, 
        linkWebPage: string, 
        linkImage: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.linkWebPage = linkWebPage;
        this.linkImage = linkImage;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getChannel() {
        return this.channel;
    }

    getSeasons() {
        return this.seasons;
    }

    getDescription() {
        return this.description;
    }

    getLinkWebPage() {
        return this.linkWebPage;
    }

    getLinkImage() {
        return this.linkImage;
    }
}
