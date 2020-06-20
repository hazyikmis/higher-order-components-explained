import React from 'react';

//const withData = (WrappedComponent, dataSource) => {
  //if we exported userList & userProfile components like> export default withData(UserList, 'https://jsonplaceholder.typicode.com/users')
  //then the above declaration might be correct
const withData = WrappedComponent => {
    class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: []
      };
    }

    componentDidMount() {
      //intentionally to show "LOADING" text on the screen!
      //2 LOADINGs because, 2 components try to load themselves
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then(response => response.json())
          .then(data => this.setState({ data: data.slice(0, 3) }));
      }, 1500);
    }

    render() {
      const { dataSource, ...otherProps } = this.props;

      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      );
    }
  }

  return WithData;
};

export default withData;
