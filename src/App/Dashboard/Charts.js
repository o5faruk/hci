import React, { Component } from 'react';
import LineChartExample from './Charts/LineChart';
import AreaChartExample from './Charts/AreaChart';
import PieChartExample from './Charts/PieChart';
import BarChartExample from './Charts/BarChart';

import { Grid } from '@material-ui/core';

class Charts extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid md={6}>
                        <LineChartExample />
                    </Grid>
                    <Grid md={6}>
                        <AreaChartExample />
                    </Grid>
                    <Grid md={4}>
                        <PieChartExample />
                    </Grid>
                    <Grid md={8}>
                        <BarChartExample />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Charts;