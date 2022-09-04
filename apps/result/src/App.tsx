import { Box, Button } from '@mf-example/ui';
import { sum, subtract } from '@mf-example/utils';

function App({ a, b, op, setOp }: any) {
  return (
    <Box display="flex" gap={'8px'} alignItems="center">
      <Box flexShrink={0}> = {op === 'sum' ? sum(a, b) : subtract(a, b)}</Box>
      <Button
        onClick={() => {
          setOp(op === 'sum' ? 'subtract' : 'sum');
        }}
      >
        toggle
      </Button>
    </Box>
  );
}

export default App;
