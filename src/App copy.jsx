import { useState } from 'react';

function App() {
  
  const json1 = [
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

  const json2 = [
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
  
  const [json, setJson] = useState(json1);
  const [state, setstate] = useState(true);
  const [answers, setAnswers] = useState([]);
  const style = state ? {padding:"20px",margin:"5px",borderRadius:"10px",backgroundColor:"#dcfce5",display:"flex", flexDirection:"column",width:"90%",minWidth:"500px"} : {padding:"20px",margin:"5px",borderRadius:"10px",backgroundColor:"#00ff00",display:"flex", flexDirection:"column",width:"90%",minWidth:"500px"};
  
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
  
  function changeToSecondTest() {
    
    // 清空答案
    setAnswers([]);
  
    // 設定新的 JSON 資料
    setJson(json2);
  
    // 將 state 設為 false
    setstate(false);
  
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
    confirm(`前往後側?`) ? changeToSecondTest(): window.location.reload() ;
  }

  return (
    <div style={style}>
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

export default App;
