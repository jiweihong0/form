import Backimage from '../assets/backimage.png';
export default function Main() {
    return (
        <div className='w-screen h-screen bg-cover bg-center flex' style={{backgroundImage: `url(${Backimage})`}}>
            <div className=' flex mt-24 w-full flex-col items-center gap-10'>

                <div className='text-4xl ml-3 font-black text-center text-[#423838]'>發想動機</div>
                <p className=' text-wrap w-2/5 mb-2 gap-10 leading-10 ml-96 animate-fade'>
                現代人長期使用電腦、手機等3產品，同時搭配不良的姿勢，長時間累積導致各種健康問題。情況嚴重可能找時間去診所進行姿態矯正，患者對治療效果感到不確定。 
                </p>
                <p className=' text-wrap w-2/5 ml-96 leading-10 animate-fade'>
                於是我們開發一款姿態判斷APP，希望幫助大家在日常生活中，可以有效檢測身體姿態，提供一個有效的工具來評估治療效果。
                </p>
            
            </div>
        </div>

    )
}