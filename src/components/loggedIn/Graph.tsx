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
            this.initGridLines();
        }
        initGridLines(){
            if(this.ctx == undefined) return;

            this.ctx.fillStyle = "rgb(30 41 59)";
            for (let i = 0; i < 20; i++) {
                this.ctx.fillRect(0,i*50+20,this.width,2)
            }
        }
    }

    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const graph = new Graph(canvas);
    },[]);

    return (
        <div className='bg-slate-900 w-full h-full center rounded-xl p-4'>
            <canvas className='w-full h-full' ref={canvas} width={1000} height={1000}></canvas>
        </div>
    )
}