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
  
  export default function ContactMessages({ title, messages }) {
    const contactMessages = messages || [];
  
    return (
      <Box sx={{ marginBottom: '2rem'}}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: '#2F4F65' }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactMessages.map((msg, index) => {
                const created = new Date(msg.created_at);
                const formattedDate = created.toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                });
  
                return (
                  <TableRow key={index}>
                    <TableCell>{msg.name}</TableCell>
                    <TableCell>{msg.email}</TableCell>
                    <TableCell>{msg.phone}</TableCell>
                    <TableCell>{msg.city}</TableCell>
                    <TableCell>{msg.message}</TableCell>
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
  