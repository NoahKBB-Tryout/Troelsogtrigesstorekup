namespace SpriteKind {
    export const Itemfed = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Trige.vy == 0) {
        Trige.vy = -150
    }
})
info.player2.onScore(10, function () {
    game.setGameOverEffect(true, effects.clouds)
    game.setGameOverMessage(true, "Player 2 Wins!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Food2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    Trige.sayText("Ow, wrong color ")
})
info.onScore(10, function () {
    game.setGameOverEffect(true, effects.clouds)
    game.setGameOverMessage(true, "Player 1 WINS!")
    game.gameOver(true)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Troels.vy == 0) {
        Troels.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    Trige.sayText("i need 10 pinks before Troels")
})
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
info.onLifeZero(function () {
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverMessage(false, "Player 2 (Troels) Wins!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    sprites.destroy(otherSprite)
    Troels.sayText("Ow, wrong color")
})
info.player2.onLifeZero(function () {
    game.setGameOverEffect(false, effects.splatter)
    game.setGameOverMessage(false, "Player 1 (Trige) Wins!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    sprites.destroy(otherSprite)
    Troels.sayText("I need 10 blues before Trige")
})
let centerY2 = 0
let centerX2 = 0
let CoinBlue: Sprite = null
let Coin: Sprite = null
let Troels: Sprite = null
let Trige: Sprite = null
let centerY = 0
let centerX = 0
info.setLife(3)
info.player2.setLife(3)
info.setScore(0)
info.player2.setScore(0)
tiles.placeOnTile(Trige, tiles.getTileLocation(20, 20))
tiles.placeOnTile(Troels, tiles.getTileLocation(50, 20))
scene.setBackgroundColor(9)
scene.centerCameraAt(70, 200)
tiles.setCurrentTilemap(tilemap`level3`)
Troels = sprites.create(img`
    ................
    ................
    ................
    ......fff.......
    .....fdddf......
    ....fdddddf.....
    ...fdffdffdf....
    ..ffff1f1ffff...
    ...fffffffff....
    ...fdddddddf....
    ....fd111df.....
    .....fdddf......
    ......fff.......
    .......f........
    .......f........
    ......111.......
    ......fff.......
    ..1ff11111ff1...
    .f11fffffff11f..
    .ff..11111..ff..
    .....fffff......
    .....11111......
    .....fffff......
    .....11111......
    .....fffff......
    ......fff.......
    .....fffff......
    ....fffffff.....
    ...ffff.ffff....
    ...fff...fff....
    ..fff.....fff...
    .fff.......fff..
    `, SpriteKind.Player)
Trige = sprites.create(img`
    ................................
    .............5555...............
    ............55d555..............
    ...........5dddd555.............
    ..........55bfbbfb55............
    ..........55b1bb1b55............
    ..........5.dddddd.5............
    ..........c.332233.c............
    ..........5333333335............
    .........535333333535...........
    ........dd3333333333dd..........
    .......ddd3333333333ddd.........
    ......bbd.3333333333.dbb........
    .......bb.3333333333.bb.........
    ..........3333333333............
    ...........3fc33fc3.............
    `, SpriteKind.Player2)
controller.player2.moveSprite(Troels, 100, 0)
controller.moveSprite(Trige, 100, 0)
Trige.ay = 350
Troels.ay = 350
Trige.sayText("Im P1 (Trige)")
Troels.sayText("Im P2 (Troels)")
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    Coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f 3 3 3 3 1 1 1 f f . . 
        . . f f 3 1 1 3 3 3 3 1 3 f f . 
        . f f 3 3 1 3 3 3 3 3 3 3 3 f f 
        . . f f 3 3 3 3 3 3 3 3 3 f f . 
        . . . f f 3 3 3 3 3 3 3 f f . . 
        . . . . f f 3 3 1 1 3 f f . . . 
        . . . . . f f 3 1 3 f f . . . . 
        . . . . . . f f 3 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . f . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile6`)) {
    CoinBlue = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f 9 9 9 9 9 1 1 f f . . 
        . . f f 9 9 6 6 9 6 6 1 9 f f . 
        . f f 9 9 6 6 8 6 8 6 6 9 9 f f 
        . . f f 9 9 6 8 8 8 6 9 9 f f . 
        . . . f f 1 9 6 8 6 9 9 f f . . 
        . . . . f f 9 9 6 9 9 f f . . . 
        . . . . . f f 9 9 1 f f . . . . 
        . . . . . . f f 9 f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . f . . . . . . . 
        `, SpriteKind.Food2)
    tiles.placeOnTile(CoinBlue, value2)
    tiles.setTileAt(value2, assets.tile`transparency16`)
}
forever(function () {
    centerX2 = (Trige.x + Troels.x) / 2
    centerY2 = (Trige.y + Troels.y) / 2
    scene.centerCameraAt(centerX2, centerY2)
})
