import Quiz1 from "./quizes/quiz1/Quiz1.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <div className="flex h-full w-full place-content-center">
      <Layout>
        <Quiz1 />
      </Layout>
    </div>
  );
}

export default App;
