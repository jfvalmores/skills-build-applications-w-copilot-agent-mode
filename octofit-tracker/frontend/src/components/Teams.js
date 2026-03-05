import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API endpoint:', API_URL);
        console.log('Fetched teams:', data);
        setTeams(data.results || data);
      });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Teams</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={idx}>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Teams;
