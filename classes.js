class Sprite {
    constructor({position, image, frames = { max: 1, hold: 10 }, sprites, animate = false}) {
        this.position = position
        this.image = image
        this.frames = {...frames, current: 0, elapsed: 0}

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.animate = animate
        this.sprites = sprites
    }

    draw() {
        c.drawImage(
            this.image,
            this.frames.current * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )

        if(!this.animate) return

        if(this.frames.max > 1) {
            this.frames.elapsed++
        }

        if(this.frames.elapsed % this.frames.hold === 0) {
            if(this.frames.current < this.frames.max - 1) this.frames.current++
            else this.frames.current = 0
        }
    }
}

class Boundary {
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw(){
        c.fillStyle = 'rgba(255, 255, 255, 0.5)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}