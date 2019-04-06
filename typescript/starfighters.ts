import {Spacecraft, ContainerShip} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements ContainerShip{

  cargoContainers: number

  constructor() {
    super('hyperdrive')
    this.cargoContainers = 4
  }

  jumpInHyperspace(){
    if (Math.random() >= 0.5) {
    super.jumpInHyperspace()
    }else {
      console.log('Failed to jump into hyperface')
    }
  }
}
