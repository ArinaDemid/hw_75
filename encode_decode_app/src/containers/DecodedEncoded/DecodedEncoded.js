import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {valueChange, decodedMessage, encodedMessage} from "../../store/actions/messages";

class DecodedEncoded extends Component {

  render() {
    return (
      <Form className="Decoded_message" style={{marginTop: '40px'}} >
        <FormGroup>
          <Label for="decode">Decoded message</Label>
            <Input type="textarea" name="decode" id="decode" 
              value={this.props.message.decode}
              onChange={(event) => this.props.valueChange(event.target.name, event.target.value)} 
            />
        </FormGroup>
        
        <FormGroup style={{display: 'flex'}}>
          <Label for="password">Password</Label>
            <Input required type="text" name="password" id="password" style={{width: '300px', margin: '0 20px'}}
              value={this.props.message.password}
              onChange={(event) => this.props.valueChange(event.target.name, event.target.value)} 
            />
          <Button type="submit" color="primary"
            onClick={(event) => this.props.decoded(event, {password: this.props.message.password, message: this.props.message.decode})}
            disabled={this.props.message.decode !== '' && this.props.message.password !== '' ? false : true}  >
            <i className="fas fa-arrow-down" style={{fontSize: '20px'}}></i>
          </Button>
          <Button type="submit" color="success"
            onClick={(event) => this.props.encoded(event, {password: this.props.message.password, message: this.props.message.encode})} style={{marginLeft: '10px'}}
            disabled={this.props.message.encode !== '' && this.props.message.password !== '' ? false : true}  >
            <i className="fas fa-arrow-up" style={{fontSize: '20px'}}></i>
          </Button>
        </FormGroup>

        <FormGroup>
          <Label for="encode">Encoded message</Label>
            <Input type="textarea" name="encode" id="encode" 
              value={this.props.message.encode}
              onChange={(event) => this.props.valueChange(event.target.name, event.target.value)} 
            />
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.messages.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    valueChange: (name, value) => dispatch(valueChange(name, value)),
    decoded: (message, event) => dispatch(decodedMessage(message, event)),
    encoded: (message, event) => dispatch(encodedMessage(message, event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecodedEncoded);