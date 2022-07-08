import React, { RefObject, useEffect, useRef } from 'react'

type Props = {}




function draw(ctx : CanvasRenderingContext2D){
    if(ctx == undefined) return;
    ctx.fillStyle = "rgb(0,200,100)";
    ctx?.fillRect(0,0,100,100);
}

export default function Graph({}: Props) {
    class Graph{
        public canvas : RefObject<HTMLCanvasElement>;
        public ctx : CanvasRenderingContext2D;
        private height : number;
        private width : number;
    
        constructor(canvas : RefObject<HTMLCanvasElement>){

            this.canvas = canvas;
            this.ctx = this.canvas.current?.getContext("2d") as CanvasRenderingContext2D;
            this.height = this.canvas.current?.height!;
            this.width = this.canvas.current?.height!;
            // const ctx = canvas.current?.getContext("2d") as CanvasRenderingContext2D;
            this.init();
        }
        init(){
            if(this.ctx == undefined) return;

            this.gridLines(10);
        }
        gridLines(lines : number){

            const percentOfCanvas = (numb : number) => {
                return this.width*(numb/100)
            }

            const fontSize = percentOfCanvas(2);
            
            for (let i = 0; i < lines; i++) {
                this.ctx.fillStyle = "rgb(30 41 59)";
                this.ctx.fillRect(percentOfCanvas(5),i*(this.height/lines)+(this.height/lines),this.width-percentOfCanvas(10),2);
                
                
                // this.ctx.fillRect();
                this.ctx.fillStyle = "rgb(71 85 105)"
                this.ctx.font = `100 ${fontSize}px Verdana`
                this.ctx.fillText("00.00",this.width-percentOfCanvas(4),i*(this.height/lines)+(this.height/lines)+percentOfCanvas(1), percentOfCanvas(4))
                this.ctx.fillText("00.00",0,i*(this.height/lines)+(this.height/lines)+percentOfCanvas(1), percentOfCanvas(4))
            }
        }
        updateGraph(){
            this.gridLines(10);

        }
    }

    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const graph = new Graph(canvas);
    },[]);

    return (
        <div className='bg-slate-900 w-full h-full center rounded-md p-4'>
            <canvas className='w-full h-full' ref={canvas} width={1500} height={1500}></canvas>
        </div>
    )
}