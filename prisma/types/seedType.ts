export type Year = `20${0|1|2}${0|1|2|3|4|5|6|7|8|9}` | `19${0|1|2|3|4|5|6|7|8|9}${0|1|2|3|4|5|6|7|8|9}`;
export type Month = `0${1|2|3|4|5|6|7|8|9}` | `1${0|1|2}`;
export type Day = `0${1|2|3|4|5|6|7|8|9}` | `${1|2}${0|1|2|3|4|5|6|7|8|9}` | `3${0|1}`;

export type DateString = `${Year}-${Month}-${Day}`;


export interface BlogData {
    id: number,
    title: string,
    content: string,
    author: string,
    publication_date: DateString | Date,
    tags: string[],
    category: string,
    image_url: string,
    views: number,
    likes: number,
    comments: { author: string, text: string }[]
}

export interface BlogDataParsed extends BlogData {
  publication_date: Date,
}
