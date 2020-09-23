/**
 * Created by dell on 2017/3/13.
 */
class Ball {
    constructor(x, y, r, bg, speedx, speedy) {
        this.x = x;
        this.y = y;
        this.bg = bg;
        this.r = r;
        this.speedx = speedx;
        this.speedy = speedy;
        this.winW = document.documentElement.clientWidth;
        this.winH = document.documentElement.clientHeight;
        this.init();
    }

    init() {
        this.create();
        document.body.appendChild(this.ele);
        this.move();
    }

    create() {
        var ele = document.createElement("div");
        ele.className = "Ball";
        this.ele = ele;
        this.setStyle();
    }

    setStyle() {
        this.ele.style.cssText = "width:" + this.r * 2 + "px;height:" + this.r * 2 + "px;left:" + (this.x - this.r) + "px;top:" + (this.y - this.r) + "px;background:" + this.bg + ";"

    }

    move() {
        setInterval(() => {
            if (this.x - this.r < 0 || this.x + this.r > this.winW) {
                this.speedx *= -1;
            }
            if (this.y - this.r < 0 || this.y + this.r > this.winH) {
                this.speedy *= -1;
            }
            this.x += this.speedx;
            this.y += this.speedy;
            this.setStyle();
        }, 1000 / 60)
    }
}
