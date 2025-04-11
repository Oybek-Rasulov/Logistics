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
  
  export default function Brokers({ title, brokers }) {
    const mockBrokers = brokers || [];
  
    return (
      <Box sx={{ marginBottom: '2rem'}}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#2F4F65' }}>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>MC/DOT Number</TableCell>
                <TableCell>City/State</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockBrokers.map((broker, index) => {
                const created = new Date(broker.created_at);
                const formattedDate = created.toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                });
  
                return (
                  <TableRow key={index}>
                    <TableCell>{broker.full_name}</TableCell>
                    <TableCell>{broker.company_name}</TableCell>
                    <TableCell>{broker.email}</TableCell>
                    <TableCell>{broker.phone}</TableCell>
                    <TableCell>{broker.mc_dot_number}</TableCell>
                    <TableCell>{broker.city || '-'}, {broker.state || '-'}</TableCell>
                    <TableCell>{formattedDate}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
  