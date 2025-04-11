import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    TableContainer,
  } from '@mui/material';
  
  export default function Drivers({ title, drivers }) {
    const mockDrivers = drivers || [];
  
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#2F4F65' }}>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockDrivers.map((driver, index) => {
                const appliedAt = new Date(driver.created_at);
                const formattedDate = appliedAt.toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                });
  
                return (
                  <TableRow key={index}>
                    <TableCell>{driver.first_name}</TableCell>
                    <TableCell>{driver.last_name}</TableCell>
                    <TableCell>{driver.phone_number}</TableCell>
                    <TableCell>{driver.email}</TableCell>
                    <TableCell>{driver.city}</TableCell>
                    <TableCell>{driver.state}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  