import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="secondary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Hey!</Alert.Heading>
        <p>People are looking at your profile. Find out who.</p>
      </Alert>
    );
  }
}

export default AlertDismissibleExample;