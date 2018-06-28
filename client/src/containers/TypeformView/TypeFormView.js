import React, { Component } from 'react';
import {
  Container,
  Grid,
  Button,
  Input
} from 'semantic-ui-react'
import './style.css'
import { ReactTypeformEmbed } from 'react-typeform-embed';

class TypeFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formUrl: '',
    }
  }

  onChangeUrl = event => {
    this.setState({ formUrl: event.target.value});
  }

  onPopupForm = event => {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <Container>
      <Grid centered>
        <Grid.Row>
          <Input 
            placeholder="Typeform URL" 
            onChange={this.onChangeUrl} 
            value={this.state.formUrl} 
          />
          <Button onClick={this.onPopupForm} primary>
            Open Form
          </Button>
        </Grid.Row>
        <Grid.Row>
          <div className="form__wrapper">
            <ReactTypeformEmbed
            popup={true}
            autoOpen={false}
            url={this.state.formUrl}
            hideHeaders={true}
            hideFooter={true}
            buttonText="Go!"
            style={{top: 100}}
            ref={(tf => this.typeformEmbed = tf) }
            key={this.state.formUrl} />
          </div>
        </Grid.Row>
      </Grid>
      </Container>
    );
  }
}

export default TypeFormView;