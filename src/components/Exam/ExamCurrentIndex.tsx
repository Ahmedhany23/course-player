interface Props {
  currentIndex: number;
  total: number;
  dispatch: React.Dispatch<any>;
}

const ExamCurrentIndex: React.FC<Props> = ({
  currentIndex,
  total,
  dispatch,
}) => {
  return (
    <nav className="flex flex-wrap gap-5">
      {[...Array(total)].map((_, idx) => (
        <button
          type="button"
          key={idx}
          onClick={() => dispatch({ type: "GO_TO", payload: idx })}
          className={`w-10 h-10 flex items-center cursor-pointer justify-center text-lg hover:text-indigo-600 hover:bg-white ${
            idx === currentIndex ? "bg-white text-indigo-600" : "text-white"
          } border border-white rounded-full transition-all duration-300 ease-in-out`}
        >
          {idx + 1}
        </button>
      ))}
    </nav>
  );
};

export default ExamCurrentIndex;
