import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import _ from 'lodash';

import config from '../../../../config';

function HomeRoute() {
  const firstDay = moment(),
    columns = 7,
    years = 100;

  const days = moment(firstDay).add(years, 'years').diff(firstDay, 'days'),
    rows = Math.ceil(days / columns);

  const renderDay = dayMoment => (
    <div
      style={{
        display: 'table-cell',
      }}
    >

      <div
        style={{
          width: '100%',
          paddingBottom: '100%',
          position: 'relative',
        }}
      >

        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >

          {dayMoment.dayOfYear() === 1
            ? <div
              style={{
                fontSize: '2em',
              }}
            >
              {dayMoment.year()}
            </div>
            : ''}

          {dayMoment.date() === 1
            ? <div
              style={{
                fontSize: '1.5em',
              }}
            >
              {dayMoment.format('MMMM')}
            </div>
            : ''}

          <div
            style={{
              fontSize: '1em',
            }}
          >
            {dayMoment.format('D')}
          </div>

        </div>

      </div>

    </div>
  );

  return (
    <div>
      <Helmet>
        <title>{`${years} year calendar`}</title>
      </Helmet>

      <div
        style={{
          display: 'table',
          width: '100%',
        }}
      >
        {_.range(rows).map(r => (
          <div
            style={{
              display: 'table-row',
            }}
          >
            {_.range(columns).map(c => renderDay(moment(firstDay).add(r * columns + c, 'days')))}
          </div>
        ))}
      </div>

    </div>
  );
}

export default HomeRoute;
