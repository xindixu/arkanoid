import { Ball } from "~/objects/ball"
import { Brick } from "~/objects/brick"
import { Paddle } from "~/objects/paddle"

import { CanvasView } from "~/view/canvas-view"

// level and colors
import {
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_STARTX,
  PADDLE_SPEED,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY,
} from "~/setup"

let gameOver = false
let score = 0

function setGameOver(view: CanvasView) {
  view.drawInfo("Game Over!")
  gameOver = true
}

function setGameWon(view: CanvasView) {
  view.drawInfo("Game Won!")
  gameOver = true
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
) {}

function startGame(view: CanvasView) {}

const view = new CanvasView("#playField")
view.initStartButton(startGame)
