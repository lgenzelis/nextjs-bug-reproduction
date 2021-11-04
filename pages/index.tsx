import { GetStaticProps } from 'next';

const getStaticProps: GetStaticProps = () => ({
  props: {},
});

function App() {
  return <div>This is a test :)</div>
}

export default App;
export { getStaticProps };
