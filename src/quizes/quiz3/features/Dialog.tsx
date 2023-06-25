const Dialog = ({ headline, content, status }) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        className={`modal-box ${
          status === "inProgress" ? "bg-white" : status === "success" ? "bg-green-300" : "bg-red-300"
        }`}
      >
        <button className="btn-ghost btn-sm btn-circle btn absolute right-2 top-2">✕</button>
        <h3 className="text-lg font-bold">{headline}</h3>
        <p className="py-4">{content}</p>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Dialog;
