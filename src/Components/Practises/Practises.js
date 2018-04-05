import React, { Component } from 'react';
class Practises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                {name: "Personal Ownership", data: 78},
                { name: "People Pref", data: 70 },
                { name: "Talennt Aquiition", data: 17 },
                { name: "Supportive", data: 18 },
                { name: "Challenging Ownership", data: 28 },
                { name: "Personal Ownership", data: 86 }
            ]
        }
    }
    render() {
        var height=100/this.state.data.length;
        var chartHTML=this.state.data.map(x=>(
            <div style={{ "height": height+"%", padding:'20px 40px'}} >
                <div className="chartDiv">
                    <div style={{float:'left'}}>{x.name}</div>
                    <div style={{ float: 'right' }}>{x.data}</div>
                    <div style={{clear:"both"}}></div>
                </div>
                <div className="chartColumn">
                    <div style={{width:x.data+"%"}} className="columnFill"></div>
                </div>
            </div>
        ))
        return (
            <div>
                <div className="subTab">
                    <div>Top Practises</div>
                    <button>Top Numbers</button>
                </div>
                {chartHTML}
            </div>
        )
    }
}
export default Practises;