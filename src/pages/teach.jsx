export default function Teach() {
    return (
        <div>
        <div className='w-screen h-screen bg-cover bg-center flex flex-col max-w-8xl'>
            <div className=" flex flex-col w-full h-2/5 lg:px-48 mt-12 items-center justify-center ">
                    <div className=' lg:ml-32 w-full  text-3xl  mb-5 text-[#423838]'>APP操作教學</div>
                    <iframe className=" lg:w-2/5 h-full " src="https://www.youtube.com/embed/oTRp_EYhNu0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
           
            <div className=" border-t-4 max-w-full border-gray-300 mx-60 mt-10  md:invisible lg:visible "></div>
            <div className=" flex flex-col justify-center items-center gap-10 mt-5">

                <p className=" text-4xl font-semibold text-gray-600">聲明</p>
                <p className=" text-xl font-semibold text-gray-600 w-1/2 text-center leading-10">本APP所提供的檢測結果僅供參考使用，並非用於醫療診斷。若您對檢測結果有任何疑慮或不確定，我們強烈建議您尋求醫療專業人員的建議與檢查。醫療專業人員的意見比任何檢測結果更為可靠，也更能保障您的健康。感謝您的理解與配合。</p>
            </div>
        </div>
    </div>
    )
}