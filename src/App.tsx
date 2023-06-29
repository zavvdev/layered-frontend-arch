interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default App;
