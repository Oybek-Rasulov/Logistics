// src/pages/Dashboard.jsx
import { Box, Grid, Paper, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <div className='w80'>
        <Box>
        <Typography variant="h4" gutterBottom>
            Dashboard Overview
        </Typography>

        <Grid container spacing={3}>
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Users</Typography>
                <Typography variant="h5" fontWeight="bold">1,240</Typography>
            </Paper>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Orders</Typography>
                <Typography variant="h5" fontWeight="bold">375</Typography>
            </Paper>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="subtitle1" color="textSecondary">Revenue</Typography>
                <Typography variant="h5" fontWeight="bold">$18,420</Typography>
            </Paper>
            </Grid>

            {/* Add more cards or charts below */}
            <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6">Activity</Typography>
                <Typography variant="body2" color="textSecondary">More analytics or charts can go here...</Typography>
            </Paper>
            </Grid>
        </Grid>
        </Box>
    </div>
  );
}
