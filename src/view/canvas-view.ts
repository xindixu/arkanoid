// Types
import { Ball } from "~/objects/ball"
import { Brick } from "~/objects/brick"
import { Paddle } from "~/objects/paddle"

class CanvasView {
  canvas: HTMLCanvasElement

  private context: CanvasRenderingContext2D | null

  private infoDisplay: HTMLObjectElement | null

  private scoreDisplay: HTMLObjectElement | null

  private start: HTMLObjectElement | null

  constructor(canvasName: string) {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement
    this.context = this.canvas.getContext("2d")
    this.infoDisplay = document.querySelector("#info")
    this.scoreDisplay = document.querySelector("#score")
    this.start = document.querySelector("#start")
  }

  clear(): void {
    const { width, height } = this.canvas
    this.context?.clearRect(0, 0, width, height)
  }

  initStartButton(startFunction: (_: CanvasView) => void): void {
    this.start?.addEventListener("click", () => startFunction(this))
  }

  drawScore(score: number): void {
    if (this.scoreDisplay) {
      this.scoreDisplay.innerHTML = `${score}`
    }
  }

  drawInfo(text: string): void {
    if (this.infoDisplay) {
      this.infoDisplay.innerHTML = text
    }
  }

  drawObject(object: Ball | Brick | Paddle): void {
    if (!object) {
      return
    }

    const { image, pos, width, height } = object
    this.context?.drawImage(image, pos.x, pos.y, width, height)
  }

  drawBricks(bricks: Brick[]): void {
    bricks.forEach((brick) => this.drawObject(brick))
  }
}

export default CanvasView
