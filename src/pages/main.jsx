import Backimage from '../assets/backimage.png';
export default function Main() {
    return (
        <div className='flex justify-center w-screen h-screen bg-center bg-cover ' style={{backgroundImage: `url(${Backimage})`}}>
            <div className='flex flex-col items-center w-4/5 max-w-screen-lg gap-10 mt-24 '>

                <div className='text-4xl lg:ml-28 font-black text-center text-[#423838]'>發想動機</div>
                <p className='gap-10 mb-2 text-2xl leading-10 text-wrap lg:w-2/5 lg:ml-96 animate-fade'>
                現代人長期使用電腦、手機等3產品，同時搭配不良的姿勢，長時間累積導致各種健康問題。情況嚴重可能找時間去診所進行姿態矯正，患者對治療效果感到不確定。 
                </p>
                <p className='gap-10 mb-2 text-2xl leading-10 text-wrap lg:w-2/5 lg:ml-96 animate-fade'>
                於是我們開發一款姿態判斷APP，希望幫助大家在日常生活中，可以有效檢測身體姿態，提供一個有效的工具來評估治療效果。
                </p>
            
            </div>
        </div>

    )
}