import React from 'react';
import './style.scss';
import { Grid, Stack } from '@mui/material';
import info_icon from '../../../assets/images/info_icon.svg';
import HeaderWithInfo from '../../commonComponent/HeaderWithInfo';

type Props = {
  data: {
    title: string;
    // note?: string;
    details: Array<object>;
  };
  gridColumn: number;
};

function DetailsCard({ data, gridColumn }: Props) {
  const record = data ?? ({} as any);

  return (
    <Stack className="details-card-container">
      {Object.keys(record).length > 0 ? (
        <Stack className="details-card-inner-container">
          <HeaderWithInfo
            header={record?.title || '--'}
            isInfoEnabled={true}
            // info={
            //   record?.note ||
            //   'Lorem ipusm dolor sit amet, consectetur adipiscing elit.'
            // }
            isDownloadEnabled={false}
          />

          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="details-card"
          >
            {record?.details?.map((eachItem: any, index: number) => {
              return (
                <Grid item xs={gridColumn}  key={index}>
                  <Stack className="each-info">
                    <Stack className="info-label">
                      {eachItem?.label ?? '--'}
                    </Stack>
                    <Stack
                      className="info-value"
                      style={{
                        color:
                          eachItem?.value === 'Rejected'
                            ? '#992D26'
                            : ' #151515',
                      }}
                    >
                      {eachItem?.value ?? '--'}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      ) : (
        <Stack className="no-data-container">No Data</Stack>
      )}
    </Stack>
  );
}
export default DetailsCard;
