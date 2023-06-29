import "@/styles/index.scss";
import classes from "@/App.module.scss";

interface AppProps {
  title: string;
}

function App({ title }: AppProps) {
  return (
    <>
      <h1 className={classes.title}>{title}</h1>
    </>
  );
}

export default App;
