import { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
    <div style={{padding:"20px",margin:"5px",borderRadius:"10px",backgroundColor:"#dcfce5",display:"flex", flexDirection:"column",width:"90%",minWidth:"500px"}}>
      <h1 style={{marginLeft:"30%"}}>測驗題目</h1>
      {/* change to second test */}
   
      {/* line */}
      <hr style={{width:"80%",marginLeft:"10%"}} />
      <form onSubmit={handleSubmit} style={{padding:"0 10%"}}>
        {json.map((item, index) => (
          <div key={index} style={{display:"flex",flexDirection:"column",marginLeft:"20px"}}>
            <p>{item.question}</p>
            <div>
              <input type="radio" name={index} value="1" onChange={(event) => handleAnswerChange(event, index)} />
              <label>{item.option[0]}</label>
              </div>
              <div>
              <input type="radio" name={index} value="2" onChange={(event) => handleAnswerChange(event, index)} />
              <label>{item.option[1]}</label>
              </div>
              <div>
              <input type="radio" name={index} value="3" onChange={(event) => handleAnswerChange(event, index)} />
              <label>{item.option[2]}</label>
              </div>
              <div>
              <input type="radio" name={index} value="4" onChange={(event) => handleAnswerChange(event, index)} />
              <label>{item.option[3]}</label>
            </div>
          </div>
        ))}
        <br />
        <input type="submit" value="提交" style={{marginLeft:"50%"}} />
      </form>
  
    </div>
  );
}

export default Page1;
