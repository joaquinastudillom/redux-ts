import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "..";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
