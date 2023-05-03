export interface IFilm{
    name:string,
    year:number,
    rate: number,
    img:string
}

export const films:IFilm[]=[
    {
        name : "Thor",
        year : 2010,
        rate : 9.8,
        img : "https://i.pinimg.com/originals/1d/ee/8e/1dee8ee46efef2d2fd4a3cc05273a8d7.jpg"
    },
    {
        name : "Avangers: Infinity war",
        year : 2018,
        rate : 11,
        img : "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1527116930363-2Z46MF5XHLQAFZCHL94D/image-asset.jpeg"
    },
    {
        name : "Avangers: END",
        year : 2019,
        rate : 110,
        img : "https://wallpapercave.com/wp/wp5768177.png"
    },
    {
        name : "Galaxy guardian`s 3",
        year : 2023,
        rate : 1000,
        img : "https://img-s3.onedio.com/id-63841c0d4a37101110b87a96/rev-0/raw/s-d7463dd32b5edb15300bc85b7adbe9c56d64adf5.jpg"
    }
]