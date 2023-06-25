import Quiz3 from "./quizes/quiz3/Quiz3.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <div className="flex h-full w-full place-content-center bg-stone-200">
      <Layout>
        <Quiz3 />
      </Layout>
    </div>
  );
}

export default App;
