import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Charts({ users }) {
  // 1. Group users by month
  const monthLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const userCountsByMonth = new Array(12).fill(0);

  users.forEach(user => {
    const month = new Date(user.created_at).getMonth(); // 0 - 11
    userCountsByMonth[month]++;
  });

  return (
    <BarChart
      width={600}
      series={[{ data: userCountsByMonth, label: 'Users per Month' }]}
      height={300}
      xAxis={[{ data: monthLabels, scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
