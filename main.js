namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const co1n = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const spacerock = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sus_cat.vy == 0) {
        sus_cat.vy = -160
    }
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite5, otherSprite3) {
    if (true) {
        sus_cat.destroy()
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.co1n, function (sprite3, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy(effects.spray, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 . . . . . . . . . . 
        . . 5 5 5 2 2 . . . . . . . . . 
        . 5 5 . 2 2 2 4 4 . . . . . . . 
        . 5 . 2 2 2 9 2 4 4 . . . . . . 
        5 5 2 2 4 9 9 9 2 4 . . . . . . 
        5 5 2 4 4 9 9 9 4 2 . . . . . . 
        . 5 5 2 2 2 2 2 2 4 4 . . . . . 
        . . 5 5 5 5 5 5 5 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sus_cat, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite2, location2) {
    current_level += 1
    startlevel()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    BOSS.destroy()
    info.changeScoreBy(1000)
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite5, otherSprite3) {
    otherSprite3.destroy()
    sprite5.destroy()
    if (true) {
        info.changeScoreBy(30)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite5, otherSprite3) {
    if (true) {
        sprite5.destroy()
        statusbar.value += -15
    }
})
function startlevel () {
    tiles.placeOnRandomTile(sus_cat, assets.tile`myTile5`)
    sus_cat.ay = 350
    if (current_level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (current_level == 2) {
        tiles.setCurrentTilemap(tilemap`level8`)
    }
    scene.cameraFollowSprite(sus_cat)
    info.setLife(5)
    for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
        co1n2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.co1n)
        animation.runImageAnimation(
        co1n2,
        assets.animation`Gold`,
        100,
        true
        )
        tiles.placeOnTile(co1n2, value2)
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
    for (let value22 of tiles.getTilesByType(assets.tile`myTile1`)) {
        spacerock2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f f f f 
            . . . . f f f f f f f f f b b f 
            . . . f f b b b b b b b b 1 b f 
            . . . f b b b 1 b b b b b b b . 
            . . . f f b b 1 b b b b b b f . 
            . . . . f b b b b b 1 b b f f . 
            . . . . . f f b b b b b b f . . 
            . . . . . . f f f b b b f . . . 
            . . . . . . . . f b b b f . . . 
            . . . . . . . f f b b f f . . . 
            . . . . . . . f f f f f . . . . 
            `, SpriteKind.spacerock)
        tiles.placeOnTile(spacerock2, value22)
        tiles.setTileAt(value22, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        BOSS = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Boss)
        animation.runImageAnimation(
        BOSS,
        assets.animation`GLUG GLUG GLACK`,
        300,
        true
        )
        tiles.placeOnTile(BOSS, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        BOSS.follow(sus_cat, 50)
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(BOSS)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.spacerock, function (sprite4, otherSprite2) {
    otherSprite2.destroy(effects.spray, 500)
    ufo = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 9 7 1 f . . . . . . 
        . . . . . f 1 f 1 f . . . . . . 
        . f f f f f 1 f 9 f f f f f . . 
        . f 2 1 1 f f f f f 1 1 2 f . . 
        . f f 2 2 2 2 2 2 2 2 2 f f . . 
        . . f f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    ufo,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f 1 1 1 1 f f . . . . . 
        . . . f 1 1 1 7 1 9 f . . . . . 
        . . . f 1 1 1 f 1 1 f . . . . . 
        f f f f f 9 1 f 1 9 f f f f f f 
        f 2 1 1 1 f f f f f f 1 1 1 2 f 
        . f 2 2 2 2 1 1 1 1 1 1 1 2 f f 
        . f f f f f 2 2 2 2 2 2 2 f f . 
        . . . . . f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f 1 1 1 1 f f . . . . . 
        . . . f 1 1 1 7 1 9 f . . . . . 
        . . . f 1 1 1 f 1 1 f . . . . . 
        f f f f f 9 1 f 1 9 f f f f f f 
        f 2 2 2 2 f f f f f f 2 2 2 2 f 
        . f 1 1 2 2 2 2 2 2 2 2 1 1 f f 
        . f f f f f 1 1 1 1 1 1 1 f f . 
        . . . . . f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    ufo.setPosition(sus_cat.x + 80, sus_cat.y - 80)
    ufo.follow(sus_cat, 50)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite5, otherSprite3) {
    sprite5.destroy()
    if (true) {
        info.changeLifeBy(-1)
    }
})
let ufo: Sprite = null
let spacerock2: Sprite = null
let co1n2: Sprite = null
let statusbar: StatusBarSprite = null
let BOSS: Sprite = null
let current_level = 0
let projectile: Sprite = null
let sus_cat: Sprite = null
sus_cat = sprites.create(assets.image`sussy cat`, SpriteKind.Player)
controller.moveSprite(sus_cat, 100, 0)
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffff
    ffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffff
    ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffff
    fffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffff
    fffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff
    fffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffff
    fffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff
    fffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff
    fffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    fff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999988888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999888888899999889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999888888899999999998899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999998999999989999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999988988888888888888888888888888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999898888888888888888888888888999998899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998988888988888899888988888888889999988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999989888888888888888898889899898988899999988999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999899888888888888888889899899899898988999999889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999899888888888888988888989899899898999889999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999998998888888888888898888888888899899899989999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999998888888888898888888899989888889899899989999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988888888888888888888899989899888899899989999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988888888988898989888899989899888889899989999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988988988888888888888899989899888998899989999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988988988888888889888899989999889999899899999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988988988888888999988899989999899998988999999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988988998888888888888999899988899989989999999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988998998888888888889998998898999899889999999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988998888888888888989989889989998988899999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988998888889988899988888999899988898999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999988888899888998888888999998888889889999999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999998989888888888888888888888888988999999999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999898999988998999989998888899899999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999989889999888888888888889988999999999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999989998899998998888998888899999999999998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999998899988888888888888999999999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999988999988888888899999999999999998899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999888899999999989999999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999998999999999999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999899999998888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999988888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
startlevel()
game.onUpdate(function () {
    sus_cat.setImage(assets.image`sussy cat`)
    if (sus_cat.vx < 0) {
        sus_cat.image.flipX()
    }
})
