import { Box, Button, NativeBaseProvider, Text } from 'native-base';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store';
import { counterSlice } from './test';

function Test() {
  const counter = useSelector<RootState, number>(s => s.counter.value);
  const dispatch = useDispatch();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button onPress={() => dispatch(counterSlice.actions.decrement())}>
        -
      </Button>
      <Text>{counter}</Text>
      <Button onPress={() => dispatch(counterSlice.actions.increment())}>
        +
      </Button>
    </Box>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Test />
      </NativeBaseProvider>
    </Provider>
  );
}
