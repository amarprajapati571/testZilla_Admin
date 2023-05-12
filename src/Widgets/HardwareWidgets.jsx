import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function HardwareWidgets() {
    const [DatabaseStorage, setDatabaseStorage] = useState({
        series: [76],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.6,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [23, 40, 53, 91]
            },
          },
          labels: ['Average Results'],
        },
      });
      const [SSDStorage, setSSDStorage] = useState({
        series: [76],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
        },
      });
      const [CPUUtilization, setCPUUtilization] = useState({
        series: [76],
        options: {
          chart: {
            type: 'radialBar',
            offsetY: -20,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: 2,
                  left: 0,
                  color: '#999',
                  opacity: 1,
                  blur: 2
                }
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  offsetY: -2,
                  fontSize: '22px'
                }
              }
            }
          },
          grid: {
            padding: {
              top: -10
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 53, 91]
            },
          },
          labels: ['Average Results'],
        },
      });
      
  return (
    <>
        <div className="row mt-4">
          <div className="col-xl-4 col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h6 className="text-center">Database Storage</h6>
                                        <div className="d-flex align-items-center position-relative mt-4" style={{"height":"150px"}}>
                                            <div className="w-100 position-absolute" style={{"height":"150px","top":"0"}}>
                                            <ReactApexChart
                                                options={DatabaseStorage.options}
                                                series={DatabaseStorage.series}
                                                type="radialBar"
                                                height={200}
                                            />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    
                                </div>
          </div>
          <div className="col-xl-4 col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h6 className="text-center">SSD Storage</h6>
                                        <div className="d-flex align-items-center position-relative mt-4" style={{"height":"150px"}}>
                                            <div className="w-100 position-absolute" style={{"height":"150px","top":"0"}}>
                                            <ReactApexChart
                                                options={SSDStorage.options}
                                                series={SSDStorage.series}
                                                type="radialBar"
                                                height={200}
                                            />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    
                                </div>
          </div>
          <div className="col-xl-4 col-md-6">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h6 className="text-center">CPU Utilization</h6>
                                        <div className="d-flex align-items-center position-relative mt-4" style={{"height":"150px"}}>
                                            <div className="w-100 position-absolute" style={{"height":"150px","top":"0"}}>
                                            <ReactApexChart
                                                options={CPUUtilization.options}
                                                series={CPUUtilization.series}
                                                type="radialBar"
                                                height={200}
                                            />
                                            </div>
                                           
                                        </div>
                                    </div>
                                    
                                </div>
          </div>
        </div>
    </>
  )
}
