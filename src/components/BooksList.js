import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/booksSlice";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const notify = (id) => {
    handleDelete(id);
    toast.warn("Successfully deleted book", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deleteWithToast = (id) => {
    handleDelete(id);
    notify();
  };

  const [modalShown, setModalShown] = useState(false);

  return (
    <Container>
      <Row>
        <Col sm={8}>
          {" "}
          <h1>Books added ({books.length})</h1>
        </Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm={10}> </Col>
        <Col sm={2} className="mb-3 ">
         
          <Button>
            <Link
              variant="primary"
              size="sm"
              to="/create-book"
              className="linkButton"
            >
              Create Book
            </Link>
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-8">
        {books.map((book) => (
          
            <CardGroup>
              <Card  border="dark" className="mt-2">
                <Card.Img variant="top"  src={book.imageLink} />
                <Card.Body >
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <p>Description: {book.description}</p>
                    <p>Author: {book.author}</p>
                  </Card.Text>

                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                      <Button>
                        <Link
                          variant="primary"
                          size="sm"
                          className="linkButton"
                          to={`/edit-book/${book.id}`}
                        >
                          Edit
                        </Link>
                      </Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2" aria-label="Second group">
                      <Button
                        variant="danger"
                        onClick={() => deleteWithToast(book.id)}
                      >
                        {" "}
                        Delete
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>

                  <ToastContainer />
                  <Button className="mt-2">
                    <Link
                      variant="primary"
                      size="sm"
                      to={`/viewmore/${book.id}`}
                      className="linkButton"
                    >
                      View more
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </CardGroup>
          
        ))}
      </Row>
    </Container>
  );
}

export default BooksList;
