enum ActionKind {
    Walking,
    Idle,
    Jumping,
    RunningRight,
    RunningLeft,
    IdleRight,
    IdleLeft
}
namespace SpriteKind {
    export const Exit = SpriteKind.create()
    export const entrance = SpriteKind.create()
    export const SillySLime = SpriteKind.create()
    export const UglySpider = SpriteKind.create()
    export const CoolGhost = SpriteKind.create()
}
function Levels (level: number) {
    scene.setTileMap(Dungeon_Levels[level])
    scene.placeOnRandomTile(Hunter, 13)
    Exit2()
}
// create player
function PLayer () {
    Hunter = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . f 4 4 f . f f . . . f 4 f . . . 
. . . . . . . . . . . . . . . f 4 4 7 f f 7 7 f f f f 4 4 f . . 
. . . . . . . . . . . . . . . f 4 7 7 e 2 e 2 e e 2 2 7 4 f . . 
. . . . . . . . . . . . . . f e 4 7 e 2 e 2 2 2 e e 2 2 4 f . . 
. . . . . . . . . . . . . f e e e e 2 e e 2 2 2 2 e e 2 2 e f . 
. . . . . . . . . . . . f e e e e 2 2 e e 2 2 2 2 e e 2 2 e f . 
. . . . . . . . . . . . f 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 4 4 f . 
. . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . f 4 4 4 4 4 4 4 4 4 4 3 3 4 4 4 4 4 f . 
. . . . . . . . . . . f 4 4 4 4 7 7 9 f f 7 7 1 1 7 9 f f 7 7 f 
. . . . . . . . . . . f 4 4 4 7 7 3 9 f f 7 1 f f 1 9 f f 3 7 f 
. . . . . . . . . . . f 4 4 4 7 3 1 1 1 1 1 1 1 1 1 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 7 3 1 1 1 1 1 1 1 f 1 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 7 3 3 1 1 1 1 f f 1 f 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 4 7 3 3 1 1 1 1 1 1 1 1 1 1 3 3 f 
. . . . . . . . . . . . f 4 4 4 4 7 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . 
. . . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . 
. . . . . . . . . . . . . f 7 7 e e 7 7 e e 7 7 e e 7 7 e e f . 
. . . . . . . . . . . . . 2 f f f f f f f f f f f f f f f f . . 
. . . . . . . . . . . . 2 2 f e e e e e 7 f 7 7 7 f 7 e e f . . 
. . . . . . . . . . . . 2 2 f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . 
. . . . . . . . . . . 2 2 f f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . 
. . . . . . . . . . 2 2 f . f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . f f . . . . f f f . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . f f . . . . . . . f f . . . . . 
`, SpriteKind.Player)
    scene.cameraFollowSprite(Hunter)
    controller.moveSprite(Hunter)
    info.setLife(40)
}
function Level_text (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function Instructon (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function Exit2 () {
    scene.placeOnRandomTile(sprites.create(img`
c f f f f f f f f f f f f f f b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 c 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 c b b b b c 
f 1 1 1 1 c 1 1 1 1 1 1 1 1 1 b 
f 1 1 1 1 c b b b b 1 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 1 1 1 1 1 b 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
f b b b b 1 1 1 1 1 1 1 1 1 1 b 
b c c c c b b b b b b b b b b b 
`, SpriteKind.Exit), 6)
}
// Player looks left
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hunter,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f . . . . . . . f f . . . . . . . . . . . . . . . . . 
. . . f 4 f . . . f f . f 4 4 f . . . . . . . . . . . . . . . . 
. . f 4 4 f f f f 7 7 f f 7 4 4 f . . . . . . . . . . . . . . . 
. . f 4 7 2 2 e e 2 e 2 e 7 7 4 f . . . . . . . . . . . . . . . 
. . f 4 2 2 e e 2 2 2 e 2 e 7 4 e f . . . . . . . . . . . . . . 
. f e 2 2 e e 2 2 2 2 e e 2 e e e e f . . . . . . . . . . . . . 
. f e 2 2 e e 2 2 2 2 e e 2 2 e e e e f . . . . . . . . . . . . 
. f 4 4 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 f . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. f 4 4 4 4 4 3 3 4 4 4 4 4 4 4 4 4 4 f . . . . . . . . . . . . 
f 7 7 f f 9 7 1 1 7 7 f f 9 7 7 4 4 4 4 f . . . . . . . . . . . 
f 7 3 f f 9 1 f f 1 7 f f 9 3 7 7 4 4 4 f . . . . . . . . . . . 
f 3 1 1 1 1 1 1 1 1 1 1 1 1 1 3 7 4 4 4 f . . . . . . . . . . . 
f 3 1 1 1 1 1 f 1 1 1 1 1 1 1 3 7 4 4 4 f . . . . . . . . . . . 
f 3 1 1 1 1 f 1 f f 1 1 1 1 3 3 7 4 4 4 f . . . . . . . . . . . 
f 3 3 1 1 1 1 1 1 1 1 1 1 3 3 7 4 4 4 4 f . . . . . . . . . . . 
. f 3 3 3 3 3 3 3 3 3 3 3 3 4 7 4 4 4 f . . . . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . 
. f 5 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 f . . . . . . . . . . . . 
. f 5 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 f . . . . . . . . . . . . 
. f e e 7 7 e e 7 7 e e 7 7 e e 7 7 f . . . . . . . . . . . . . 
. . f f f f f f f f f f f f f f f f 2 . . . . . . . . . . . . . 
. . f e e 7 f 7 7 7 f 7 e e e e e f 2 2 . . . . . . . . . . . . 
. . f 2 2 5 f 4 4 4 f 5 2 2 2 e e f 2 2 . . . . . . . . . . . . 
. . f 2 2 5 f 4 4 4 f 5 2 2 2 e e f f 2 2 . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f . f 2 2 . . . . . . . . . . 
. . . . f f f . . . . . . f f f . . . . f f . . . . . . . . . . 
. . . . . f f . . . . . . . f f . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f . . . . . . . f f . . . . . . . . . . . . . . . . 
. . . . f 4 f . . . f f . f 4 4 f . . . . . . . . . . . . . . . 
. . . f 4 4 f f f f 7 7 f f 7 4 4 f . . . . . . . . . . . . . . 
. . . f 4 7 2 2 e e 2 e 2 e 7 7 4 f . . . . . . . . . . . . . . 
. . . f 4 2 2 e e 2 2 2 e 2 e 7 4 e f . . . . . . . . . . . . . 
. . f e 2 2 e e 2 2 2 2 e e 2 e e e e f . . . . . . . . . . . . 
. . f e 2 2 e e 2 2 2 2 e e 2 2 e e e e f . . . . . . . . . . . 
. . f 4 4 7 7 7 7 7 7 7 7 4 4 4 4 4 4 4 f . . . . . . . . . . . 
. . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . f 4 4 4 4 4 3 3 4 4 4 4 4 4 4 4 4 4 f . . . . . . . . . . . 
. f 7 7 f f 9 7 1 1 7 7 f f 9 7 7 4 4 4 4 f . . . . . . . . . . 
f 7 7 3 f f 9 1 f f 1 7 f f 9 3 7 7 4 4 4 f f . . . . . . . . . 
f 3 3 1 1 1 1 1 1 1 1 1 1 1 1 1 3 7 4 4 4 4 f . . . . . . . . . 
f 3 3 1 1 1 1 1 f 1 1 1 1 1 1 1 3 7 4 4 4 4 f . . . . . . . . . 
f 3 3 1 1 1 1 f 1 f f 1 1 1 1 3 3 7 4 4 4 4 f . . . . . . . . . 
. f 3 3 1 1 1 1 1 1 1 1 1 1 3 3 7 4 4 4 4 f . . . . . . . . . . 
. . f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . 
. . f 5 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 f . . . . . . . . . . . 
. . f 5 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 f . . . . . . . . . . . 
. . f e e 7 7 e e 7 7 e e 7 7 e e 7 7 f . . . . . . . . . . . . 
. . . f f f f f f f f f f f f f f f f 2 . . . . . . . . . . . . 
. . . f e e 7 f 7 7 7 f 7 e e e e e f 2 2 . . . . . . . . . . . 
. . . f 2 2 5 f 4 4 4 f 5 2 2 2 e e f 2 2 . . . . . . . . . . . 
. . . f 2 2 5 f 4 4 4 f 5 2 2 2 e e f f 2 2 . . . . . . . . . . 
. . . . f f f f f f f f f f f f f f f . f 2 2 . . . . . . . . . 
. . . . . f f f . . . . . . f f f . . . . f f . . . . . . . . . 
. . . . . . f f . . . . . . . f f . . . . . . . . . . . . . . . 
`],
    300,
    true
    )
})
scene.onHitTile(SpriteKind.Player, 14, function (sprite) {
    scene.cameraShake(10, 500)
})
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    currentLevel += 1
    if (currentLevel < Dungeon_Levels.length) {
        Level_diolog()
        info.changeLifeBy(8)
        info.changeScoreBy(1)
        Levels(currentLevel)
    } else {
        game.showLongText("You have finished the game and the BAA program", DialogLayout.Center)
        pause(1000)
        game.over(true)
    }
})
function GameInstruction () {
    game.setDialogFrame(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 f f f f f f f f f f 2 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 2 f f f f f f f f f f 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . 
`)
    game.setDialogCursor(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 2 f f f f f f f 2 f f f 
f f f 2 2 f f f f f f f 2 2 f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f 2 f f 2 f f 2 f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f 2 2 f 2 f 2 f 2 f 2 2 f f 
f f f f 2 f f f f f f f 2 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    game.setDialogTextColor(2)
    Instructon("Move around with Arrows or ASDW")
    Instructon("You have started BAA program")
}
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    Nope()
    scene.placeOnRandomTile(Hunter, 13)
    scene.cameraShake(7, 500)
})
scene.onHitTile(SpriteKind.Player, 5, function (sprite) {
    info.changeLifeBy(-1)
})
function Level_diolog () {
    game.setDialogFrame(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 f f f f f f f f f f 2 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 2 f f f f f f f f f f 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . 
`)
    game.setDialogCursor(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 2 f f f f f f f 2 f f f 
f f f 2 2 f f f f f f f 2 2 f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f 2 f f 2 f f 2 f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f 2 2 f 2 f 2 f 2 f 2 2 f f 
f f f f 2 f f f f f f f 2 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    game.setDialogTextColor(2)
    Level_text("You have finish one of 4 Levels of BAA program")
    Level_text("Next level is unlocked")
}
// Player looks right
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Hunter,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f . . . . . . . f f . . . . 
. . . . . . . . . . . . . . . . f 4 4 f . f f . . . f 4 f . . . 
. . . . . . . . . . . . . . . f 4 4 7 f f 7 7 f f f f 4 4 f . . 
. . . . . . . . . . . . . . . f 4 7 7 e 2 e 2 e e 2 2 7 4 f . . 
. . . . . . . . . . . . . . f e 4 7 e 2 e 2 2 2 e e 2 2 4 f . . 
. . . . . . . . . . . . . f e e e e 2 e e 2 2 2 2 e e 2 2 e f . 
. . . . . . . . . . . . f e e e e 2 2 e e 2 2 2 2 e e 2 2 e f . 
. . . . . . . . . . . . f 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 4 4 f . 
. . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . f 4 4 4 4 4 4 4 4 4 4 3 3 4 4 4 4 4 f . 
. . . . . . . . . . . f 4 4 4 4 7 7 9 f f 7 7 1 1 7 9 f f 7 7 f 
. . . . . . . . . . . f 4 4 4 7 7 3 9 f f 7 1 f f 1 9 f f 3 7 f 
. . . . . . . . . . . f 4 4 4 7 3 1 1 1 1 1 1 1 1 1 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 7 3 1 1 1 1 1 1 1 f 1 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 7 3 3 1 1 1 1 f f 1 f 1 1 1 1 3 f 
. . . . . . . . . . . f 4 4 4 4 7 3 3 1 1 1 1 1 1 1 1 1 1 3 3 f 
. . . . . . . . . . . . f 4 4 4 4 7 3 3 3 3 3 3 3 3 3 3 3 3 f . 
. . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . 
. . . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . 
. . . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . 
. . . . . . . . . . . . . f 7 7 e e 7 7 e e 7 7 e e 7 7 e e f . 
. . . . . . . . . . . . . 2 f f f f f f f f f f f f f f f f . . 
. . . . . . . . . . . . 2 2 f e e e e e 7 f 7 7 7 f 7 e e f . . 
. . . . . . . . . . . . 2 2 f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . 
. . . . . . . . . . . 2 2 f f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . 
. . . . . . . . . . 2 2 f . f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . f f . . . . f f f . . . . . . f f f . . . . 
. . . . . . . . . . . . . . . . f f . . . . . . . f f . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f f . . . . . . . f f . . . . . 
. . . . . . . . . . . . . . . f 4 4 f . f f . . . f 4 f . . . . 
. . . . . . . . . . . . . . f 4 4 7 f f 7 7 f f f f 4 4 f . . . 
. . . . . . . . . . . . . . f 4 7 7 e 2 e 2 e e 2 2 7 4 f . . . 
. . . . . . . . . . . . . f e 4 7 e 2 e 2 2 2 e e 2 2 4 f . . . 
. . . . . . . . . . . . f e e e e 2 e e 2 2 2 2 e e 2 2 e f . . 
. . . . . . . . . . . f e e e e 2 2 e e 2 2 2 2 e e 2 2 e f . . 
. . . . . . . . . . . f 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 4 4 f . . 
. . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . 
. . . . . . . . . . . f 4 4 4 4 4 4 4 4 4 4 3 3 4 4 4 4 4 f . . 
. . . . . . . . . . f 4 4 4 4 7 7 9 f f 7 7 1 1 7 9 f f 7 7 f . 
. . . . . . . . . f 4 4 4 4 7 7 3 9 f f 7 1 f f 1 9 f f 3 7 7 f 
. . . . . . . . . f 4 4 4 4 7 3 1 1 1 1 1 1 1 1 1 1 1 1 1 3 3 f 
. . . . . . . . . f 4 4 4 4 7 3 1 1 1 1 1 1 1 f 1 1 1 1 1 3 3 f 
. . . . . . . . . f 4 4 4 4 7 3 3 1 1 1 1 f f 1 f 1 1 1 1 3 3 f 
. . . . . . . . . . f 4 4 4 4 7 3 3 1 1 1 1 1 1 1 1 1 1 3 3 f . 
. . . . . . . . . . . f f f f f f f f f f f f f f f f f f f . . 
. . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . . 
. . . . . . . . . . . f 5 2 2 5 5 2 2 5 5 2 2 5 5 2 2 5 5 f . . 
. . . . . . . . . . . . f 7 7 e e 7 7 e e 7 7 e e 7 7 e e f . . 
. . . . . . . . . . . . 2 f f f f f f f f f f f f f f f f . . . 
. . . . . . . . . . . 2 2 f e e e e e 7 f 7 7 7 f 7 e e f . . . 
. . . . . . . . . . . 2 2 f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . . 
. . . . . . . . . . 2 2 f f e e 2 2 2 5 f 4 4 4 f 5 2 2 f . . . 
. . . . . . . . . 2 2 f . f f f f f f f f f f f f f f f . . . . 
. . . . . . . . . f f . . . . f f f . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . f f . . . . . . . f f . . . . . . 
`],
    300,
    true
    )
})
// tile for the map
function Dungeon_tiles () {
    scene.setTile(5, img`
5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
`, true)
    scene.setTile(4, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
    scene.setTile(14, img`
b f f f f f f f f f f f f f f b 
f c c c c c c c c c c c c c c b 
f c c c c c c c 9 c c c c c c b 
f c c c c c c c 9 c c c c c c b 
f c c c c c c 9 9 8 c c c c c b 
f c c c c c c 9 9 8 c c c c c b 
f c c c c c 8 9 9 b 8 c c c c b 
f c c c c c 8 9 9 b 3 c c c c b 
f c c c c c 8 8 9 b b c c c c b 
f c c c c c 3 8 9 b b c c c c b 
f c c c c c 3 8 3 b b c c c c b 
f c c c f 4 3 3 3 b b 4 f c c b 
f c c c f 5 7 6 3 b 7 5 f c c b 
f c c c c f 5 7 7 7 5 f c c c b 
f c c c c c f f f f f c c c c b 
b b b b b b b b b b b b b b b b 
`, true)
    scene.setTile(15, img`
b f f f f f f f f f f f f f f b 
f c c c c c c c c c c c c c c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c f f f f f f f f f f f f c b 
f c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
`, true)
    scene.setTile(11, img`
b f f f f b f f f f f f f f f b 
f c c c c c b c c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c c b c c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c b f b c c c c b 
f c c c c c c c b f c b c c c b 
f c c c c c b b f c c c b b c b 
f c c c c b f f c c c c c c b b 
f c c c b b f c c c c c c c c b 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
f f f f c c f f f f f c c f f f 
f f f f c c f f f f f c c f f f 
`, true)
    scene.setTile(12, img`
f f f f c c f f f f f c c f f f 
f f f f c c f f f f f c c f f f 
c c c c c c c c c c c c c c c c 
b f f f f b f f f f f f f f f b 
f c c c c c b c c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c c b c c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c b f b b c c c b 
f c c c c c c c b f c c b c c b 
f c c c c c c b f c c c c b c b 
f c c c c c b f c c c c c c b b 
f c c c c b b f c c c c c c c b 
b b b b b b b b b b b b b b b c 
`, false)
    scene.setTile(1, img`
b f f f f f f f f f f f f f f b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c 
f f f f c c f f f f f c c f f f 
f f f f c c f f f f f c c f f f 
`, false)
    scene.setTile(2, img`
f f f f c c f f f f f c c f f f 
f f f f c c f f f f f c c f f f 
c c c c c c c c c c c c c c c c 
b f f f f f f f f f f f f f f b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b c 
`, false)
    scene.setTile(7, img`
b f f f f b f f f f f f f f f b 
f c c c c c b c c c c c c c c b 
f c c c c c b c c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c b c c c c c c c b 
f c c c c c c c b c c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c c b c c c c c b 
f c c c c c c c b f b b c c c b 
f c c c c c c c b f c c b b c b 
f c c c c c c b f c c c c c b b 
f c c c c c b b f c c c c c c b 
f c c c c c b f c c c c c c c b 
f c c c c b b f c c c c c c c b 
b b b b b b b b b b b b b b b c 
`, false)
    scene.setTile(8, img`
b f f f f f f f f f f f f f f b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
f c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b c 
`, false)
    scene.setTile(9, img`
b f f f f f f f f f f f f f f c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
f b b b b b b b b b b b b b b c 
c c c c c c c c c c c c c c c c 
`, false)
    scene.setTile(10, img`
b f f f f c f f f f f f f f f c 
f b b b b b c b b b b b b b b c 
f b b b b b c b b b b b b b b c 
f b b b b b b c b b b b b b b c 
f b b b b b b c b b b b b b b c 
f b b b b b b c b b b b b b b c 
f b b b b b b b c b b b b b b c 
f b b b b b b b b c b b b b b c 
f b b b b b b b b c b b b b b c 
f b b b b b b b c f c c b b b c 
f b b b b b b b c f b b c c b c 
f b b b b b b c f b b b b b c c 
f b b b b b c c f b b b b b b c 
f b b b b b c f b b b b b b b c 
f b b b b c c f b b b b b b b c 
c c c c c c c c c c c c c c c c 
`, false)
    scene.setTile(6, img`
c f f f f f f f f f f f f f f b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c c c c c c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f c c c c c 1 1 1 1 c 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 c 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 c b b b b c 
f 1 1 1 1 c 1 1 1 1 1 1 1 1 1 b 
f 1 1 1 1 c b b b b 1 1 1 1 1 b 
f 1 1 1 1 c 1 1 1 1 1 1 1 1 1 b 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
f b b b b 1 1 1 1 1 1 1 1 1 1 b 
b c c c c b b b b b b b b b b b 
`, true)
    scene.setTile(13, img`
c b b b b b b b b b b b b b b c 
c b b b b b b b b b b b b b b c 
c d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d c 
c c c c c c c c c c c c c c c c 
c b b b f f f f f f f f b b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f f f f b d d c 
c b b c f f f f f f f f c b b c 
c d d b f f f f f f f f b d d c 
c d d b f f f f f c c f b d d c 
c d d b f c c c f f f f b d d c 
c d d b c c c f f c c c b d d c 
a c c a c c c c c c c c a c c a 
`, false)
}
function denied_ (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function Nope () {
    game.setDialogFrame(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 f f f f f f f f f f 2 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 f f f f f f f f 2 f 2 . 
2 f 2 2 f f f f f f 2 2 f 2 . 
2 f f 2 2 2 2 2 2 2 2 f f 2 . 
2 2 f f f f f f f f f f 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . 
`)
    game.setDialogCursor(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 2 f f f f f f f 2 f f f 
f f f 2 2 f f f f f f f 2 2 f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f 2 f f 2 f f 2 f f f f 
f f f f f 2 2 2 2 2 2 2 f f f f 
f f f f f f 2 2 2 2 2 f f f f f 
f f f 2 2 f 2 f 2 f 2 f 2 2 f f 
f f f f 2 f f f f f f f 2 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
    game.setDialogTextColor(2)
    denied_("NOPE!")
}
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    info.changeLifeBy(-1)
})
let Hunter: Sprite = null
let currentLevel = 0
let Dungeon_Levels: Image[] = []
Dungeon_Levels = [img`
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 f 8 8 7 8 8 8 7 8 f 5 4 5 8 8 8 8 8 8 7 8 4 5 4 
5 4 5 4 5 4 5 4 8 8 8 8 7 8 8 7 7 8 f 4 f 8 7 8 8 7 8 8 8 4 5 4 
5 4 5 4 5 8 8 8 8 7 8 4 5 4 5 8 8 8 8 7 8 7 8 f 5 4 5 7 8 4 5 4 
8 8 5 4 5 7 8 8 7 8 5 4 5 4 5 4 8 7 8 8 7 8 8 f 5 4 5 8 8 4 8 8 
d 8 7 8 8 8 7 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 8 7 8 8 6 
8 8 8 8 7 8 8 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 7 8 8 7 8 
`, img`
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 7 8 8 8 f 8 8 f 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 f 7 f 8 8 f f 8 8 7 8 7 f 8 8 7 8 8 8 f 8 f 8 7 f 8 4 5 4 
5 4 8 7 8 8 8 8 7 8 7 8 8 8 8 8 7 8 8 8 8 7 8 7 8 8 8 8 8 8 5 4 
5 8 8 8 8 8 7 8 8 8 8 8 f 8 7 8 8 8 f 7 8 8 8 8 7 8 8 8 7 8 f 4 
8 8 7 8 8 8 f 8 8 f 7 8 5 4 5 4 5 4 5 8 7 8 f 8 8 8 f 8 8 8 8 8 
d 8 8 8 f 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 f 8 7 8 6 
8 8 7 8 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 f 7 8 8 
`, img`
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 8 7 8 8 7 8 4 5 4 5 4 5 4 8 7 8 8 5 4 
8 8 8 f 8 8 8 7 8 8 8 8 f 8 8 8 8 8 8 8 7 8 8 8 8 f 8 8 8 7 8 7 
d 8 8 8 8 7 8 8 8 8 7 8 8 8 8 7 8 8 7 8 8 8 7 8 8 8 8 7 8 8 8 6 
8 8 7 8 8 7 8 8 f 8 8 7 8 8 7 8 8 8 f 8 8 8 8 8 7 8 8 8 8 f 8 8 
5 4 8 8 7 8 8 8 5 4 5 4 5 4 5 4 5 4 5 8 7 8 8 7 8 8 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
`, img`
8 8 8 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
d 8 7 8 5 4 5 4 5 4 5 f 8 8 8 8 8 8 f 4 5 4 5 4 5 4 5 4 5 4 5 4 
8 8 7 8 f 4 5 4 5 4 7 8 8 8 7 8 8 7 8 8 5 4 5 4 5 f 8 8 8 8 7 4 
5 8 8 8 8 8 5 4 5 8 7 8 7 8 8 8 7 8 8 8 f 4 5 4 8 8 8 7 8 8 8 4 
5 4 8 7 7 8 8 f 8 8 8 8 f 4 5 4 5 8 8 7 8 8 f 8 8 7 8 8 f 7 8 4 
5 4 5 8 8 7 8 8 7 7 8 8 5 4 5 4 5 4 8 8 8 8 7 8 8 8 f 4 5 8 7 f 
5 4 5 4 8 8 7 8 8 8 8 4 5 4 5 4 5 4 5 8 8 7 8 7 8 8 5 4 5 7 8 6 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 8 8 f 
`, img`
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 f 7 8 7 8 7 4 5 4 5 4 5 4 5 4 5 4 5 4 5 8 8 6 
5 4 5 4 5 4 5 4 8 8 8 8 8 8 8 8 f 4 5 4 5 4 5 4 5 4 5 4 5 8 7 5 
5 4 5 4 5 4 5 8 8 7 8 8 8 7 8 7 8 8 f 4 5 4 f 8 8 7 8 8 f 8 8 4 
5 8 7 8 7 8 f 8 8 8 7 4 5 4 8 8 8 8 7 4 5 8 8 7 8 8 8 7 8 7 8 4 
8 8 7 8 8 8 8 8 8 8 5 4 5 4 5 8 8 7 f 4 5 7 8 8 8 f 8 8 8 8 7 4 
d 8 8 8 8 7 8 8 7 4 5 4 5 4 5 4 8 8 8 7 8 8 8 8 5 4 8 7 8 8 f 4 
8 7 8 7 8 4 5 4 5 4 5 4 5 4 5 4 8 7 8 8 7 8 7 f 5 4 5 4 5 4 5 4 
`, img`
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 5 4 
`]
PLayer()
Levels(currentLevel)
Dungeon_tiles()
GameInstruction()
