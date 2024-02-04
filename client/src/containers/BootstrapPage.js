import { Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapPage = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="example@email.com" />
          <Form.Text className="text-muted">we'll never share your email. Trust us.</Form.Text>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Login
        </Button>
      </Form>
      <Card className="mb-4">
        <Card.Img></Card.Img>
        <Card.Body>
          <Card.Title>Card Example</Card.Title>
          <Card.Text>This is an example of react bootstrap class</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="success">This is a button</Alert>
      <Button>Test Button</Button>
    </Container>
  );
};

export default BootstrapPage;
