import { Vector } from "~/types"

class Brick {
  private _image = new Image()

  private _width: number

  private _height: number

  private _position: Vector

  private _energy: number

  constructor(
    private _width: number,
    private _height: number,
    private _position: Vector,
    private _energy: number,
    imageSrc: string
  ) {
    this._width = _width
    this._height = _height
    this._position = _position
    this._energy = _energy
    this._image.src = imageSrc
  }

  get width(): number {
    return this._width
  }

  get height(): number {
    return this._height
  }
}

export default Brick
