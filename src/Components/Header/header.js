import React,{Component} from 'react';
import Picker,{MonthBox} from 'react-month-picker';
import './../../month-picker.css';
import MonthPicker from 'react-simple-month-picker';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            year:[2014,2015,2016,2017],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            subTab: ["Top Quartile","Quartile 2", "Quartile 3", "Bottom Quartile"],
            show:false,
            date:"Jan 2017"
        }
        this.showMonthPicker=this.showMonthPicker.bind(this);
        this.changeDate=this.changeDate.bind(this);
    }
    showMonthPicker(){
        this.setState({show:!this.state.show});
    }
    changeDate(date){
        this.setState({ date: this.state.month[+date.toDateString().split(' ')[2]] + "-" + date.toDateString().split(' ')[3] });
        this.setState({ show: !this.state.show });
    }
    render(){
        var tp = this.state.date;
        var tabsHTML = this.state.subTab.map(x => (<div  key={x}>{x}</div>));
        let pickerLang = {
            months: ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            , from: 'From', to: 'To'
        }
            , mvalue = { year: 2015, month: 11 }
            , mrange = { from: { year: 2014, month: 8 }, to: { year: 2015, month: 5 } }

        let makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month - 1] + '. ' + m.year)
            return '?'
        }
        return (
            <div>
                <div className="header">
                    <div id="logo"><i className="fab fa-react"></i></div>
                    <div className="cp" onClick={this.showMonthPicker} id="date">{tp}</div>
                    <div id="download"><i className="fas fa-download"></i></div>
                    <div id="filter"><i className="fas fa-filter"></i></div>
                </div>
                <div className="subHeader">
                    {tabsHTML}
                </div>
                {this.state.show?(<div style={{position:'absolute',backgroundColor:'#525252',left:'25%',top:'42px'}}>
                {/* <Picker
                    ref="pickAMonth"
                    years={[2008, 2010, 2011, 2012, 2014, 2015, 2016, 2017]}
                    value={mvalue}
                    lang={pickerLang.months}
                    onChange={this.handleAMonthChange}
                    onDismiss={this.handleAMonthChange}
                >
                    
                </Picker> */}
                    <MonthPicker onChange={(date) => { this.changeDate(date) }} />
                </div>):""}
            </div>
        )
    }
}
export default Header;