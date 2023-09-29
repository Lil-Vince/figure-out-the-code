sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
controller.combos.attachCombo("u u d d l r l r b a", function () {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let projectile: Sprite = null
info.setLife(3)
scene.setBackgroundColor(1)
let Player_sprite = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_sprite)
game.setGameOverPlayable(true, music.melodyPlayable(music.beamUp), false)
game.setGameOverEffect(true, effects.blizzard)
game.setGameOverEffect(false, effects.melt)
game.setGameOverMessage(false, "you lost ):")
game.setGameOverMessage(true, "good job! you figured out the code!")
music.play(music.createSong(hex`0078000408070306001c00010a006400f401640000040000000000000000000000000000000002180030003c0001243c004800012548005800012458006800012707001c00020a006400f401640000040000000000000000000000000000000003060024003000011908001c000e050046006603320000040a002d0000006400140001320002010002240000001000011d10002000012268007000011d70007800011978008000011d800088000122`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . e e e e . . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . . e e e e . . . . . . . . . 
        . . . e . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, scene.screenHeight()))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(3000, function () {
	
})
