
import React from 'react';
import { PieChart, Pie} from 'recharts';
const UiCreation = () => {
    const data = [
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
                <p>Submited Activite's v/s Pending Submissions</p>
                  <PieChart width={250} height={200} cx="50%" cy="50%">
                  <Pie data={data} dataKey="students" outerRadius={500} fill="green"cx="50%" cy="50%" />
                  </PieChart>
                  <p style={{ color: 'green'}}>⬛Submitted<span style={{ color: 'blue'}}>⬛Pending Submissions</span></p>
              </div>
              <div>     
              </div>
        </div>
        <br />
        <div className="inner-cont4">
             <h3>Active Students</h3>
             <table>
        <tr>
          <th>Name</th>
          <th>Last Activity</th>
          <th>Sessions</th>
          <th>Words</th>
          <th>Submission Date</th>
          <th>Type ID</th>
          <th>ID</th>
          
        </tr>
        <tr>
          <td>Traceveg 653</td>
          <td>12 hours ago</td>
          <td>7</td>
          <td>65</td>
          <td>12 hours ago</td>
          <td>100%</td>
          <td>100%</td>
        
        </tr>
        <tr>
        <td>Will Kinsman</td>
          <td>a month ago</td>
          <td>2</td>
          <td>118</td>
          <td>a month ago</td>
          <td>80%</td>
          <td>44%</td>
        </tr>
       
      </table>
        </div>
        <div></div>
       </div>
    </>
  )
}

export default UiCreation
