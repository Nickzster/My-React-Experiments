import React, { useEffect } from 'react';
/* components */
import { Container } from '../../components/Styled/Container';
import CardGrid from '../../components/CardGrid';
import Splitter from '../../components/Splitter';
import { getSomeData } from '../../actions/getData';
import { UserData } from '../../types/Interfaces';
import Spinner from '../../components/Spinner';
/* state */
import TestStore from '../../stores/TestStore';
import { connect } from 'react-redux';

interface Props {
  state: {
    getSomeData: Function;
    users: any;
    loading: boolean;
  };
}

const TestScreen: React.FC<Props> = props => {
  const { getSomeData, users, loading } = props.state;
  let data: any;
  useEffect(() => {
    getSomeData();
  });
  return (
    <React.Fragment>
      <Container>
        <h1>Test Screen!</h1>
      </Container>
      <Splitter
        data={{
          title: 'Click The Button!',
          description: 'Click the Button to change your life!',
          image: 'https://wallpaperplay.com/walls/full/1/e/6/78925.jpg',
          cta: 'Click Me!'
        }}
      />
      {loading === true && !users ? <Spinner /> : <CardGrid data={users} />}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.users,
  loading: state.loading
});

const mapStateToProps = (state: State) => ({
  loading: state.loading,
  users: state.users
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getSomeData: () => dispatch(getSomeData());
})

export default connect(mapStateToProps, mapDispatchToProps, TestScreen);
