/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import Sidebar from "../layout/Sidebar"

const Messages = () => {
  const messages = [
    {
      location: 'zaria',
      message:
        'Hello world this is a test message blah blah something about a new disease in town',
      fileUrl: 'http://fdfsfs.pdf',
    },
  ];

  return (
    <div>
      <Sidebar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">File</TableCell>
            <TableCell align="left">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">{i + 1}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">
                <a style={{ color: 'blue' }} href={row.fileUrl} target="_blank" rel="noopener noreferrer">
                  file
                </a>
              </TableCell>
              <TableCell align="left">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Messages;
