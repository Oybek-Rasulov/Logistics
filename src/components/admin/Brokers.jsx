import React, { useState } from 'react';
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
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';

export default function Brokers({ title, brokers }) {
  const [selectedStatus, setSelectedStatus] = useState({}); // Keep track of selected statuses for each broker

  // If brokers data is available, use it, otherwise fall back to empty array
  const mockBrokers = brokers || [];

  // Handle status change
  const handleStatusChange = async (brokerid, newStatus) => {
    console.log(brokerid)
    // Update the selected status locally
    setSelectedStatus((prev) => ({
      ...prev,
      [brokerid]: newStatus,
    }));

    try {
      // Make API call to update status in backend
      const response = await fetch('http://localhost:3001/api/update-broker-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brokerid, newStatus }),
      });

      // You can handle the response here if needed
      if (response.ok) {
        console.log(`Broker status updated to ${newStatus}`);
      } else {
        console.error('Failed to update broker status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <Box sx={{ marginBottom: '2rem' }}>
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
              <TableCell>Status</TableCell> {/* Added column for status */}
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
                  <TableCell>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={selectedStatus[broker.brokerid] || broker.status || 'pending'}  
                        onChange={(e) =>
                          handleStatusChange(broker.brokerid, e.target.value) 
                        }
                        sx={{ width: '200px' }}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="rejected">Rejected</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
