import React, { RefObject, useEffect, useRef, useState } from 'react'

type Props = {}

export default function Graph({}: Props) {

    const [stock, setStock] = useState<string>("STONK");
    const [price, setPrice] = useState<number>(1000);
    const [change, setChange] = useState<string>("1%");

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

            this.gridLines(6);
        }
        gridLines(lines : number){

            const percentOfCanvas = (numb : number) => {
                return this.width*(numb/100)
            }

            const fontSize = percentOfCanvas(2);
            
            for (let i = 0; i < lines; i++) {
                //GRID LINES
                this.ctx.fillStyle = "rgb(15 23 42)";
                this.ctx.fillRect(percentOfCanvas(5),i*(this.height/lines)+(this.height/lines),this.width-percentOfCanvas(10),10);
                
                if(i<1){
                    this.ctx.fillRect(percentOfCanvas(5),0,percentOfCanvas(0.5),percentOfCanvas(100))
                    this.ctx.fillRect(percentOfCanvas(95),0,percentOfCanvas(0.5),percentOfCanvas(100))
                }
                // TEXT
                this.ctx.fillStyle = "rgb(30, 41, 59)";
                this.ctx.font = `500 ${fontSize}px Verdana`
                this.ctx.fillText("00.00",this.width-percentOfCanvas(4),i*(this.height/lines)+(this.height/lines)+percentOfCanvas(1), percentOfCanvas(4))
                this.ctx.fillText("00.00",0,i*(this.height/lines)+(this.height/lines)+percentOfCanvas(1), percentOfCanvas(4))
            }
        }
        updateGraph(){
            this.gridLines(5);

        }
    }

    const canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const graph = new Graph(canvas);
    },[]);

    return (
        <div className='bg-slate-1000 aspect-video center border-slate-800 border-4 flex flex-col font-bold text-slate-800'>
            <header className='w-full rounded-t-xl bg-slate-1000 border-b-4 flex flex-row items-center'>
                <div className='w-1/3 h-full border-r-4'>
                    <input size={1} className='bg-slate-1000 text-slate-800 h-full w-full rounded-none text rounded-tl-xl placeholder-slate-800 text-xs pl-2 md:text-3xl' type="text" placeholder='STONKS...'/>
                </div>
                <div className='w-full flex flex-row justify-evenly'>
                    <h2 className='text-xl'>{stock}</h2>
                    <h2 className='text-xl'>{price}</h2>
                    <h2 className='text-red-600 text-xl'>{change}</h2>
                </div>
            </header>
            <h2 className=' absolute text-xl md:text-9xl'>{stock}</h2>
            <canvas className='z-10 w-full p-4 py-0 max-h-full h-auto rounded-xl rounded-t-none' ref={canvas} width={1500} height={1500}></canvas>
        </div>
    )
}