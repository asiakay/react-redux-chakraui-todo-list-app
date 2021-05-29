import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

import { Box, Input, Button, Center } from "@chakra-ui/react"


class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <Center>
        <Box 
          bg="" 
          w="50%" 
          p={10} 
          color="white"
          textTransform="uppercase"

          >
        <Input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
       <Center> <Button 
          className="add-todo"
          size="xs" 
          onClick={this.handleAddTodo}>
          Add Todo
        </Button>
        </Center>
        </Box>
        </Center>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
