import { UIWrapper, Box } from '@mf-example/ui';
import { useState } from 'react';

// @ts-ignore
import InputsApp from 'inputs/App';
// @ts-ignore
import ResultApp from 'result/App';

function App() {
  let [op, setOp] = useState<'sum' | 'subtract'>('sum');
  let [a, setA] = useState(2);
  let [b, setB] = useState(2);

  return (
    <UIWrapper>
      <Box
        mt={3}
        display="flex"
        flexDirection="column"
        gap={4}
        alignItems="center"
      >
        <Box
          maxWidth="400px"
          display="grid"
          alignItems="center"
          gridTemplateColumns="1fr auto 1fr 2fr"
          gap={1}
        >
          <InputsApp a={a} b={b} setA={setA} setB={setB} op={op} />
          <ResultApp a={a} b={b} op={op} setOp={setOp} />
        </Box>
      </Box>
    </UIWrapper>
  );
}

export default App;
