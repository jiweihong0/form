import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import bg from '../assets/background.png';
import bg2 from '../assets/background2.png';


function Page1() {
  let history = useNavigate();

  const json = [
    {
      "question": "活動性駝背可能引起哪些身體不適症狀？",
      "option": [
        "肩頸痠痛",
        "長骨刺",
        "頭痛",
        "脊椎側彎"
      ],
      "answer": 3
    },
    {
      "question": "如何使用智慧醫療科技改善姿勢問題？",
      "option": [
        "Data 數據分析",
        "Edge Computing 邊緣運算",
        "Blockchain 區塊鏈",
        "Fifth Generation 5G"
      ],
      "answer": 1
    },
    {
      "question": "骨盆前傾對身體的哪些部位產生不良影響？",
      "option": [
        "肩頸痠痛",
        "下背痛",
        "小腹凸",
        "頭痛"
      ],
      "answer": 2
    },
    {
      "question": "如何透過智慧醫療科技解決含胸引起的肌肉不平衡問題？",
      "option": [
        "AI 人工智慧",
        "Cloud 雲端",
        "姿勢偵測技術",
        "Fifth Generation 5G"
      ],
      "answer": 3
    },
    {
      "question": "智慧醫療科技如何改變骨盆前傾對身體的影響？",
      "option": [
        "肩頸痠痛",
        "下背痛",
        "小腹凸",
        "頭痛"
      ],
      "answer": 2
    },
    {
      "question": "區塊鏈技術如何提高患者的醫療資料安全性？",
      "option": [
        "加速醫療革新",
        "保障醫療資料隱私",
        "提供即時反應",
        "擴展醫療資訊儲存"
      ],
      "answer": 2
    },
    {
      "question": "數據分析在預防腰椎疾病中扮演什麼樣的角色？",
      "option": [
        "提供深刻洞察",
        "協助即時數據處理",
        "增加資訊分享",
        "加速治療效果"
      ],
      "answer": 1
    },
    {
      "question": "MediaPipe如何透過姿勢偵測進一步分離人物與背景？",
      "option": [
        "利用雲端計算",
        "進行即時數據處理",
        "計算夾角標記姿勢節點",
        "使用區塊鏈技術"
      ],
      "answer": 3
    },
    {
      "question": "智慧醫療六大科技中，哪項技術可進一步透過姿勢偵測將人物與背景分離？",
      "option": [
        "AI 人工智慧",
        "Cloud 雲端",
        "Edge Computing 邊緣運算",
        "Blockchain 區塊鏈"
      ],
      "answer": 3
    },
    {
      "question": "智慧醫療六大科技如何協同作用，提供更全面的病患管理？",
      "option": [
        "資料分析",
        "區塊鏈技術",
        "數據科技",
        "全面病患管理"
      ],
      "answer": 4
    }
  ]


  
 
  const [answers, setAnswers] = useState([]);
  
  
  function handleAnswerChange(event, index) {
  
   
    // 檢查 answer 是否為數字
    if (isNaN(event.target.value)) {
      return;
    }
  
    // 將 answer 設為數字
    const newAnswers = [...answers];
    newAnswers[index] = parseInt(event.target.value);
  
    // 重新渲染
    setAnswers(newAnswers);
  }
 
 

  function handleSubmit(event) {
    event.preventDefault();
    // 檢查answer是否都已填寫
    if (answers.length < json.length) {
      alert('請回答所有題目');
      return;
    }
    // 檢查answer是否都在範圍內
    for (const answer of answers) {
      if (answer < 1 || answer > json[0].option.length) {
        alert('answer必須在 1 到 4 之間');
        return;
      }
    }

    // 計算正確answer數
    let correctAnswers = 0;
    for (let i = 0; i < json.length; i++) {
      if (answers[i] === json[i].answer) {
        correctAnswers++;
      }
    }

    // 顯示結果
    alert(`答對 ${correctAnswers} 題`);
    confirm(`前往後側?`) ? history('/page2'): history('/page1');
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-full gap-5 overflow-scroll bg-center bg-cover max-w-8xl '
    style={{
        backgroundImage: `url(${bg}), url(${bg2})`,
        backgroundSize: '100% 50%, 100% 50%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top, bottom'
    }}>
    <h1 className='text-4xl font-bold text-[#715E42] my-10'>前測問卷</h1>
      {/* change to second test */}
      
      {/* line */}
      {/* <hr style={{width:"80%",marginLeft:"10%"}} /> */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 text-white' >
        {json.map((item, index) => (
          <div key={index} style={{display:"flex",flexDirection:"row",marginLeft:"20px",backgroundColor:"#FFFFFF",padding:"15px",borderRadius:"10px" ,width:"100%", boxShadow:"0 4px 6px 0 rgba(0, 0, 0, 0.1)"}}>
            <p className='mr-10 text-3xl font-bold text-amber-950 '>{index+1}</p>
            <div >
            <p className='mb-2 text-xl text-black'>{item.question}</p>
            <div >
              <input type="radio" name={index} value="1" onChange={(event) => handleAnswerChange(event, index)} />
              <label className='ml-2 text-black '>{item.option[0]}</label>
            </div>
            <div>
              <input type="radio" name={index} value="2" onChange={(event) => handleAnswerChange(event, index)} />
              <label  className='ml-2 text-black'>{item.option[1]}</label>
            </div>
              <div>
              <input type="radio" name={index} value="3" onChange={(event) => handleAnswerChange(event, index)} />
              <label className='ml-2 text-black'>{item.option[2]}</label>
              </div>
              <div>
              <input type="radio" name={index} value="4" onChange={(event) => handleAnswerChange(event, index)} />
              <label className='ml-2 text-black'>{item.option[3]}</label>
            </div>
          </div>
        </div>
        ))}
        <input type="submit" value="提交" className='px-5 py-2 text-xl font-bold text-black rounded-lg cursor-pointer hover:bg-amber-850 bg-[#FFF8F8] shadow-xl' />
        <br />
      </form>
  
  </div>
  );
}

export default Page1;
