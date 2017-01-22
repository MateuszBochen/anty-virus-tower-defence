
class Game {

    constructor($interval) {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.$interval = $interval;

        this.drawMap();
        //console.log(2222);
    }

    loader(callback) {
        let p = 0;
        let self = this;
        let stop = this.$interval(function() {
            callback(p);

            if (p == 100) {
                self.$interval.cancel(stop);
                stop = undefined;
            }

            p += 1;


        }, 100);
    }

    draw() {
        
    }

    drawMap () {

        let map = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
        ];

        let rectW = 32;
        let rectH = 32;
        let y = 0;

        for (let yKey in map) {
            let x = 0;

            for (let xKey in map[yKey]) {
                if (map[yKey][xKey]) {
                    this.ctx.fillStyle = "rgb(236,237,111)";
                    this.ctx.fillRect (1+x, 1+y, rectW-2, rectH-2);

                    this.ctx.beginPath();
                    this.ctx.lineWidth="1";
                    this.ctx.strokeStyle="rgb(214,215,105)";
                    this.ctx.rect(x,y,rectW,rectH); 
                    this.ctx.stroke();
                }
                else {
                    this.ctx.fillStyle = "rgb(224,100,25)";
                    this.ctx.fillRect (1+x, 1+y, rectW-2, rectH-2);

                    this.ctx.beginPath();
                    this.ctx.lineWidth="1";
                    this.ctx.strokeStyle="rgb(224,100,25)";
                    this.ctx.rect(x,y,rectW,rectH); 
                    this.ctx.stroke();
                }

                

                


                x += rectW;
            }

            y += rectH;
        }

        //this.ctx.fillStyle = "rgb(200,0,0)";
        //this.ctx.fillRect (10, 10, 50, 50);

        /*map.foreach((elem, index) => {
            let y = 0;

        });
        */

    }
}

Game.$inject = ["$interval"];
export default Game;
