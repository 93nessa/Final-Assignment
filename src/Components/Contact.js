import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      newComment: '',
      editingIndex: -1,
    };
  }

  handleCommentChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleSubmit = () => {
    const { newComment, comments, editingIndex } = this.state;

    if (newComment.trim() !== '') {
      if (editingIndex === -1) {
        this.setState({
          comments: [...comments, newComment],
          newComment: '',
        });
      } else {
        const updatedComments = [...comments];
        updatedComments[editingIndex] = newComment;
        this.setState({
          comments: updatedComments,
          newComment: '',
          editingIndex: -1,
        });
      }
    }
  };

  handleEdit = (index) => {
    const { comments } = this.state;
    this.setState({
      newComment: comments[index],
      editingIndex: index,
    });
  };

  handleDelete = (index) => {
    const { comments } = this.state;
    const updatedComments = comments.filter((_, i) => i !== index);
    this.setState({ comments: updatedComments });
  };

  render() {
    const { comments, newComment } = this.state;

    return (
      <div>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            value={newComment}
            onChange={this.handleCommentChange}
          />
        </FloatingLabel>
        <Button className="button-27" role="button" onClick={this.handleSubmit}>
          {this.state.editingIndex === -1 ? "Submit Comment" : "Save Comment"}
        </Button>
        <div>
          <h2>Comments:</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {comment}
                <Button className="button-27" role="button" onClick={() => this.handleEdit(index)}>Edit</Button>
                <Button className="button-27" role="button" onClick={() => this.handleDelete(index)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
