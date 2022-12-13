// import { ImportProvidersSource } from "@angular/core";

export interface IPoke{
    name: string,
    weight: string,
    id: number,
    sprites:IPokesprite
    // movimientos: Imoves;
}
interface IPokesprite{
    other: Ipokeimg
}
interface Ipokeimg{
    dream_world: Img
}
interface Img{
    front_default: string
}
