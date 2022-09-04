import { Input, Box } from '@mf-example/ui';

function App({ a, b, setA, setB, op }: any) {
  return (
    <>
      <Input type="number" value={a} onChange={(e) => setA(+e.target.value)} />
      <Box>{op === 'sum' ? '+' : '-'}</Box>
      <Input type="number" value={b} onChange={(e) => setB(+e.target.value)} />
    </>
  );
}

export default App;
