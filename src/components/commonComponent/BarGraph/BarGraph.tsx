import { Button, TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
import ReactApexChart from 'react-apexcharts';
import download_icon from '../../../assets/icons/download_icon.svg';
import mail_icon from '../../../assets/icons/mail_icon.svg';

export default function BarGarph(props: {
  handleGraphView(arg0: number): void;
  currency: unknown;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  currencies: any[];
  graphView: number;
  options: ApexCharts.ApexOptions | undefined;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
}) {
  return (
    <div className="graph-div">
      <div className="dashboard-graph">
        <div>
          <text className="overview-text">Sales Data </text>
          <text className="overview-text2">- Current Day</text>
        </div>
        <div>
          <Button>
            <img
              src={download_icon}
              alt="download_icon"
              width="100%"
              height="70%"
            />
          </Button>
          <Button>
            <img src={mail_icon} alt="mail_icon" width="100%" height="70%" />
          </Button>
        </div>
      </div>
      <div className="line-div" />
      <div className="filter-graph-box">
        <div>
          <TextField
            id="outlined-select-currency-native"
            select
            value={props.currency}
            onChange={props.handleChange}
            SelectProps={{
              native: true,
            }}
            sx={{ width: '8vw' }}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: '12px',
                backgroundColor: '#F3F3F3',
                paddingTop: '8px',
                paddingBottom: '12px',
              },
            }}
          >
            {props.currencies?.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
        <div className="third-header">
          <div className={'graph-filter-box'}>
            <div className={props.graphView === 1 ? 'selectedBox' : 'hour-box'}>
              <li
                onClick={() => props.handleGraphView(1)}
                className={
                  props.graphView === 1
                    ? 'selected-overview-text3'
                    : 'overview-text3'
                }
              >
                Hour
              </li>
            </div>
            <div className="line2-div" />
            <div className={props.graphView === 2 ? 'selectedBox' : 'hour-box'}>
              <li
                onClick={() => props.handleGraphView(2)}
                className={
                  props.graphView === 2
                    ? 'selected-overview-text3'
                    : 'overview-text3'
                }
              >
                Day
              </li>
            </div>
            <div className="line2-div" />
            <div className={props.graphView === 3 ? 'selectedBox' : 'hour-box'}>
              <li
                onClick={() => props.handleGraphView(3)}
                className={
                  props.graphView === 3
                    ? 'selected-overview-text3'
                    : 'overview-text3'
                }
              >
                Week
              </li>
            </div>
            <div className="line2-div" />
            <div className={props.graphView === 4 ? 'selectedBox' : 'hour-box'}>
              <li
                onClick={() => props.handleGraphView(4)}
                className={
                  props.graphView === 4
                    ? 'selected-overview-text3'
                    : 'overview-text3'
                }
              >
                Month
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="line-div" id="chart">
        <ReactApexChart
          options={props.options}
          series={props.series}
          type="bar"
          height={220}
        />
      </div>
    </div>
  );
}
