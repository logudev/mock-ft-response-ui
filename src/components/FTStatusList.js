import React from 'react';
import axios from 'axios';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Spinner,
} from 'reactstrap';

class FTStatusList extends React.Component {
  state = {
    ftResponses: [],
    loading: false,
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const ftResponseResult = await axios.get(
      'http://10.176.20.197:5000/api/mockResponses/'
    );
    const ftResponses = [...ftResponseResult.data.data];

    ftResponses.forEach((tc) => {
      const respStatusGold = tc.mockResponses.every((resp) => {
        return resp.status === 'GOLD';
      });
      tc.status = respStatusGold ? 'GOLD' : 'SILVER';
    });

    console.log(ftResponses);
    this.setState({
      loading: false,
      ftResponses: ftResponses,
    });
  }

  render() {
    const spinnerStyle = {
      width: '4rem',
      height: '4rem',
      position: 'absolute',
      margin: '0 auto',
      left: '50%',
      top: '30%',
      zIndex: '1200',
    };
    const { ftResponses, loading } = this.state;
    return (
      <Container>
        {loading && <Spinner color='info' style={spinnerStyle} />}
        <ListGroup>
          {ftResponses &&
            ftResponses.map(({ _id, testCaseName, status }) => (
              <ListGroupItem key={_id}>
                {this.props.showDeleteIcons ? (
                  <Button
                    className='remove-btn'
                    color='danger'
                    close
                    onClick={() => {
                      this.props.deleteItem(_id);
                    }}
                  >
                    &times;
                  </Button>
                ) : null}
                {`${testCaseName} - ${status}`}
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    );
  }
}

export default FTStatusList;
