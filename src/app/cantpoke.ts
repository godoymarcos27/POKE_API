export interface list{
    id: Number
    weight: string
    sprites: any
    name: string
    count: number
    next: string
    previous: string | null
    results: Ipokeresumen[]
}
export interface Ipokeresumen{
    name: string
    url: string
}