export default function List(json,method){
    return(
        <>
            {json.map((item, index) => (
                <div key={index} style={{display:"flex",flexDirection:"column",marginLeft:"20px"}}>
                  <p>{item.question}</p>
                  <div>
                    <input type="radio" name={index} value="1" onChange={(event) => method.handleAnswerChange(event, index)} />
                    <label>{item.option[0]}</label>
                    </div>
                    <div>
                    <input type="radio" name={index} value="2" onChange={(event) => method.handleAnswerChange(event, index)} />
                    <label>{item.option[1]}</label>
                    </div>
                    <div>
                    <input type="radio" name={index} value="3" onChange={(event) => method.handleAnswerChange(event, index)} />
                    <label>{item.option[2]}</label>
                    </div>
                    <div>
                    <input type="radio" name={index} value="4" onChange={(event) => method.handleAnswerChange(event, index)} />
                    <label>{item.option[3]}</label>
                  </div>
                </div>
              ))}
        </>
    )
}