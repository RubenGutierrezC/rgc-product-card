import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product, InitialValues } from "../interface/interface";

interface UseProductArgs {
  onChange?: (args: OnChangeArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues | undefined;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const isControlled = useRef(Boolean(onChange));

  const reset = () => {
    setCounter(initialValues?.count || 0);
  };

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ product, count: value });
    }

    const newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount && newValue > initialValues?.maxCount) return;

    setCounter(newValue);
    onChange &&
      onChange({
        product,
        count: newValue,
      });
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: Boolean(
      initialValues?.count && initialValues.maxCount === counter
    ),
    increaseBy,
    reset,
  };
};

export default useProduct;
