
import React from 'react';
import { PieChart, Pie} from 'recharts';
const UiCreation = () => {
    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
      ];
        
  return (
    <>
       <div className="container">
        <div className="inner-cont">
            <div>Assignment I</div>
            <div>
                <button>🔗Invite Link   + Add Student</button>
            </div>
        </div>
        <div className="inner-cont2">
              <div>
                   <h1>2</h1>
                   <p>ACTIVE STUDENTS</p>
              </div>
              <div>
                   <h1>2</h1>
                   <p>SUBMISSION</p>
              </div>
        </div>
        <div className="inner-cont3">
              <div>
                  <PieChart width={300} height={300}>
                  <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
                  </PieChart>
              </div>
              <div>
                   
              </div>
        </div>
        <div></div>
        <div></div>
       </div>
    </>
  )
}

export default UiCreation
