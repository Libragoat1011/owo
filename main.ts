input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
let wall1 = game.createSprite(randint(0, 4), 0)
let wall2 = game.createSprite(randint(0, 4), 0)
let wall3 = game.createSprite(randint(0, 4), 0)
let wall4 = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(2500)
    wall1 = game.createSprite(randint(0, 4), 0)
    wall2 = game.createSprite(randint(0, 4), 0)
    wall3 = game.createSprite(randint(0, 4), 0)
    wall4 = game.createSprite(randint(0, 4), 0)
})
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        wall1.change(LedSpriteProperty.Y, 1)
        wall2.change(LedSpriteProperty.Y, 1)
        wall3.change(LedSpriteProperty.Y, 1)
        wall4.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    wall1.delete()
    wall2.delete()
    wall3.delete()
    wall4.delete()
})
basic.forever(function () {
    if (Player.isTouching(wall1) || (Player.isTouching(wall2) || (Player.isTouching(wall3) || Player.isTouching(wall4)))) {
        game.gameOver()
    }
    basic.pause(250)
})
