import React from 'react';
import './style.scss';
import { Grid } from '@mui/material';

type Props = {
  data: any;
  gridColumn: number;
};

function DetailsCard({ data, gridColumn }: Props) {
  const record = data ?? {};

  console.log({ data, gridColumn });
  return (
    <div className="details-card-container">
      <div className="details-card-inner-container">
        <div className="header">{record?.title || '--'}</div>
        <div className="underline"></div>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {record?.details?.map((eachItem: any, index: number) => {
            return (
              <Grid item xs={gridColumn} key={index}>
                <div className="each-info">
                  <div className="info-label">{eachItem?.label ?? '--'}</div>
                  <div className="info-value">{eachItem?.value ?? '--'}</div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
export default DetailsCard;
