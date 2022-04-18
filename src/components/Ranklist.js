import React from 'react';

class RankList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ranks: [{"color":"White","classesTaken":1,"rankOrder":1,"createdAt":"2022-04-07T01:36:38.149Z","updatedAt":"2022-04-07T01:36:38.149Z"}]
    };
  }

  componentDidMount() {
         this.doranks();
    }

  async doranks(){
    const apiUrl = 'http://localhost:8080/api/ranks';
    let data = await fetch(apiUrl)
        .then((response) => response.json());
    this.setState({ranks: data } );
  }

  renderTableHeader() {
     let header = Object.keys(this.state.ranks[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.ranks.map((rank, index) => {
        const { color, classesTaken, rankOrder, } = rank //destructuring
        return (
           <tr key={color}>
              <td className='text-left'>{color}</td>
              <td className='text-center'>{classesTaken}</td>
              <td className='text-center'>{rankOrder}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <table className='table table-bordered w-auto caption-top bg-white'id='ranks'>
              <caption className='fw-bold'>Ranks</caption>
              <tbody>
                 <tr>
                    <th>Color Rank</th>
                    <th className='text-center'>Classes</th>
                    <th className='text-center'>Order</th>
                   </tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}


export default RankList;