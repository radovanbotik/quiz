// import Quiz1 from "./quizes/quiz1/Quiz1.jsx";
// import Quiz2 from "./quizes/quiz2/Quiz2.jsx";
import Quiz3 from "./quizes/quiz3/Quiz3.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <div className="flex h-full w-full place-content-center">
      <Layout>
        {/* <Quiz1 /> */}
        {/* <Quiz2 /> */}
        <Quiz3 />
      </Layout>
    </div>
  );
}

export default App;
