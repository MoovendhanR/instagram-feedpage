
import React from 'react';
import { PieChart, Pie} from 'recharts';
import { Chart } from "react-google-charts";

const UiCreation = () => {
    const data = [
        {name: 'Geek-o-mania', students: 1000}
      ];
      const data1 = [
        ["Year", "Students"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ];
      const options = {
   isStacked: true,
  height: 250,
  legend: { position: "top", maxLines: 2 },
  vAxis: { minValue: 0 },
      };
        
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
                <h2>Day-wise submissions</h2> 
        <Chart
      chartType="AreaChart"
      width="100%"
      height="250px"
      data={data1}
      options={options}
    />

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
        <h2 style={{marginRight:"75%"}}>Submissions</h2>
        <div className="inner-cont5">
             <table>
        <tr>
          <th>Name</th>
          <th>Submission Status</th>
          <th>Grading Status</th>
          <th>Submission Date</th>
          <th>Actions</th>
         
          
        </tr>
        <tr>
        <td>Will Kinsman</td>
          <td style={{backgroundColor:"green",borderRadius:"10px",textAlign:"center",color:"white"}}>Submitted</td>
          <td style={{backgroundColor:"grey",borderRadius:"10px",textAlign:"center",color:"white"}}>Pending</td>
          <td>a month ago</td>      
          <td>
            <button style={{backgroundColor:"green",borderRadius:"10px",textAlign:"center",color:"white",border:"none",padding:"3px"}}>Download Keylogs</button><button style={{backgroundColor:"blue",borderRadius:"10px",textAlign:"center",color:"white",border:"none",padding:"3px"}}>Show Submission</button>
          </td>
        </tr>  
        <tr>
          <td>Traceveg 653</td>
          <td style={{backgroundColor:"green",borderRadius:"10px",textAlign:"center",color:"white"}}>Submitting</td>
          <td style={{backgroundColor:"grey",borderRadius:"10px",textAlign:"center",color:"white"}}>Pending</td>
          <td>6 hours ago</td>
          <td><button style={{backgroundColor:"green",borderRadius:"10px",textAlign:"center",color:"white",border:"none",padding:"3px"}}>Download Keylogs</button><button style={{backgroundColor:"blue",borderRadius:"10px",textAlign:"center",color:"white",border:"none",padding:"3px"}}>Show Submission</button>
</td>
        </tr>
      </table>
        </div>
       </div>

     
    </>
  )
}

export default UiCreation
