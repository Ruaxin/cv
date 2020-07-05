        var myChart = echarts.init(document.getElementById('skills'));

        var option = {
            tooltip: {},
            radar: {
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [{
                        name: '静态页面',
                        max: 100
                    },
                    {
                        name: '编程基础',
                        max: 100
                    },
                    {
                        name: 'Vue',
                        max: 100
                    },
                    {
                        name: 'React',
                        max: 100
                    },
                    {
                        name: '项目开发',
                        max: 100
                    },
                    {
                        name: '沟通能力',
                        max: 100
                    }
                ]
            },
            series: [{
                type: 'radar',
                data: [{
                    value: [80, 80, 65, 65, 60, 90],
                    name: '能力雷达'
                }]
            }]
        };
        myChart.setOption(option);