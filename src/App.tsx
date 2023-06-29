import "./styles.css";

interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">{title}</h1>
    </>
  );
}

export default App;
