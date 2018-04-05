import React, { Component } from 'react';
class Outcomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Personal Ownership", data: 78,difference:6 },
                { name: "People Pref", data: 70, difference: 9 },
                { name: "Talennt Aquiition", data: 17, difference: 10  },
                { name: "Supportive", data: 18, difference:22 },
                { name: "Challenging Ownership", data: 28, difference: 26  },
                { name: "Personal Ownership", data: 86, difference: 16  }
            ]
        }
    }
    render() {
        var height = 100 / this.state.data.length;
        var chartHTML = this.state.data.map(x => (
            <div style={{ "height": height + "%", padding: '20px 40px',width:'90%' }} >
                <div style={{display:"inline-block"}}><i class="fa fa-angle-right"></i></div>
                <div style={{ display: "inline-block",width:'98%' }} >
                    <div  className="chartDiv">
                        <div style={{ float: 'left' }}>{x.name}</div>
                        <div style={{ float: 'right' }}>{x.data}</div>
                        <div style={{ clear: "both" }}></div>
                    </div>
                    <div style={{ display: "inline-block" }} className="chartColumn">
                        <div style={{ width: x.data + "%" }} className="columnFill"></div>
                    </div>
                </div>
            </div>
        ))
        var chartHTML2 = this.state.data.map(x => (
            <div style={{ "height": height + "%", padding: '20px 40px', width: '90%' }} >
                <div style={{height:'36px',color:Math.random()>0.7?"red":"green"}} >
                    {x.difference}
                </div>
            </div>
        ))
        return (
            <div>
                <div className="subTab">
                    <div>Top Practises</div>
                    <button>Top Numbers</button>
                </div>
                <div class="outcomechart">
                    <div style={{width:'70%'}}>{chartHTML}</div>
                    <div style={{ width: '15%' }}>{chartHTML2}</div>
                </div>
            </div>
        )
    }
}
export default Outcomes;