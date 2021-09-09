import { useState } from "react";
import { useTypedSelector } from "../state/hooks/useTypedSelector";
import { useActions } from "../state/hooks/useAction";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  // similar to mapStateToProps with class based components (useSelector)
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>error</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((i) => <div key={i}>{i}</div>)}
    </div>
  );
};

export default RepositoriesList;
