import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API endpoint:', API_URL);
        console.log('Fetched leaderboard:', data);
        setLeaderboard(data.results || data);
      });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Leaderboard</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx}>
                <td>{entry.team}</td>
                <td>{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Leaderboard;
