import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API endpoint:', API_URL);
        console.log('Fetched workouts:', data);
        setWorkouts(data.results || data);
      });
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Workouts</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Workouts;
