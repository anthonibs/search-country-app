export default interface ICountry {
    country: {
        name: IName;
        capital: string;
        region: string;
        subregion: string;
        flags: IFlags;
        population: number;
        continent: string;
    }
}

interface IName {
    common: string;
    official: string;
}

interface IFlags {
    svg: string;
    png: string;
}