import "./styles.css";

useConfirm = (massage, callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  if (!rejection || typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(massage)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the world...");
  const reject = () => console.log("rejected....");
  const confirmDelete = useConfirm("Are you sure delete?", deleteWorld, reject);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the word</button>
    </div>
  );
}
