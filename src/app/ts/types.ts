export type TCharacterBasicInfo = {
    name: string,
    id: number,
    thumbnail: TThumbail
}

export type TComicsInfo = {
    id: number,
    title: string,
    endYear: number,
    thumbnail: TThumbail,
    dates: Array<{
        type: string,
        date: string
    }>
}

export type TCharacterFullInfo = TCharacterBasicInfo & {
    description: string,
    series: {
        available: number,
    },
    stories:{
        available: number
    },
    comics: {
        available: number
    }
}

export type TThumbail = {
    path: string,
    extension: string
}

export type THeroImage = {
    hero: {
        thumbnail: TThumbail,
        name: string
    },
    comics: Array<{thumbnail: TThumbail}>
}
