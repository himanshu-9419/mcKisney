import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'
class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: [2014, 2015, 2016, 2017],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    }
    render() {
        return (
            <div id="chartOverview">
            <div>Your Organizations healt look good this month</div>
            <div><span>78</span><span>10</span></div>
            <div class="chart">
                <ResponsiveLine
                    data={[
                        {
                            "id": "whisky",
                            "color": "hsl(79, 70%, 50%)",
                            "data": [
                                {
                                    "color": "hsl(5, 70%, 50%)",
                                    "x": "DO",
                                    "y": 17
                                },
                                {
                                    "color": "hsl(234, 70%, 50%)",
                                    "x": "WS",
                                    "y": 25
                                },
                                {
                                    "color": "hsl(353, 70%, 50%)",
                                    "x": "BH",
                                    "y": 25
                                },
                                {
                                    "color": "hsl(187, 70%, 50%)",
                                    "x": "PF",
                                    "y": 32
                                },
                                {
                                    "color": "hsl(243, 70%, 50%)",
                                    "x": "MD",
                                    "y": 24
                                },
                                {
                                    "color": "hsl(130, 70%, 50%)",
                                    "x": "TT",
                                    "y": 27
                                },
                                {
                                    "color": "hsl(302, 70%, 50%)",
                                    "x": "DJ",
                                    "y": 54
                                },
                                {
                                    "color": "hsl(25, 70%, 50%)",
                                    "x": "SG",
                                    "y": 21
                                },
                                {
                                    "color": "hsl(83, 70%, 50%)",
                                    "x": "HK",
                                    "y": 8
                                }
                            ]
                        },
                        {
                            "id": "rhum",
                            "color": "hsl(159, 70%, 50%)",
                            "data": [
                                {
                                    "color": "hsl(221, 70%, 50%)",
                                    "x": "DO",
                                    "y": 39
                                },
                                {
                                    "color": "hsl(245, 70%, 50%)",
                                    "x": "WS",
                                    "y": 7
                                },
                                {
                                    "color": "hsl(350, 70%, 50%)",
                                    "x": "BH",
                                    "y": 10
                                },
                                {
                                    "color": "hsl(204, 70%, 50%)",
                                    "x": "PF",
                                    "y": 1
                                },
                                {
                                    "color": "hsl(125, 70%, 50%)",
                                    "x": "MD",
                                    "y": 34
                                },
                                {
                                    "color": "hsl(178, 70%, 50%)",
                                    "x": "TT",
                                    "y": 59
                                },
                                {
                                    "color": "hsl(196, 70%, 50%)",
                                    "x": "DJ",
                                    "y": 4
                                },
                                {
                                    "color": "hsl(110, 70%, 50%)",
                                    "x": "SG",
                                    "y": 11
                                },
                                {
                                    "color": "hsl(222, 70%, 50%)",
                                    "x": "HK",
                                    "y": 21
                                }
                            ]
                        },
                        {
                            "id": "gin",
                            "color": "hsl(349, 70%, 50%)",
                            "data": [
                                {
                                    "color": "hsl(50, 70%, 50%)",
                                    "x": "DO",
                                    "y": 16
                                },
                                {
                                    "color": "hsl(292, 70%, 50%)",
                                    "x": "WS",
                                    "y": 57
                                },
                                {
                                    "color": "hsl(197, 70%, 50%)",
                                    "x": "BH",
                                    "y": 33
                                },
                                {
                                    "color": "hsl(193, 70%, 50%)",
                                    "x": "PF",
                                    "y": 54
                                },
                                {
                                    "color": "hsl(217, 70%, 50%)",
                                    "x": "MD",
                                    "y": 36
                                },
                                {
                                    "color": "hsl(343, 70%, 50%)",
                                    "x": "TT",
                                    "y": 38
                                },
                                {
                                    "color": "hsl(264, 70%, 50%)",
                                    "x": "DJ",
                                    "y": 9
                                },
                                {
                                    "color": "hsl(159, 70%, 50%)",
                                    "x": "SG",
                                    "y": 56
                                },
                                {
                                    "color": "hsl(342, 70%, 50%)",
                                    "x": "HK",
                                    "y": 34
                                }
                            ]
                        },
                        {
                            "id": "vodka",
                            "color": "hsl(115, 70%, 50%)",
                            "data": [
                                {
                                    "color": "hsl(198, 70%, 50%)",
                                    "x": "DO",
                                    "y": 49
                                },
                                {
                                    "color": "hsl(134, 70%, 50%)",
                                    "x": "WS",
                                    "y": 9
                                },
                                {
                                    "color": "hsl(342, 70%, 50%)",
                                    "x": "BH",
                                    "y": 14
                                },
                                {
                                    "color": "hsl(48, 70%, 50%)",
                                    "x": "PF",
                                    "y": 1
                                },
                                {
                                    "color": "hsl(333, 70%, 50%)",
                                    "x": "MD",
                                    "y": 1
                                },
                                {
                                    "color": "hsl(339, 70%, 50%)",
                                    "x": "TT",
                                    "y": 5
                                },
                                {
                                    "color": "hsl(151, 70%, 50%)",
                                    "x": "DJ",
                                    "y": 51
                                },
                                {
                                    "color": "hsl(251, 70%, 50%)",
                                    "x": "SG",
                                    "y": 41
                                },
                                {
                                    "color": "hsl(206, 70%, 50%)",
                                    "x": "HK",
                                    "y": 53
                                }
                            ]
                        },
                        {
                            "id": "cognac",
                            "color": "hsl(89, 70%, 50%)",
                            "data": [
                                {
                                    "color": "hsl(170, 70%, 50%)",
                                    "x": "DO",
                                    "y": 22
                                },
                                {
                                    "color": "hsl(96, 70%, 50%)",
                                    "x": "WS",
                                    "y": 35
                                },
                                {
                                    "color": "hsl(5, 70%, 50%)",
                                    "x": "BH",
                                    "y": 39
                                },
                                {
                                    "color": "hsl(282, 70%, 50%)",
                                    "x": "PF",
                                    "y": 18
                                },
                                {
                                    "color": "hsl(302, 70%, 50%)",
                                    "x": "MD",
                                    "y": 35
                                },
                                {
                                    "color": "hsl(2, 70%, 50%)",
                                    "x": "TT",
                                    "y": 55
                                },
                                {
                                    "color": "hsl(55, 70%, 50%)",
                                    "x": "DJ",
                                    "y": 0
                                },
                                {
                                    "color": "hsl(209, 70%, 50%)",
                                    "x": "SG",
                                    "y": 18
                                },
                                {
                                    "color": "hsl(9, 70%, 50%)",
                                    "x": "HK",
                                    "y": 29
                                }
                            ]
                        }
                    ]}
                    margin={{
                        "top": 50,
                        "right": 110,
                        "bottom": 50,
                        "left": 60
                    }}
                    minY="auto"
                    stacked={true}
                    curve="natural"
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "country code",
                        "legendOffset": 36,
                        "legendPosition": "center"
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "count",
                        "legendOffset": -40,
                        "legendPosition": "center"
                    }}
                    dotSize={10}
                    dotColor="inherit:darker(0.3)"
                    dotBorderWidth={2}
                    dotBorderColor="#ffffff"
                    enableDotLabel={true}
                    dotLabel="y"
                    dotLabelYOffset={-12}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    legends={[
                        {
                            "anchor": "bottom-right",
                            "direction": "column",
                            "translateX": 100,
                            "itemWidth": 80,
                            "itemHeight": 20,
                            "symbolSize": 12,
                            "symbolShape": "circle"
                        }
                    ]}
                />
            </div>
            <div>
                <div>Response Rate</div>
                <div>83% 2100/2500 respondents</div>
            </div>
            </div>
        )
    }
}
export default Overview;