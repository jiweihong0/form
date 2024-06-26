import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import bg from '../assets/background.png';
import bg2 from '../assets/background2.png';


function Page2() {
  
  const history = useNavigate();
  const json= [
    {
      "question": "頭前傾可能導致什麼問題？",
      "option": [
        "脊椎側彎",
        "肩頸痠痛",
        "活動性駝背",
        "含胸"
      ],
      "answer": 2
    },
    {
      "question": "智慧醫療中，AI如何協助改善病患管理？",
      "option": [
        "加速治療效果",
        "提供深刻洞察",
        "保障醫療資料隱私",
        "協助即時數據處理"
      ],
      "answer": 1
    },
    {
      "question": "脊椎側彎可能對身體造成什麼影響？",
      "option": [
        "下背痛",
        "肩頸痠痛",
        "小腹凸",
        "長骨刺"
      ],
      "answer": 1
    },
    {
      "question": "邊緣運算（Edge Computing）在智慧醫療中的主要作用是什麼？",
      "option": [
        "提供深刻洞察",
        "協助即時數據處理",
        "保障醫療資料隱私",
        "增加資訊分享"
      ],
      "answer": 2
    },
    {
      "question": "MediaPipe姿勢偵測（Pose）模型是如何標記身體的姿勢節點的？",
      "option": [
        "透過計算夾角",
        "使用區塊鏈技術",
        "利用雲端運算",
        "借助AI機器學習"
      ],
      "answer": 4
    },
    {
      "question": "區塊鏈技術在智慧醫療中的主要優勢是什麼？",
      "option": [
        "提供深刻洞察",
        "保障醫療資料隱私",
        "加速治療效果",
        "增加資訊分享"
      ],
      "answer": 2
    },
    {
      "question": "智慧醫療六大科技中，哪項技術與姿勢偵測有直接關係？",
      "option": [
        "AI 人工智慧",
        "Cloud 雲端",
        "Edge Computing 邊緣運算",
        "Blockchain 區塊鏈"
      ],
      "answer": 3
    },
    {
      "question": "MediaPipe姿勢偵測（Pose）模型標記了多少個姿勢節點？",
      "option": [
        "20",
        "25",
        "30",
        "33"
      ],
      "answer": 2
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
      "question": "姿勢偵測技術如何協助解決「含胸」引起的肌肉不平衡問題？",
      "option": [
        "利用AI進行預防",
        "透過雲端儲存數據",
        "計算夾角標記姿勢節點",
        "利用區塊鏈確保安全性"
      ],
      "answer": 3
    }
  ]
  
  const [answers, setAnswers] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
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

     // 計算正確答案數並更新選擇狀態
     let correctAnswerss = 0;
     const newSelectedOptions = [];
     for (let i = 0; i < json.length; i++) {
       const isCorrect = answers[i] === json[i].answer;
       newSelectedOptions.push({ selected: answers[i], isCorrect });
       if (isCorrect) {
         correctAnswerss++;
       }
     }
     setSelectedOptions(newSelectedOptions);
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
    // confirm(`重新測驗或回到前測？`)? history('/'):window.location.reload() ;
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen h-full gap-5 overflow-scroll bg-center bg-cover max-w-8xl '
    style={{
        backgroundImage: `url(${bg}), url(${bg2})`,
        backgroundSize: '100% 50%, 100% 50%',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top, bottom'
    }}>
    <h1 className='text-4xl font-bold text-[#715E42] my-10'>後測問卷</h1>
      {/* change to second test */}
      
      {/* line */}
      {/* <hr style={{width:"80%",marginLeft:"10%"}} /> */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 text-white' >
        {json.map((item, index) => (
          <div key={index} style={{display:"flex",flexDirection:"row",marginLeft:"20px",backgroundColor:"#FFFFFF",padding:"15px",borderRadius:"10px" ,width:"100%", boxShadow:"0 4px 6px 0 rgba(0, 0, 0, 0.1)"}}>
            <p className='mr-10 text-3xl font-bold text-amber-950 '>{index+1}</p>
            <div >
            <p className='mb-2 text-xl text-black'>{item.question}</p>
            {item.option.map((option, optionIndex) => {
              const isSelected = selectedOptions[index]?.selected === optionIndex + 1;
              const isCorrect = selectedOptions[index]?.isCorrect;
              const backgroundColor = isSelected ? (isCorrect ? 'lightgreen' : 'lightcoral') : 'transparent';
              const text = isSelected ? (isCorrect ? '正確' : '錯誤') : '';
              return (<>
                <div key={optionIndex} style={{ backgroundColor }} className='flex flex-row p-2 rounded-2xl'>

                 <input type="radio" name={index} value={optionIndex + 1} onChange={(event) => handleAnswerChange(event, index)} />
                  <label className='ml-2 text-black'>{option} </label> 
                   
                 <span className='ml-5 font-bold text-black'>{text}</span>
                 
                </div>
              </>
              );
            })}
          </div>
        </div>
        ))}
        <input type="submit" value="提交" className='px-5 py-2 text-xl font-bold text-black rounded-lg cursor-pointer hover:bg-amber-850 bg-[#FFF8F8] shadow-xl' />
        <br />
      </form>
  
  </div>
);
}

export default Page2;
