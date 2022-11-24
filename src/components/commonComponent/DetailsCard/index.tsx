import React from 'react';
import './style.scss';
import { Grid } from '@mui/material';
import info_icon from '../../../assets/images/info_icon.svg';

type Props = {
  data: {
    title: string;
    details: Array<object>;
  };
  gridColumn: number;
  infoIcon: boolean;
};

function DetailsCard({ data, gridColumn, infoIcon }: Props) {
  const record = data ?? ({} as any);

  return (
    <div className="details-card-container">
      {Object.keys(record).length > 0 ? (
        <div className="details-card-inner-container">
          <div className="header">
            {record?.title || '--'}
            {infoIcon && (
              <>
                <img src={info_icon} className="info-icon" alt="info_icon" />
                <div className="info-label margins">
                  View a customer’s key personal information here.
                </div>
              </>
            )}
          </div>

          <div className="underline"></div>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
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
      ) : (
        <div className="no-data-container">No Data</div>
      )}
    </div>
  );
}
export default DetailsCard;
