import { Wizard } from "../../wizard/class/wizard"

export class Objects {

    id: number = 0
    name: string = ""
    info: string = ""
    picture: string = ""
    isDeathHollow: boolean = false
    isHorocruxe: boolean = false
    isWander: boolean = false
    isOtherMagicObject: boolean = false
    isQuiddich: boolean = false
    owner: Wizard[]
}