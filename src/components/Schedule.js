import React from 'react';

class Schedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      schedules: []
    };
  }

  componentDidMount() {
         this.doschedule();
    }

  async doschedule(){
    const user = JSON.parse(window.sessionStorage.getItem("user"));
    let apiUrl = 'http://localhost:8080/api/schedules/?member_id=' + user.member_id;
    let data = await fetch(apiUrl)
        .then((response) => response.json());
    this.setState({schedules: data } );
  }

 
  renderTableData() {
     return this.state.schedules.map((schedule, index) => {
        
        const { classType, when } = schedule //destructuring
        const classtime = new Date(when);

        return (
           <tr key={classType}>
              <td className='text-left'>{classType}</td>
              <td className='text-center'>{classtime.toLocaleDateString("en-US")} {classtime.toLocaleTimeString("en-US")}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <table className='table table-bordered w-auto caption-top bg-white'id='ranks'>
              <caption className='fw-bold'>Schedule</caption>
              <tbody>
                 <tr>
                    <th>Class Type</th>
                    <th className='text-center'>When</th>
                   </tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}


export default Schedule;